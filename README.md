## Contributors
- Member 1: Iris Tumakay - GET /exams
- Member 2: John Niño Reyes - POST /exams
- Member 3: Louie Jee Gijan - UPDATE /exams/:id

## API Documentation

### 1. Get All Exams
**Endpoint:** `GET /exams`  
**Response:**
  ```json
  [
    { "id": 1, "name": "Math Exam", "date":"2025-05-10", "duration": 120 },
    { "id": 2, "name": "Science Exam", "date": "2025-06-15", "duration": 90 }
  ]
```
### 2. Create New Exams
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
**Endpoint:** `PUT /exams`  
**Request:**
```json
  { "id": 3, "name": "Science Exam 1", "date": "2025-05-15", "duration": 180 }
```
**Response:**
```json
  { "id": 3, "name": "Science Exam 1", "date": "2025-05-15", "duration": 180 }
```
