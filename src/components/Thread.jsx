import { Button, Container, Heading, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { likeThread } from "../functions/ThreadFunctions";

function Thread({ id, title, text, likes, comment_count }) {
    const [displayedLikes, setDisplayedLikes] = useState(likes)

    const likeClicked = () => {
        likeThread(id, () => {
            setDisplayedLikes(displayedLikes + 1)
        })
    }

    return (
        <Container>
            <Heading as='h3'>
                <Link style={{ textDecoration: "none" }} to={"/thread/" + id}>
                    <div className="link">{title}</div>
                </Link>
            </Heading>

            <Text noOfLines={3}>
                {text}
            </Text>

            <HStack spacing='24px'>
                <Button onClick={likeClicked} colorScheme='teal' size='sm'>Like</Button>
                <Text color='teal.300'>{displayedLikes} likes</Text>
                <Text color='teal.300'>{comment_count} comments</Text>
            </HStack>
        </Container>
    );
}

export default Thread;
