# 📚 Boi Bondhu Library Management - Backend

A minimal RESTful backend API for managing a library system. Built with **Node.js**, **Express.js**, **MongoDB**, and **TypeScript**, this backend handles book management and borrowing functionalities with proper validations and business logic.

---

## 🚀 Features

- ✅ Book CRUD operations (Create, Read, Update, Delete)
- ✅ Borrow books with quantity & due date validation
- ✅ Borrow summary with aggregation
- ✅ Pagination for book list
- ✅ Zod-based schema validation
- ✅ Business logic for availability & stock control
- ✅ Modular MVC architecture

---

## ⚙️ Tech Stack

| Layer         | Technology                  |
|--------------|-----------------------------|
| Runtime       | Node.js                     |
| Server        | Express.js                  |
| Language      | TypeScript                  |
| Database      | MongoDB + Mongoose          |
| Validation    | Zod                         |
| Environment   | dotenv                      |


---

## 🔌 API Endpoints

### 📚 Book Routes

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| GET    | `/books`         | Get all books (paginated) |
| GET    | `/books/:id`     | Get single book details |
| POST   | `/books`         | Create new book         |
| PATCH  | `/books/:id`     | Update existing book    |
| DELETE | `/books/:id`     | Delete a book           |

---

### 📦 Borrow Routes

| Method | Endpoint                       | Description                  |
|--------|--------------------------------|------------------------------|
| POST   | `/borrow/:bookId`          | Borrow a book (quantity, due date) |
| GET    | `/borrow/summary/all`      | View summary of all borrowed books |

---

## 🌐 Environment Variables

Create a `.env` file in the root directory and add:

PORT=5000
DATABASE_URL=your_mongodb_connection_string


---

## 🧪 Getting Started

### ✅ Prerequisites

- Node.js ≥ 18
- MongoDB (local or cloud)
- npm or yarn

---

### ⚙️ Setup & Run

```bash
# Install dependencies
npm install

# Start the server in development mode
npm run dev
✅ Sample Request Body
Create Book (POST /api/books)
json

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "genre": "Programming",
  "isbn": "9780132350884",
  "description": "A Handbook of Agile Software Craftsmanship",
  "copies": 5
}
Borrow Book (POST /api/borrow/:bookId)
json

{
  "quantity": 2,
  "dueDate": "2025-07-15"
}


