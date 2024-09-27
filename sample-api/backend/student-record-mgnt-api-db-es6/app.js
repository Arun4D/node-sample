import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/student.routes.js';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
