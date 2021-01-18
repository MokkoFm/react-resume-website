import React from 'react';
import Blog from './Blog';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        comments: state.blog.comments,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addComment: () => {
            let action = {type: 'addComment'};
            dispatch(action);
        }, 
        updateComment: (text) => {
            let action = {type: 'updateComment', text: text};
            dispatch(action);
        }
    }
}

let BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default BlogContainer;