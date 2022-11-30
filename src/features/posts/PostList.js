import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import React from 'react'
import TimeAgo from "./TimeAgo";

const PostList = () => {
    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderedPosts = orderedPosts.map(post => <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <span>by {post.author}</span>
        &nbsp;
        &nbsp;
        <TimeAgo timestamp={post.date} />
    </article>)
    return (
        <section className="postList">
            <h1>Posts</h1>
            {posts.length > 0 ? renderedPosts : "Nothing to Display"}
        </section>
    )
}

export default PostList