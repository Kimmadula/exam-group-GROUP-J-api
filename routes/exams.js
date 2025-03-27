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



module.exports = router;