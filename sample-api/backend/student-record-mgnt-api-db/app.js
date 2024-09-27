var express = require('express');
var bodyParser = require('body-parser');
var userRoutes = require('./routes/student.routes.js');

var app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

var PORT = 3000;

app.listen(PORT, function() {
  console.log("Server is running on port " + PORT);
});
