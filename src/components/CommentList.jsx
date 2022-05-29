import { Container, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";

import Comment from "./Comment";

function CommentList({ comments }) {
    return (
        <Container>
            <VStack divider={<StackDivider borderColor='gray.200' />}>
                {
                    comments.map(comment => (
                        <Comment id={comment.id} text={comment.text} likes={comment.points} />
                    ))
                }
            </VStack>
        </Container>
    )
}

export default CommentList;