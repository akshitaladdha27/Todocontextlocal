import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false)


    const [todoMsg, setTodoMsg] = useState(todo.text)
    // todo.text = jo todo pehle se add ho chuka hai
    // useState(todo.text) = input ki initial value wahi rakh do
    // Maan lo todo list me already ye item hai:
    // todo = { id: 1, text: "Buy milk" }

    // Ab jab tum edit karne ke liye input open karti ho:
    // useState(todo.text);

    // Input box me automatically likha aayega:
    // Buy milk

    // Agar tum ye na likho aur sirf:
    // useState("");


    const { deleteTodo, editTodo, toggleCompleted } = useContext(TodoContext);

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                // condition ? value_if_true : value_if_false
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() =>toggleCompleted(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo(todo.id, todoMsg);
                        setIsTodoEditable(false);
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
