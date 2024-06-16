"use client";

import { useState } from "react";

const ToDoApp = () => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState<{ id: number; value: string; }[]>([]);

    function addItem() {
        if (!newItem) {
            alert("Enter an item.");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        }

        setItems(oldList => [...oldList, item]);
        setNewItem("");
    }

    function deleteItem(id: number) {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    return (
        <div>
            <h1>ToDo App</h1>

            <input type="text" placeholder="Add a task" value={newItem} onChange={e => setNewItem(e.target.value)} />

            <button onClick={addItem}>Add</button>

            <ul>
                {items.map(item => {
                    return (
                        <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>Delete Item</button></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoApp;