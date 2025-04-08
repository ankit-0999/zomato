# Food Delivery Application

This is a full-stack food delivery application built with React, Node.js, Express, and MongoDB. It includes three main components: the **Frontend**, **Backend**, and an **Admin Panel** for managing the application.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Admin Panel Setup](#admin-panel-setup)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features

### User Features:
- Browse food items by category.
- Add items to the cart and place orders.
- Choose between **Cash on Delivery (COD)** or **Stripe Payment**.
- View and track orders in the "My Orders" section.

### Admin Features:
- Add, list, and remove food items.
- View and manage orders, including updating their status.

---

## Project Structure

### Key Directories and Files:

#### Backend:
- **`server.js`**: Entry point for the backend server.
- **`routes/`**: Contains API route definitions for users, food, cart, and orders.
- **`controllers/`**: Contains logic for handling API requests.
- **`models/`**: MongoDB schemas for users, food, and orders.
- **`middleware/`**: Middleware for authentication.
- **`config/db.js`**: MongoDB connection setup.

#### Frontend:
- **`src/pages/`**: Contains React components for pages like Home, Cart, Place Order, My Orders, and Verify.
- **`src/components/`**: Reusable components like Navbar, Footer, and FoodItem.
- **`src/Context/StoreContext.jsx`**: Context API for managing global state.

#### Admin:
- **`src/pages/`**: Pages for adding food, listing food, and managing orders.
- **`src/components/`**: Sidebar and Navbar components for the admin panel.

---

## Technologies Used

### Frontend:
- React
- React Router
- React Toastify
- Vite (for development and build)

### Backend:
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Stripe (for payment integration)
- JWT (for authentication)

### Admin Panel:
- React
- React Router
- React Toastify
- Vite

---

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Admin Panel Setup

1. Navigate to the `admin` directory:
   ```bash
   cd admin
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

---

## Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT.
- `STRIPE_SECRET_KEY`: Secret key for Stripe.

---

## Scripts

### Backend

- **`npm start`**: Start the backend server.
- **`npm run dev`**: Start the backend server in development mode with nodemon.

### Frontend

- **`npm start`**: Start the frontend development server.
- **`npm run build`**: Build the frontend for production.

### Admin Panel

- **`npm start`**: Start the admin panel development server.
- **`npm run build`**: Build the admin panel for production.

---

## API Endpoints

### User Routes

- **`POST /api/users/register`**: Register a new user.
- **`POST /api/users/login`**: Login a user.

### Food Routes

- **`GET /api/food`**: Get all food items.
- **`POST /api/food`**: Add a new food item (Admin only).
- **`DELETE /api/food/:id`**: Delete a food item (Admin only).

### Cart Routes

- **`POST /api/cart`**: Add an item to the cart.
- **`GET /api/cart`**: Get the cart items.

### Order Routes

- **`POST /api/orders`**: Place a new order.
- **`GET /api/orders`**: Get all orders (Admin only).
- **`GET /api/orders/user`**: Get orders for the logged-in user.
- **`PUT /api/orders/:id`**: Update order status (Admin only).

---

## License

This project is licensed under the MIT License.

