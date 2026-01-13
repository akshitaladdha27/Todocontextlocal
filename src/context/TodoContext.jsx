import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      )
    );
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))
  
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
  

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        toggleCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
