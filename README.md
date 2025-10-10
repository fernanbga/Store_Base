# 🛒 Store Base

## 🚀 Introduction
Store Base is a collaborative e-commerce platform developed as a fullstack project.  
It allows you to manage, search, and display products and manufacturers, with a modern and responsive interface.

- 🔹 Product and manufacturer management with search and filtering.
- 🔹 Sorting and pagination for easy navigation.
- 🔹 Deployed and ready for production on Render.

## 🎯 Purpose
Store Base focuses on providing a simple, scalable, and user-friendly solution for online product management.

- 📥 Centralized product and manufacturer data.
- 🧠 Smart search, sorting, and filtering.
- 📊 Real-time product listing and details.
- 📝 Responsive UI for desktop and mobile.

## 🧠 Main Features
✅ Product listing with sorting and pagination  
✅ Manufacturer management and search  
✅ Product detail view  
✅ Search and filter functionality  
✅ Responsive interface (React + SASS)  
✅ Ready for deployment on Render

## 🛠️ Technologies Used

| Layer      | Technology                |
|------------|--------------------------|
| Frontend   | React (SPA, mobile-first) + SASS |
| Backend    | Node.js + Express        |
| Database   | PostgreSQL (hosted on Render) |
| Infra      | Render                   |

## 📂 Project Structure

```
Store_Base/
├── app.js                  # Express backend entry point
├── config/                 # Database configuration
│   └── db.js
├── models/                 # Data models
├── routes/                 # API routes
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Main/
│   │   │   └── Header/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── package.json            # Backend package.json
└── README.md
```

## ⚙️ Installation & Local Usage

1️⃣ Clone the repository:
```sh
git clone https://github.com/fernanbga/Store_Base.git
```

2️⃣ Install backend dependencies and start backend:
```sh
npm install
npm start
```

3️⃣ Install frontend dependencies and start frontend (in `/client`):
```sh
cd client
npm install
npm run dev
```

4️⃣ Open the app:
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend/API: [http://localhost:3000](http://localhost:3000)

## 🐳 Deployment on Render

- The project is configured for deployment on Render.
- Both backend and frontend are served from the same repository.
- PostgreSQL database is hosted on Render.

## 📊 Roadmap

- Product and manufacturer CRUD
- Advanced search and filtering
- Dashboard with metrics
- PDF export for reports
- User authentication (future)

## 🌐 Live Demo

Visit the live app:  
[https://store-base.onrender.com](https://store-base.onrender.com)

## 🤝 Credits

Developed by @fernanbga