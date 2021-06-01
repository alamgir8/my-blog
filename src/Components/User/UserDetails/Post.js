import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Post = () => {
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState({});
    const {userId} = useParams()

 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const selectedPost = data.find(selectPost => selectPost.id === parseInt(userId))
            setPost(selectedPost)
        })
    }, [userId])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => {
            const result = data.filter(element => element.postId === parseInt(userId))
            setComments(result)
        })
    }, [userId])


    return (
        <div className='post-section'>
            <h3>Post : {post.title}</h3>
                <div className="row">
                    <h4>Comments:</h4>
                    {
                        comments.map(comment => 
                            <div className='col-md-4' key={comment.id}>
                                <div className="card p-3">
                                    <h2>{comment.id}</h2>
                                    <h6>{comment.name}</h6>
                                    <p>{comment.body}</p>
                                </div>
                            </div>
                            )
                    }
                    
                </div>
        </div>
    );
};

export default Post;