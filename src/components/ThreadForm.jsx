import React from "react";
import { useNavigate } from "react-router-dom";

import { 
    FormLabel,
    Button,
    Input,
    Textarea,
    VStack
} from '@chakra-ui/react'

function ThreadForm() {
    const navigate = useNavigate()

    const submitThread = () => {
        let titleInput = document.getElementById("thread-title")
        let textInput = document.getElementById("thread-text")

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;

            if (this.status === 201) {
                var response = JSON.parse(this.responseText)
                var newPath = `/thread/${response.id}/`
                navigate(newPath)
            }
        }

        xhr.open("POST", "http://localhost:8080/t/submit/", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            title: titleInput.value,
            description: textInput.value
        }))
    }

    return (
        <VStack>
            <FormLabel>Start your own thread</FormLabel>
            <Input placeholder="Title (required)" id="thread-title" />
            <Textarea placeholder="Message (optional)" id="thread-text" />
            <Button colorScheme='green' onClick={submitThread}>Submit</Button>
        </VStack>
    )
}

export default ThreadForm;