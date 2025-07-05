# 📚 Minimal Library Management System - Backend

A modular backend application for a Library Management System built using **Node.js**, **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**. It provides RESTful APIs for managing books and borrow records.

## 🚀 Features

### 📘 Book Management

* Create a new book
* Read all books (with pagination)
* Read single book by ID
* Update book information
* Delete book

### 📄 Borrow Management

* Borrow a book by specifying quantity and due date
* Validate available copies before borrow
* Auto-mark books as unavailable when copies reach 0
* Aggregated summary of borrowed books (by title & ISBN)

### 🧰 Tech Stack

| Layer      | Technology         |
| ---------- | ------------------ |
| Runtime    | Node.js            |
| Framework  | Express.js         |
| Language   | TypeScript         |
| Database   | MongoDB + Mongoose |
| Validation | Zod                |
| Env Config | dotenv             |
| Logging    | morgan (optional)  |

## 🧪 API Endpoints

### Books

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/books`     | Get paginated books |
| GET    | `/books/:id` | Get single book     |
| POST   | `/books`     | Create new book     |
| PATCH  | `/books/:id` | Update book         |
| DELETE | `/books/:id` | Delete book         |

### Borrows

| Method | Endpoint          | Description               |
| ------ | ----------------- | ------------------------- |
| POST   | `/borrow/:bookId` | Borrow a book             |
| GET    | `/borrow-summary` | Aggregated borrow summary |

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/library-backend.git
cd library-backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Then add your MongoDB connection string

# Run the project
npm run dev
```

### Example .env

```
PORT=5000
DATABASE_URL=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/books?retryWrites=true&w=majority
```

## 🔗 Live

* Backend: [https://library-backend-nine-mu.vercel.app/](https://library-backend-nine-mu.vercel.app/)


```

## ✅ Assignment Requirements Covered

* [x] Modular MVC Structure
* [x] Book CRUD with pagination
* [x] Borrow management with validation
* [x] Borrow summary (aggregation)
* [x] Environment-based config
* [x] Hosted backend (Vercel)


