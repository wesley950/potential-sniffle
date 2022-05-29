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
        <div className="list-group-item">
            <div className="col">

                <div className="text-muted">{text}</div>
                <strong className="me-3">{displayLikes} points</strong>
                <button className="btn btn-primary btn-sm" onClick={likeClicked}>Like</button>
            </div>
        </div>
    );
}

export default Comment;