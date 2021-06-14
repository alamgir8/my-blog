import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Post = () => {
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState({});
    const {userId} = useParams()

 
    useEffect(() => {
       const getPosts = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
            const selectedPost = data.find(selectPost => selectPost.id === parseInt(userId))
            setPost(selectedPost)
       }
       return getPosts();

    }, [userId])

    useEffect(() => {
        const getComments = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json();
            const result = data.filter(element => element.postId === parseInt(userId))
            setComments(result)
        }

        return getComments()

    }, [userId])


    return (
        <div className='post-section'>
            <h2 className='py-5 text-center'>This is Details of Post ID {userId}</h2>
            <h3 className='py-3'>Post : {post.title}</h3>
            <h4>Comments:</h4>
                <div className="row">
                    {
                        comments.map(comment => 
                            <div className='col-md-4 mt-4' key={comment.id}>
                                <div className="card d-flex flex-column h-100 p-3">
                                    <p className='h6 text-center'>Comment ID : {comment.id}</p>
                                    <h5>{comment.name}</h5>
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