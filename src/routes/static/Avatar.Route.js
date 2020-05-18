const router = require('express').Router();
var path = require('path');
var dir = path.join(__dirname, '..', '..', '..' ,'static');
var multer = require('multer');

/** 
 * START POST
 */
// TODO POST HERE

router.get('/avatar/:name', (req, res) => {
    if(req.params.name) {
        res.sendFile(`${dir}/avatar/${req.params.name}`)
    }
})
/** 
* END POST
*/

 /**
* START GET
*/
// TODO GET HERE
/**
* END GET
*/

/**
* START PUT
*/
// TODO PUT HERE
/**
* END PUT
*/

/**
 * START DELETE
 */
/**
 * END DELETE
 */
module.exports = router;