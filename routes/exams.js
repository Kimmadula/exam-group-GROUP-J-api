const express = require('express');
const router = express.Router();

// Sample hardcoded exams data stored in an array
let exams = [
  { id: 1, name: 'Math Exam', date: '2025-05-10', duration: 120 },
  { id: 2, name: 'Science Exam', date: '2025-06-15', duration: 90 },
];

// Member 1: GET /exams - Retrieve all exams
router.get('/', (req, res) => {
  res.json(exams);
});

// Member 2: POST /exams - Add a new exam
router.post('/', (req, res) => {
    const newExam = req.body;
  
    // Validate that the required fields exist (name, date, and duration)
    if (!newExam.name || !newExam.date || !newExam.duration) {
      return res.status(400).send('Name, date, and duration are required');
    }
  
    // Validate that duration is a number
    if (isNaN(newExam.duration)) {
      return res.status(400).send('Duration must be a number');
    }
  
    // Assign a simple id based on current number of exams
    newExam.id = exams.length + 1;
    exams.push(newExam);
    res.status(201).json(newExam);
  });



module.exports = router;