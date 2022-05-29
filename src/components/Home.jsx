import React from "react";
import ThreadForm from "./ThreadForm";

import {
    Heading,

    Container
} from '@chakra-ui/react'

function Home() {
    return (
        <Container>
            <Heading as='h1'>Home</Heading>

            <ThreadForm />
        </Container>
    );
}

export default Home;