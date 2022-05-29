import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { likeThread } from "../functions/ThreadFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addComment, setComments } from "../redux/action";
import { Button, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";

function ThreadDetail() {
    const { threadID } = useParams();
    const [thread, setThread] = useState({});

    const [points, setPoints] = useState(0)
    const [id, setID] = useState(-1)

    const globalState = useSelector(state => state)
    const dispatch = useDispatch()

    const likeClicked = () => {
        likeThread(id, () => {
            setPoints(points + 1)
        })
    }

    const fetchThread = async (threadID) => {
        var data = await fetch("http://localhost:8080/t/?threadID=" + threadID)
        var thread = await data.json()
        setThread(thread)
        setID(thread.id)
        setPoints(thread.points)
        dispatch(setComments(thread.comments))
    }

    useEffect(() => {
        fetchThread(threadID)
    }, [])

    return (
        <Container>
            <VStack spacing='12px'>
                <Text color='gray.500' fontWeight='bold' fontSize='sm'>Thread {threadID}</Text>
                <Heading as='h2'>{thread.title}</Heading>
                <Text>{thread.description}</Text>

                <VStack spacing='24px'>
                    <HStack spacing='24px'>
                        <Button onClick={likeClicked} colorScheme='teal' size='sm'>Like</Button>
                        <Text color='teal.300'>{points} likes</Text>
                        <Text color='teal.300'>{globalState.comments.length} comments</Text>
                    </HStack>

                    <CommentForm threadID={id} />
                    <CommentList comments={globalState.comments} />
                </VStack>
            </VStack>
        </Container>
    )
}

export default ThreadDetail;
