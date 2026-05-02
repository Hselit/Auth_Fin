# 🚀 FinLearn

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Web_Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

A finance-focused learning platform designed to simplify complex financial concepts and deliver them through a structured, secure web application.

---

## 📌 Overview

**FinLearn** is a self-driven project built to share practical financial knowledge gained through independent learning.
The platform combines content delivery with a secure backend system, focusing on authentication, session management, and scalable architecture.

---

## ✨ Features

* 🔐 Secure user authentication using **Passport (Local Strategy)**
* 🔑 Password hashing with **bcrypt**
* 🧠 Session-based authentication using **express-session**
* ⚡ Flash messaging for real-time user feedback
* 📄 Dynamic server-side rendering with **EJS**
* 🔄 RESTful routing structure
* 🗄️ MongoDB integration using **Mongoose ODM**
* 🪵 Request logging with **Morgan**
* 🛠️ Method override to support PUT/DELETE in forms
* 🔗 JWT integration for future API scalability

---

## 🧱 Tech Stack

| Layer     | Technology                      |
| --------- | ------------------------------- |
| Backend   | Node.js, Express                |
| Database  | MongoDB (Mongoose)              |
| Auth      | Passport.js, JWT, bcrypt        |
| Frontend  | EJS (Server-rendered views)     |
| Utilities | dotenv, morgan, method-override |

---

## 🏗️ Architecture

The project follows a modular backend structure:

* **Routes** → Handle API endpoints and request flow
* **Controllers** → Business logic and processing
* **Models** → Database schemas using Mongoose
* **Middleware** → Authentication, logging, session handling

This separation ensures maintainability and scalability as the project grows.

---

## 📸 Screenshots

> *(Add your actual screenshots here — this is important)*

### 🏠 Home Page

![Home Screenshot](./screenshots/home.png)

### 🔐 Login Page

![Login Screenshot](./screenshots/login.png)

### 📚 Content Page

![Content Screenshot](./screenshots/content.png)

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/finlearn.git

# Navigate to project folder
cd finlearn

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret
```

---

## 🚀 Future Improvements

* 👤 Role-based access control (Admin/User)
* 🔍 Search and filtering for financial content
* ⚡ Redis caching for performance optimization
* 📱 API layer for frontend/mobile apps
* 📊 Analytics dashboard for user activity

---

## 🤝 Contributing

Contributions are welcome. If you have ideas to improve FinLearn:

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---
