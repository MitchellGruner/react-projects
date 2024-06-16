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
    const [searchTerm, setSearchTerm] = useState("");

    const fruitsDataFiltered = fruitsData.filter(fruit => {
        return fruit.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    return (
        <div>
            <input type="text" placeholder="Search fruits" onChange={e => setSearchTerm(e.target.value)} />
            {fruitsDataFiltered.map((fruit: string) => {
                return (
                    <div key={fruit}>    
                        <p>{fruit}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FilterArray;