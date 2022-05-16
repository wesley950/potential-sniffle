const initialState = {
    comments: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMMENT": {
            return Object.assign({}, state, {
                comments: state.comments.concat([action.payload])
            })
        }
        case "SET_COMMENTS": {
            return Object.assign({}, state, {
                comments: action.payload
            })
        }
        default: {
            return state
        }
    }

}

export default reducer;