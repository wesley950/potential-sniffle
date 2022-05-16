import React from "react";
import { useState, useEffect } from "react";

import ThreadList from "./ThreadList";

function Trending() {
    const [threads, setThreads] = useState([]);

    const fetchPopularThreads = async () => {
        const data = await fetch("http://localhost:8080/t/popular/")
        const threads = await data.json();
        setThreads(threads);
    }

    useEffect(() => {
        fetchPopularThreads()
    }, [])

    return (
        <div>
            <div className="container">
                <h1>Populares</h1>

                <ThreadList threads={threads} />
            </div>
        </div>
    );
}

export default Trending;