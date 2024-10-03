import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import userRoutes from './routes/student.routes.js';

const app = express();

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
