import Student from '../model /student.js';

// Create a new Student
export const createStudent = async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const student = await Student.create({ name, email, age });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Student by ID
export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Student
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    student.name = name;
    student.email = email;
    student.age = age;
    await student.save();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Student
export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    await student.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
