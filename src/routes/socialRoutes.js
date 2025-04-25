const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');

router.get('/cursos', socialController.getCourses);
router.get('/info', socialController.getStats);
router.get('/ongs', socialController.getNGOs);
router.get('/dicas', socialController.getRandomTip);

module.exports = router;