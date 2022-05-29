import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";

import ThreadList from "./ThreadList";

function New() {
    const [threads, setThreads] = useState([]);

    const fetchNewThreads = async () => {
        const data = await fetch("http://localhost:8080/t/new/")
        const threads = await data.json()
        setThreads(threads)
    }

    useEffect(() => {
        fetchNewThreads()
    }, [])

    return (
        <Container>
            <Heading>Recent</Heading>
            <ThreadList threads={threads} />
        </Container>
    );
}

export default New;