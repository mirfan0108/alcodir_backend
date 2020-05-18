const router = require('express').Router();
const { generateToken, logOut } = require('../controller/Token.Ctrl')
const { isAuth } = require('./middleware/auth.js')
/** 
 * START POST
 */
// TODO POST HERE
router.post('/token',  generateToken)
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
router.delete('/out', isAuth, logOut)

/**
 * END DELETE
 */
module.exports = router;