


import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';
const app = express();

// Middleware to parse JSON request body
app.use(express.json());
app.use(cors());

// Routes
app.use('/', router);

// Port configuration
const port = process.env.PORT || 8000;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
DBConnection();
// Start the server
app.listen(port, () => console.log(`Server is running on PORT ${port}`));

// Example route handler with error handling
router.get('/example', (req, res, next) => {
  try {
    // Some code that might throw an error
    throw new Error('This is an example error');
  } catch (err) {
    // Handle the error and pass it to the error handling middleware
    next(err);
  }
});
