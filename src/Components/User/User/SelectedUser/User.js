import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../Header/Header';
import { PostContext } from '../../../Reducer/State/State';

const User = () => {
    const [posts, setPosts] = useState([])
    const {newPosts, deletePost} = useContext(PostContext);

    useEffect(() => {
        const getPosts = async() => {
            const postFromServer = await fetchData()
            const filteredData = postFromServer.filter((post) => post.userId === 2)
            setPosts(filteredData)
        }

        getPosts()
       
    }, [])

    const fetchData = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        return data;
    }


    return (
            <div className='user'>
                <Header/>
                <div className="container">
                    <h3 className='py-5 text-center'>User two profile</h3>
                        <div className="text-right">
                            <Link to='/addPost' className='btn btn-info my-3'>Create Post</Link>
                        </div>
                        {
                            newPosts.length > 0 &&
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
                            </div>
                        }

                            <div className="row">
                            {
                                posts.map(post => 
                                    <div key={post.id} className="col-md-4  mt-4 ">
                                        <div className='card d-flex flex-column h-100 p-3 bg-light'>
                                            <p className='text-center strong'>Post ID : {post.id}</p>
                                            <h5 className='text-center'>{post.title}</h5>
                                            <p>{post.body}</p>
                                            <div className="text-center mt-auto">
                                                <Link to={`/user/2/details/${post.id}`} className='h5'>Details</Link>
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