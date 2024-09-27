var db = require('../config/db.config.js');

// Create a new Student
exports.createStudent = function(req, res) {
  var user = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  };

  var query = "INSERT INTO student (name, email, age) VALUES (?, ?, ?)";
  db.query(query, [user.name, user.email, user.age], function(err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Student added successfully!');
    }
  });
};

// Get All Students
exports.getStudents = function(req, res) {
  var query = "SELECT * FROM student";
  db.query(query, function(err, results) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

// Get Student by ID
exports.getStudentById = function(req, res) {
  var query = "SELECT * FROM student WHERE id = ?";
  db.query(query, [req.params.id], function(err, result) {
    if (err) {
      res.status(500).send(err);
    } else if (result.length === 0) {
      res.status(404).send('Student not found');
    } else {
      res.status(200).json(result[0]);
    }
  });
};

// Update Student
exports.updateStudent = function(req, res) {
  var user = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  };

  var query = "UPDATE student SET name = ?, email = ?, age = ? WHERE id = ?";
  db.query(query, [user.name, user.email, user.age, req.params.id], function(err, result) {
    if (err) {
      res.status(500).send(err);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Student not found');
    } else {
      res.status(200).send('Student updated successfully');
    }
  });
};

// Delete Student
exports.deleteStudent = function(req, res) {
  var query = "DELETE FROM student WHERE id = ?";
  db.query(query, [req.params.id], function(err, result) {
    if (err) {
      res.status(500).send(err);
    } else if (result.affectedRows === 0) {
      res.status(404).send('Student not found');
    } else {
      res.status(204).send();
    }
  });
};
