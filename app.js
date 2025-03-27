const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import the routes from the exam.js file
const examRoute = require('./routes/exams');

// Use the routes for the `/exams` endpoint
app.use('/exams', examRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
