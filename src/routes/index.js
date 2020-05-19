const router = require('express').Router();

const auth = require('./Auth.Route');
router.use('/auth',  auth);

const avatar = require('./static/Avatar.Route')
router.use('/static', avatar)

const privilege = require('./Privilege.Route')
router.use('/privilege', privilege)

const sales = require('./sales/Sales.Route')
router.use('/sales', sales)

const management = require('./management/Management.Route')
router.use('/management', management)

module.exports = router;