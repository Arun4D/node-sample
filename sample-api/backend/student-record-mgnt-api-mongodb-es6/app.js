import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import userRoutes from './routes/student.routes.js';
import connectDB  from './config/db.config.js';

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

app.use(cors(
  {
      origin: "http://localhost:3000",
      methods: ["GET","POST", "PUT", "DELETE","PATCH", "OPTION"]
  }
))

// Routes
app.use('/api', userRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
