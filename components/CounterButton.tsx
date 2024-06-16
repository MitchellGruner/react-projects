"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://randomuser.me/api";

const fetchRandomData = () => {
    return axios
        .get(url)
        .then(({data}) => {
            return JSON.stringify(data, null, 2);
        })
        .catch((err) => {
            console.error(err);
        });
};

const CounterButton = () => {
    const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

    useEffect(() => {
        fetchRandomData().then((randomData) => {
            if (typeof randomData === "string") {
                setRandomUserDataJSON(randomData);
            }
        });
    }, []);
    
    return (
        <div>
            {randomUserDataJSON}
        </div>
    );
}

export default CounterButton;