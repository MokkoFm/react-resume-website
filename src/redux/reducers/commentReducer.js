const commentReducer = (state, action) => {
    switch (action.type) {
        case 'addComment':
            let newСomment = {
                'id': 2,
                'text': state.newComment,
                'likes': 0,
            };
            state.comments.push(newСomment);
            state.newComment = '';
            return state;
        
        case 'updateComment': 
        state.newComment = action.text;
    
        default:
            return state;
    };
};

export default commentReducer;