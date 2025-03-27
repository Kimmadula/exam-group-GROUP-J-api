## Contributors
- Member 1: Iris Tumakay - GET /exams
- Member 2: John Niño Reyes - POST /exams
- Member 3: Louie Jee Gijan - UPDATE /exams/:id

## API Documentation

### 1. Get All Exams
**Function:** Fetches and returns a list of all exams stored in the array. It returns a JSON array containing exam details (ID, name, date, and duration).

**Endpoint:** `GET /exams`  
**Response:**
  ```json
  [
    { "id": 1, "name": "Math Exam", "date":"2025-05-10", "duration": 120 },
    { "id": 2, "name": "Science Exam", "date": "2025-06-15", "duration": 90 }
  ]
```
### 2. Create New Exams
**Function:** Adds a new exam to the system. The client sends an exam object (name, date, duration) in the request body.

**Endpoint:** `POST /exams`  
**Request:**
```json
  { "id": 3, "name": "History Exam", "date": "2025-05-10", "duration": 150 }
```
**Response:**
```json
 { "id": 3, "name": "History Exam", "date": "2025-05-10", "duration": 150 }
```
### 3. Update Exams
**Function:** Modifies an existing exam’s details. The client sends an updated exam object, including the ID of the exam to be modified.

**Endpoint:** `PUT /exams`  
**Request:**
```json
  { "id": 3, "name": "Science Exam 1", "date": "2025-05-15", "duration": 180 }
```
**Response:**
```json
  { "id": 3, "name": "Science Exam 1", "date": "2025-05-15", "duration": 180 }
```
