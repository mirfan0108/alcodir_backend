const router = require('express').Router();
const { navigator } = require('../controller/Privilege.Ctrl')
const { isAuth } = require('./middleware/auth.js')
/** 
 * START POST
 */
// TODO POST HERE
router.get('/navigation', isAuth, navigator)
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