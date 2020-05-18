const router = require('express').Router();
const { generateToken, logOut } = require('../controller/Token.Ctrl')
const { isAuth } = require('./middleware/auth.js')

router.post('/token',  generateToken)
router.delete('/out', isAuth, logOut)

module.exports = router;