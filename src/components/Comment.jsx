import { Button, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { likeComment } from "../functions/CommentFunctions";

function Comment({ id, text, likes }) {
    const [displayLikes, setDisplayLikes] = useState(likes)

    const likeClicked = () => {
        likeComment(id, () => {
            setDisplayLikes(displayLikes + 1)
        })
    }

    return (
        <div>
            <Text color='gray.500'>{text}</Text>
            <HStack spacing='24px'>
                <Button onClick={likeClicked} colorScheme='teal' size='xs'>Like</Button>
                <Text color='teal.300'>{displayLikes} likes</Text>
            </HStack>
        </div>
    );
}

export default Comment;