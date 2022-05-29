import { Container, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";

import Thread from "./Thread";

function ThreadList({ threads }) {
    return (
        <Container>
            <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                {
                    threads.map(thread => (
                        <Thread id={thread.id} title={thread.title} text={thread.description} likes={thread.points} comment_count={thread.comments.length} />
                    ))
                }
            </VStack>
        </Container>
    );
}

export default ThreadList;
