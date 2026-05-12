# 🔐 VaultX - Password Manager

VaultX is a secure and responsive full-stack password manager built using React, Express.js, MongoDB, and Tailwind CSS.  
It allows users to store, manage, edit, and delete passwords with a clean modern interface.

---

## 🚀 Live Demo

https://password-manager-sigma-ten.vercel.app/

---

## ✨ Features

- Save website credentials securely
- Edit existing passwords
- Delete passwords
- Copy username/password instantly
- Password visibility toggle
- Responsive modern UI
- MongoDB Atlas integration
- REST API using Express.js
- Full-stack deployment

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- React Toastify
- Vite

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- CORS
- dotenv

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📂 Project Structure

```bash
Password-Manager/
│
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Ansh2625/Password-Manager.git
```

### Frontend Setup

```bash
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
nodemon server.js
```

---

## 🔑 Environment Variables

Create a `.env` file inside backend folder:

```env
MONGO_URI=mongodb://anshsharma2625_db_user:O7v61S6KfgIvbAs7@ac-jsd72tt-shard-00-00.qikc2kp.mongodb.net:27017,ac-jsd72tt-shard-00-01.qikc2kp.mongodb.net:27017,ac-jsd72tt-shard-00-02.qikc2kp.mongodb.net:27017/?ssl=true&replicaSet=atlas-lf8swv-shard-0&authSource=admin&appName=Cluster0
```

---

## 🌐 API Routes

### Get All Passwords

```http
GET /
```

### Add Password

```http
POST /
```

### Delete Password

```http
DELETE /
```

---

## 🎯 Future Improvements

- User Authentication
- JWT Authorization
- Password Encryption
- Search & Filter
- User-specific Vaults
- Dark/Light Theme Toggle

---

## 👨‍💻 Author

Ansh Sharma

GitHub:  
https://github.com/Ansh2625

---

## 📄 License

This project is made for learning and portfolio purposes.