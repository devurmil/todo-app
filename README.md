# 🚀 React Redux Todo & Product Management App

A modern **React + Redux Toolkit** application with authentication, protected routing, and full CRUD operations using API integration.

---

## 📌 Features

* 🔐 User Authentication (Login with JWT)
* 🛡️ Protected Routes
* 📦 Product Listing (API-based)
* ➕ Add Product
* ✏️ Update Product
* ❌ Delete Product
* 📊 Total Records Display
* ⚡ Fast build with Vite

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🧠 Redux Toolkit
* 🔀 React Router
* 🌐 Axios (API handling)
* 🎨 Material UI (UI Components)

---

## 🔗 APIs Used

* Auth API: https://dummyjson.com/auth/login
* Products API: https://dummyjson.com/products

---

## 📁 Project Structure

```
src/
 ├── app/              # Redux store
 ├── features/         # Redux slices (auth, products)
 ├── pages/            # Login, Products
 ├── components/       # Reusable components
 ├── routes/           # Protected routes
 └── main.jsx
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate to project
cd your-repo-name

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 🔑 Test Credentials

```
username: kminchelle
password: 0lelplR
```

---

## 🧠 Key Implementation Details

* Used **Redux Toolkit** for scalable state management
* Implemented **createAsyncThunk** for API handling
* Stored JWT token in **localStorage** for session persistence
* Built **Protected Routes** for secure navigation
* Managed CRUD operations using centralized Redux store

---

## ⚠️ Challenges Faced

* Handling async API errors
* Managing global state efficiently
* Implementing edit/update flow with pre-filled forms

---

## 🚀 Future Improvements

* 🔄 Token refresh & auto logout
* 🔍 Search & filter products
* 📱 Responsive UI improvements
* 🧪 Unit testing (Jest)

---

## 👨‍💻 Author

**Urmil Ramani**

---

## ⭐ Conclusion

This project demonstrates real-world frontend development skills including authentication, state management, API integration, and scalable architecture.

---
