const router = require('express').Router();
const { createReport_linkedin } = require('../../controller/sales/report.controller.js')
const { isAuth } = require('../middleware/auth.js')

router.post('/linkedin', isAuth, createReport_linkedin)
router.get('/linkedin', isAuth, )
module.exports = router;