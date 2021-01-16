import React from 'react';
import Blog from './Blog';


const BlogContainer = (props) => {

    const addComment = () => {
        let action = {type: 'addComment'};
        props.dispatch(action);
    }

    let onCommentChange = (text) => {
        let action = {type: 'updateComment', text: text};
        props.dispatch(action);
    }

    return (
        <Blog addComment={addComment} updateComment={onCommentChange} comments={props.state.blog.comments} />
    )
};

export default BlogContainer;