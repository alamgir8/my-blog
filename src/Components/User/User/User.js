import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import { PostContext } from '../../Reducer/State/State';

const User = () => {
    const [posts, setPosts] = useState([])
    const {newPosts, deletePost} = useContext(PostContext);    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const result = data.filter(element => element.userId === 2)
            setPosts(result)
        })
    }, [])


    return (
            <div className='user'>
                <Header/>
                <div className="container">
                    <h3>This is user Page</h3>
                        <div className="text-right">
                            <Link to='/addPost' className='btn btn-info'>Create Post</Link>
                        </div>
                        <div className="row">
                            {
                                newPosts.map(newPost => 
                                    <div key={newPost?.id} className="col-md-4">
                                        <div className='card p-3 my-2 bg-light'>
                                            <h5 className='text-center'>{newPost?.title}</h5>
                                            <p>{newPost?.body}</p>
                                            <div className="text-center">
                                                <Link to={`/editPost/${newPost.id}`} className='btn btn-warning mx-1'>Edit Post</Link>
                                                <button onClick={() => deletePost(newPost.id)} className='btn btn-danger mx-1'>Delete Post</button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                            }
                            {
                                posts.map(post => 
                                    <div key={post.id} className="col-md-4">
                                        <div className='card p-3 my-2 bg-light'>
                                            <h2>{post.id}</h2>
                                            <h5 className='text-center'>{post.title}</h5>
                                            <p>{post.body}</p>
                                            <div className="text-center">
                                                <Link to={`/user/2/details/${post.id}`}>Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                
                                )
                            }
                        </div>
                </div>
            </div>
    );
};

export default User;