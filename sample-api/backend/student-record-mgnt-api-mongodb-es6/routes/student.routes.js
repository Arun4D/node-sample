import express from 'express';
import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} from '../controllers/student.controller.js';
import {
  getAuthByName
} from '../controllers/auth.controller.js'

const router = express.Router();

router.post('/auth', getAuthByName);
router.post('/student', createStudent);
router.get('/student', getStudents);
router.get('/student/:id', getStudentById);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);

export default router;
