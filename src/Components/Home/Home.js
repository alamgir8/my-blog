import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const Home = () => {
    const [posts, setPosts] = useState([])
    const [visiblePost, setVisiblePost] = useState(10)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])


    return (
        <div className='home'>
            <Header/>
            <div className="container py-5">
                <div className="row">
                        {
                            posts.slice(0, visiblePost).map(post => 
                                <div key={post.id} className="col-md-4">
                                    <div className='card p-3 my-2'>
                                        <p className='text-center'>Post ID : {post.id}</p>
                                        <h5 className='text-center'>{post.title}</h5>
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            
                            )
                        } 
                </div>
                <div className="text-center">
                <button onClick={() => setVisiblePost(previous => previous + 10)} className='btn btn-info'>Load More</button>
                </div>
            </div>   
        </div>
    );
};

export default Home;