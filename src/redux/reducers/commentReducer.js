const commentReducer = (state, action) => {
    if (action.type === 'addComment') {
        let newСomment = {
            'id': 2,
            'text': state.newComment,
            'likes': 0,
        };
        state.comments.push(newСomment);
        state.newComment = '';

    } else if (action.type === 'updateComment') {
        state.newComment = action.text;
    }
    return state;
};

export default commentReducer;