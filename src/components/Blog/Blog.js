import React from 'react';
import style from './Blog.module.css';


let Comment = (props) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
};

const Blog = (props) => {
    let newComment = React.createRef();
    let comments = props.state.comments.map((comment) => <Comment text={comment.text}/>);

    const addComment = () => {
        props.addComment();
        newComment.current.value = '';
    }

    let onCommentChange = () => {
        let text = newComment.current.value;
        props.updateComment(text);
    }

    return (
        <div>
            <div>
                <h2>Your comments</h2>
            </div>
            <div className={style.blog_wrapper}>
                Name: <input type="text" name="username"></input>
                <textarea onChange={onCommentChange} ref={newComment}></textarea>
                <input type="submit" onClick={ addComment }></input>
            </div>
            <div className={style.blog_wrapper}>
                {comments}
            </div>
        </div>
    )
};

export default Blog;