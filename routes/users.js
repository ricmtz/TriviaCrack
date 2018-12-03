const { Router } = require('express');
const { CtrlUser } = require('../controllers');
const router = Router();

router.get('/#login', CtrlUser.loginPage);
router.get('/#singin', CtrlUser.registerPage);
router.get('/profile', CtrlUser.profilePage);
router.post('/profile', function(req, res){
    res.send('Not implemented')
});
router.get('/profile/edit', CtrlUser.profileEditPage);
router.get('/profile/add_emails', CtrlUser.addEmailsPage);

module.exports = router;
