import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider, TodoContext } from "./context/TodoContext";
import { useContext } from "react";

// React me state direct change nahi karte
// Hamesha naya array bana ke set karte

function AppContent() {
    const { todos } = useContext(TodoContext);
//  const [todos, setTodos] = useState([]);

   
  // const addTodo = (text) => {
  //   const newTodo = {
  //     id: Date.now(),     // 🔹 system generate kar raha hai
  //     text: text,         // 🔹 user input
  //     completed: false,   // 🔹 default value
  //   };
  /* ****************************************** */
  //   yaha hamne object define kiya he as ye {} array [] isme hote he

  //   setTodos([...todos, newTodo]);
  /* ****************************************** */
  //  ...todos (spread operator)
  //  purane todos ke saare items nikaal ke yaha daal do
  //  todos = [
  //   { id: 1, text: "A" },
  //   { id: 2, text: "B" }
  // ]
  // newTodo
  // Ye ek object hai, Naya todo item
  // [
  //   { id: 1, text: "A" },
  //   { id: 2, text: "B" },
  //   { id: 3, text: "C" } // newTodo
  // ]
  /* ****************************************** */
  // };

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter(task => task.id !== id));
  // }

//   function editTodo(id, text) {
//     setTodos(todos.map((task) => {
//       if (id === task.id) {
//         return { ...task, text: text };
//       }
//       return task;
//     }));
//   }

//   const toggleCompleted = (id) => {
//     setTodos(prevTodos =>
//       prevTodos.map(todos =>
//         todos.id === id ? { ...todos, completed: !todos.completed } : todos
//       )
//     );
//   };
/* ****************************************** */
// Jab user checkbox / complete button dabata hai
// Todo complete ↔ incomplete switch hona chahiye
// toggle = ulta–seedha switch

// 1. prevTodos kyu likha?
// React state asynchronous hoti hai
// Latest value chahiye hoti hai

// Isliye:
// setTodos(prevTodos => ...)

// prevTodos = current / latest todos array

// 2. map kyu use hua?

// Kyunki:
// todos = array
// Hume sirf ek item change karna hai
// Baaki sab same rehne chahiye

// map:
// Har item ko dekhta hai
// Naya array banata hai (React ke liye important)

// 3. todos.id === id kya check hai?

// Kya ye wahi todo hai jisko user ne click kiya?
// ❌ Nahi → same todo wapas bhej do
// ✅ Haan → isko update karo

// 4. Ye line ka magic 
// { ...todos, completed: !todos.completed }

// Purana todo copy karo
// Sirf completed ko ulta kar do
/* ****************************************** */

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>

        <TodoForm />

        <div className="flex flex-wrap gap-y-3 mt-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
}
