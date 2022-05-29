import { Container, Heading } from "@chakra-ui/react";
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
        <Container>
            <Heading>Trending</Heading>
            <ThreadList threads={threads} />
        </Container>
    );
}

export default Trending;