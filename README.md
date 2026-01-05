<div align="center">


# 🎬 Movie Management Backend API

### **A Secure, Scalable & Production-Ready RESTful Backend**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-0C344B?style=for-the-badge&logo=prisma&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge)
![bcryptjs](https://img.shields.io/badge/bcryptjs-4B0082?style=for-the-badge)

**Authentication · Movies · Watchlists · Clean Architecture**

</div>

---

## 🌟 Project Overview

**Movie Management Backend** is a **full-featured RESTful API** built from scratch using **Node.js** and **Express.js**, following modern backend engineering standards.

It powers **secure user authentication**, **movie management**, and a **personalized watchlist system** with status tracking and ratings — making it ideal for real-world production use.

---

## ⚡️ Core Features

### 🔐 Authentication System

- 📝 **User Registration** – Secure signup with schema validation
- 🔑 **User Login** – JWT-based authentication
- 🚪 **User Logout** – Token invalidation support
- 🔒 **Password Hashing** – bcryptjs for strong encryption
- 🛡️ **Protected Routes** – Middleware-driven access control

---

### 🎬 Movie Management API

- 📋 **Complete CRUD Operations**
- 🎯 **Rich Movie Metadata**
  - Title
  - Overview
  - Release Year
  - Genres
  - Runtime
  - Poster URL
- 👤 **User Association** – Track movie creators
- 🔍 **Search & Filter Support**

---

### 📺 Watchlist System

- ➕ **Add Movies to Watchlist**
- 📊 **Status Tracking**
  - `PLANNED`
  - `WATCHING`
  - `COMPLETED`
  - `DROPPED`
- ⭐ **Rating System** (1–10)
- 📝 **Personal Notes**
- ✏️ **Update Watchlist Items**
- 🗑️ **Remove Watchlist Entries**

---

### 🛠️ Backend Enhancements

- ✅ **Zod Validation** – Type-safe request validation
- 🚨 **Centralized Error Handling**
- 🔐 **JWT Middleware**
- 🗄️ **Prisma Migrations**
- 🌱 **Database Seeding Support**

---

## 🏗️ Tech Stack

| Layer              | Technology |
| ------------------ | ---------- |
| **Runtime**        | Node.js    |
| **Framework**      | Express.js |
| **Database**       | PostgreSQL |
| **ORM**            | Prisma     |
| **Authentication** | JWT        |
| **Validation**     | Zod        |
| **Security**       | bcryptjs   |
| **Config**         | dotenv     |

---

## 🔌 API Overview

### 🔐 Authentication Routes

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | `/auth/register` |
| POST   | `/auth/login`    |
| POST   | `/auth/logout`   |

---

### 🎬 Movie Routes

| Method | Endpoint      |
| ------ | ------------- |
| GET    | `/movies`     |
| POST   | `/movies`     |
| PUT    | `/movies/:id` |
| DELETE | `/movies/:id` |

---

### 📺 Watchlist Routes (Protected)

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | `/watchlist`     |
| PUT    | `/watchlist/:id` |
| DELETE | `/watchlist/:id` |

---

## 🗄️ Database Design

### 👤 User Model

| Field     | Description     |
| --------- | --------------- |
| id        | UUID            |
| name      | Full name       |
| email     | Unique email    |
| password  | Hashed password |
| createdAt | Timestamp       |

---

### 🎬 Movie Model

| Field       | Description     |
| ----------- | --------------- |
| id          | UUID            |
| title       | Movie title     |
| overview    | Description     |
| releaseYear | Year            |
| genres      | Genre list      |
| runtime     | Duration (mins) |
| posterUrl   | Image URL       |
| createdBy   | User reference  |
| createdAt   | Timestamp       |

---

### 📺 WatchlistItem Model

| Field     | Description     |
| --------- | --------------- |
| id        | UUID            |
| userId    | User reference  |
| movieId   | Movie reference |
| status    | Watch state     |
| rating    | Optional (1–10) |
| notes     | Optional        |
| createdAt | Timestamp       |
| updatedAt | Timestamp       |

---

## 💎 Why This Backend Stands Out

✔ Clean, modular architecture  
✔ Strong security practices  
✔ Production-ready patterns  
✔ Easy frontend integration  
✔ Scalable & maintainable codebase

---

## 🔗 Useful Resources

- Node.js Documentation
- Express.js Documentation
- Prisma Documentation
- PostgreSQL Documentation
- JWT.io
- Zod Documentation

---

<div align="center">

### ⭐ Star this repository if you like clean backend engineering

**Built for scale · Designed for production · Crafted with ❤️ by Rahul Gautam**

</div>
