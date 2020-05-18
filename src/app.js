const express       = require('express');
const app           = express();
var cors            = require('cors')
const bodyParser    = require('body-parser');
const expressValidator = require('express-validator')
const index         = require('./routes/index');
const helmet        = require('helmet')
let workers         = [];
var cluster         = require('cluster');
const nocache       = require('nocache');
var whitelist = ['*']
var corsOptions = {
  origin: '*',
}


const setupWorkerProcesses = () => {
    let numCores = require('os').cpus().length;
    console.log('Master cluster setting up ' + numCores + ' workers');
    for(let i = 0; i < numCores; i++) {
        workers.push(cluster.fork());
        workers[i].on('message', function(message) {
            console.log(message);
        });
    }
    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is listening');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
        workers.push(cluster.fork());
        workers[workers.length-1].on('message', function(message) {
            console.log(message);
        });
    });
};

const setUpExpress = () => {
    app.set('etag', false)
    app.use(nocache());
    app.use(helmet())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))    
    app.disable('x-powered-by');
    app.use('/api/v1', cors(corsOptions), index);
    const port = process.env.PORT || 8000;
    app.listen(port, function() {
      console.log(`Server Starts on ${port}`);
    });
};
/**
 * Setup server either with clustering or without it
 * @param isClusterRequired
 * @constructor
 */
const setupServer = (isClusterRequired) => {

    // if it is a master process then call setting up worker process
    if(isClusterRequired && cluster.isMaster) {
        setupWorkerProcesses();
    } else {
        // to setup server configurations and share port address for incoming requests
        setUpExpress();
    }
};

setupServer(true);

module.exports = app;