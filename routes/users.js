const { Router } = require('express');
const { CtrlUser } = require('../controllers');
const router = Router();

router.get('/login', CtrlUser.loginPage);

router.get('/register', CtrlUser.registerPage);

module.exports = router;