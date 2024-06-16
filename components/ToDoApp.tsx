"use client";

import { useState } from "react";
import CountriesPage from "./CountriesPage";

const ToDoApp = () => {
    const [todos, setTodos] = useState("");
    const [todoArray, setTodoArray] = useState<{ id: number; value: string; }[]>([]);

    const addItem = () => {
        const item = {
            id: Math.floor(Math.random() * 1000),
            value: todos,
        };

        setTodoArray(oldList => [...oldList, item]);
        setTodos("");
    }

    const removeItem = (id: number) => {
        const newArray = todoArray.filter(item => item.id !== id);
        setTodoArray(newArray);
    }

    return (
        <div>
            <h1>ToDo App</h1>
            <input type="text" placeholder="Add a todo" value={todos} onChange={e => setTodos(e.target.value)} />
            <button onClick={addItem}>Add Item</button>

            <ul>
                {/* {todoArray.map(item => {
                    return (
                        <li key={item.id}>{item.value} <button onClick={() => removeItem(item.id)}>Remove Item</button></li>
                    )
                })} */}
                {todoArray.map(item => (
                    <li key={item.id}>{item.value} <button onClick={() => removeItem(item.id)}>Remove Item</button></li>
                ))}
            </ul>

            {/* <CountriesPage /> */}
        </div>
    )
}

export default ToDoApp;