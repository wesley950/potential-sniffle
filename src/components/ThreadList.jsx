import React from "react";

import Thread from "./Thread";

function ThreadList({ threads }) {
    return (
        <div>
            <ul className="list-group">
                {
                    threads.map(thread => (
                        <li className="list-group-item">
                            <Thread id={thread.id} title={thread.title} text={thread.description} likes={thread.points} comment_count={thread.comments.length} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ThreadList;
