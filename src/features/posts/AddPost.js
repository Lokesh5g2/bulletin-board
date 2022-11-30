import { useState } from "react";
import React from 'react'
import { postAdded } from "./postSlice";
import { useDispatch, } from "react-redux";
const AddPost = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")
    const submitPost = () => {
        if (title != "" && content != "" && author != "") {
            dispatch(postAdded(title, content, author))
            setTitle('')
            setContent("")
            setAuthor("")
        }
        else {
            alert("Please Fill all the fields")
        }
    }
    return (
        <form className="newPostForm">
            <h1>Add New Post!</h1>
            <label htmlFor="title"> Enter the title</label>
            <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="inputAddPost" required />
            <label htmlFor="author"> Enter the Author</label>
            <input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="inputAddPost" required />
            <label htmlFor="content"> Enter the content</label>
            <textarea id="content" rows={10} className="inputAddPost" value={content} required onChange={(e) => setContent(e.target.value)} />
            <button type="button" className="newPostBtn" onClick={submitPost}> Post</button>
        </form>
    )
}

export default AddPost