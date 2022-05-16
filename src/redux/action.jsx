const addComment = (comment) => {
    return {
        type: "ADD_COMMENT",
        payload: comment
    }
}

const setComments = (comments) => {
    return {
        type: "SET_COMMENTS",
        payload: comments
    }
}

export {
    addComment,
    setComments
}