import React, { useState } from "react";
import { Link } from "react-router-dom";
import { likeThread } from "../functions/ThreadFunctions";

function Thread({ id, title, text, likes, comment_count }) {
    const [displayedLikes, setDisplayedLikes] = useState(likes)

    const likeClicked = () => {
        likeThread(id, () => {
            setDisplayedLikes(displayedLikes + 1)
        })
    }

    return (
        <div>
            <h2>
                <Link style={{ textDecoration: "none" }} to={"/thread/" + id}>
                    <div className="link">{title}</div>
                </Link>
            </h2>
            <div>{text}</div>

            <div>
                <div>{displayedLikes} likes</div>
                <div>{comment_count} comments</div>
            </div>

            <button className="btn btn-primary btn-sm" onClick={likeClicked}>Like</button>
        </div>
    );
}

export default Thread;
