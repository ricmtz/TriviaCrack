const { Router } = require('express');
const usersRoute = require('./users');
const { CtrlInformation } = require('../controllers');

const router = Router();

router.get('/', CtrlInformation.indexPage);

router.use(usersRoute);

module.exports = router;