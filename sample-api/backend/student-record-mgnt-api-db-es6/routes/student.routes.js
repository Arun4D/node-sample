import express from 'express';
import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} from '../controllers/student.controller.js';

const router = express.Router();

router.post('/student', createStudent);
router.get('/student', getStudents);
router.get('/student/:id', getStudentById);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);

export default router;
