import React from "react";

import Comment from "./Comment";

function CommentList({ comments }) {
    return (
        <div className="list-group">
            {
                comments.map(comment => (
                    <Comment id={comment.id} text={comment.text} likes={comment.points} />
                ))
            }
        </div>
    )
}

export default CommentList;