# Full Stack Todo App #

A full-stack Todo application built using **Next.js, TypeScript, Express.js, MongoDB, JWT Authentication, and Redux Toolkit**.

## Features ##

### Authentication ###

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing using bcrypt

### Todo Management ###

* Create Todo
* View Todos
* Update Todos
* Delete Todos

### Frontend ###

* Next.js App Router
* TypeScript
* Redux Toolkit for State Management
* Responsive UI

### Backend ###

* Express.js REST APIs
* MongoDB Atlas Integration
* JWT-based Authorization
* Error Handling and Validation

## Tech Stack ##

### Frontend ###

* Next.js
* TypeScript
* Redux Toolkit
* Axios
* Tailwind CSS

### Backend ###

* Node.js
* Express.js
* TypeScript
* MongoDB Atlas
* Mongoose
* JWT
* bcryptjs

## Project Structure ##

```
TODO
├── todo-client     # Frontend (Next.js)
└── todo-server     # Backend (Express.js)
```

## Installation & Setup ##

### Clone Repository ###

```bash
git clone https://github.com/Kiran10Patil/fullstack-todo-app.git
cd fullstack-todo-app
```

### Backend Setup ###

```bash
cd todo-server
npm install
npm run dev
```

Create a `.env` file in `todo-server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend Setup ###

```bash
cd todo-client
npm install
npm run dev
```

The application will be available at:

* Frontend: `http://localhost:3000`
* Backend: `http://localhost:5000`

## API Endpoints ###

### Authentication ###

* `POST /api/auth/register` – Register User
* `POST /api/auth/login` – Login User

# Todos #

* `GET /api/todos` – Get All Todos
* `POST /api/todos` – Create Todo
* `PUT /api/todos/:id` – Update Todo
* `DELETE /api/todos/:id` – Delete Todo

## Author ##

**Kiran Patil**

* Email: [kiranpatil9388@gmail.com](mailto:kiranpatil9388@gmail.com)
* LinkedIn: https://linkedin.com/in/kiran-10patil
* GitHub: https://github.com/Kiran10Patil
