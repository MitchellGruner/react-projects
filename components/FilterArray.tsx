"use client";

import { useEffect, useState } from "react";

const FilterArray = () => {
    const fruits = [
        "apple",
        "banana",
        "grapes",
        "mango",
        "orange",
        "papaya",
        "watermelon",
    ];

    const [fruitsData, setFruitsData] = useState(fruits);
    const [filteredFruits, setFilteredFruits] = useState("");

    const filterFruits = fruitsData.filter(fruit => {
        return fruit.toLowerCase().includes(filteredFruits.toLowerCase());
    });
    
    return (
        <div>
            <h1>Filter Array</h1>
            <input type="text" placeholder="Search for a fruit" onChange={e => setFilteredFruits(e.target.value)} />

            <ul>
                {filterFruits.map(fruit => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default FilterArray;