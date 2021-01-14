let initialState = {
    'comments': [
        {id: 1, text: "Cool article!", likes: 11}
    ],
    'newComment': 'Напиши меня',
}

const commentReducer = (state=initialState, action) => {
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
            return state;
    
        default:
            return state;
    };
};

export default commentReducer;