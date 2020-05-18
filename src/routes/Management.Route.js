const router = require('express').Router();
const { navigator } = require('../controller/Privilege.Ctrl')
const management = require('../controller/management/vpoint.controller')
const { isAuth } = require('./middleware/auth.js')
/** 
 * START POST
 */
// TODO POST HERE
// router.POST('/management/request/vpoint', isAuth, navigator, management.createVpointRequest)
router.POST('/management/request/vpoint',  management.createVpointRequest)
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