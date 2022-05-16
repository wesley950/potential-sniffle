import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { likeThread } from "../functions/ThreadFunctions";

function ThreadDetail() {
    const { threadID } = useParams();
    const [thread, setThread] = useState({});

    const [comments, setComments] = useState([])
    const [points, setPoints] = useState(0)
    const [id, setID] = useState(-1)

    const likeClicked = () => {
        likeThread(id, () => {
            setPoints(points + 1)
        })
    }

    const fetchThread = async (threadID) => {
        var data = await fetch("http://localhost:8080/t/?threadID=" + threadID)
        var thread = await data.json()
        setThread(thread)
        setComments(thread.comments)
        setID(thread.id)
        setPoints(thread.points)
    }

    const updateThread = () => {
        setComments([])
        alert(comments)
    }

    useEffect(() => {
        fetchThread(threadID)
    }, [])

    return (
        <div className="container">
            <div className="text-muted">Thread {threadID}</div>
            <h2>{thread.title}</h2>
            <div>{thread.description}</div>

            <div>{points} curtidas</div>
            <button className="btn btn-primary btn-sm" onClick={likeClicked}>Curtir</button>
            <div>{comments.length} comentários</div>

            <CommentForm threadID={id} onceCommented={updateThread} />

            <CommentList comments={comments} />
        </div>
    )
}

export default ThreadDetail;
