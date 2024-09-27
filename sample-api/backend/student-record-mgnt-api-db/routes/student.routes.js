var express = require('express');
var router = express.Router();
var studentController = require('../controllers/student.controller.js');

router.post('/student', studentController.createStudent);
router.get('/student', studentController.getStudents);
router.get('/student/:id', studentController.getStudentById);
router.put('/student/:id', studentController.updateStudent);
router.delete('/student/:id', studentController.deleteStudent);

module.exports = router;
