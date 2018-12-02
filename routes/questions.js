const { Router } = require('express');
const { CtrlQuestion } = require('../controllers');
const router = Router();

router.get('/question', CtrlQuestion.questionPage);

module.exports = router;
