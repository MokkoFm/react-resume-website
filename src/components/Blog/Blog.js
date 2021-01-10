import React from 'react';
import style from './Blog.module.css';

const Blog = (props) => {
    let newComment = React.createRef();

    const addComment = () => {
        let text = newComment.current.value;
        alert(text);
    }

    return (
        <div class={style.blog_wrapper}>
            Name: <input type="text" name="username"></input>
            <textarea ref={newComment}>
                Add comment
            </textarea>
            <input type="submit" onClick={ addComment }></input>
        </div>
    )
};

export default Blog;