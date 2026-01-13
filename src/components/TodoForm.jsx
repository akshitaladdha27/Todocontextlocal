import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm({}) {
    const [task, setTask] = useState("");

    const { addTodo } = useContext(TodoContext);
    
    const handleSubmit = (e) => {
    e.preventDefault();
    // Jab koi event hota hai (jaise form submit, link click, button click), browser apna default kaam karta hai.
    // e.preventDefault() bolta hai:
    // “Browser, jo tu automatically karne wala hai, wo mat kar.”

    if (task.trim() === "") return;
    // check karta he ki Kya string empty hai (ya sirf spaces thi)?
    // mtlb "" ase toh function wahi stop aur niche ka code execute nhi hoga
    
    addTodo(task);// directly function call kiya he
    setTask("");     
  };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
        // so basically button form submit karta he fir form handle submit function call hojata he button ko kuch ni pta hota 
        // he wo bss form submit kar deta he 
    );
}

export default TodoForm;

