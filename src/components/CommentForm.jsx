import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { commentThread } from "../functions/ThreadFunctions";

function CommentForm({ threadID, onceCommented }) {
    const location = useLocation()
    const navigation = useNavigate()

    const submitClicked = () => {
        let textInput = document.getElementById("comment-text")
        commentThread(threadID, textInput.value, () => {
            onceCommented()
        })
    }

    return (
        <div className="mt-3 mb-3">
            <textarea className="form-control mb-2" id="comment-text" cols="30" rows="10" placeholder="Faça um comentário..."></textarea>
            <button className="btn btn-primary" onClick={submitClicked}>Enviar</button>
        </div>
    )
}

export default CommentForm;
