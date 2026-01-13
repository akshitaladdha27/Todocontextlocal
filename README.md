# Todo Context Local Application

A simple and efficient **Todo Application** built with **React** that allows users to **add, edit, and delete tasks**.  
The best part is that all tasks are **stored locally using the browser’s localStorage**, so your data remains saved even after refreshing the page.

---

## Features

- ➕ Add new tasks  
- ✏️ Edit existing tasks  
- ❌ Delete tasks  
- 💾 Tasks are saved in **localStorage**  
- 🔄 Data persists after page reload  
- 🌐 Global state management using **React Context API**

---

## Technologies Used

- **React**
- **React Context API**
- **JavaScript**
- **localStorage**
  - `localStorage.getItem()`
  - `localStorage.setItem()`

---

## How It Works

- The app uses **React Context API** to manage todo state globally.
- Todos are stored in the browser using **localStorage**.
- On app load, data is fetched using `getItem()`.
- Whenever a task is added, edited, or deleted, the updated list is saved using `setItem()`.
