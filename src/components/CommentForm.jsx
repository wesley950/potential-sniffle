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
        <div className="mt-3 mb-3">
            <textarea className="form-control mb-2" id="comment-text" cols="30" rows="10" placeholder="Type something..."></textarea>
            <button className="btn btn-primary" onClick={submitClicked}>Submit</button>
        </div>
    )
}

export default CommentForm;
