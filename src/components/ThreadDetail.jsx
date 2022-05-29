import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { likeThread } from "../functions/ThreadFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addComment, setComments } from "../redux/action";

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
        <div className="container">
            <div className="text-muted">Thread {threadID}</div>
            <h2>{thread.title}</h2>
            <div>{thread.description}</div>

            <div>{points} likes</div>
            <button className="btn btn-primary btn-sm" onClick={likeClicked}>Like</button>
            <div>{globalState.comments.length} comments</div>

            <CommentForm threadID={id} />

            <CommentList comments={globalState.comments} />
        </div>
    )
}

export default ThreadDetail;
