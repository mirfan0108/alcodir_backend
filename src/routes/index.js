const router = require('express').Router();

const auth = require('./Auth.Route');
router.use('/auth',  auth);

const avatar = require('./static/Avatar.Route')
router.use('/static', avatar)

const privilege = require('./Privilege.Route')
router.use('/privilege', privilege)

module.exports = router;