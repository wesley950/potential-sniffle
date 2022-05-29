import { Button, Container, FormControl, FormLabel, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { commentThread } from "../functions/ThreadFunctions";
import { addComment } from "../redux/action";

function CommentForm({ threadID }) {
    const dispatch = useDispatch()

    const submitClicked = () => {
        let textInput = document.getElementById("comment-text")
        commentThread(threadID, textInput.value, (comment) => {
            dispatch(addComment({
                id: comment.id,
                text: textInput.value,
                points: 0
            }))
            textInput.value = ""
        })
    }

    return (
        <Container>
            <VStack spacing='8px'>

                <FormControl>
                    <FormLabel>Comment</FormLabel>
                    <Textarea id='comment-text'></Textarea>
                </FormControl>

                <Button onClick={submitClicked}>Submit</Button>
            </VStack>
        </Container>
    )
}

export default CommentForm;
