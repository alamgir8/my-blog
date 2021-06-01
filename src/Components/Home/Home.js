import React, { useEffect, useState } from 'react';
import Header from './Header/Header';

const Home = () => {
    const [posts, setPosts] = useState([])
    const [visiblePost, setVisiblePost] = useState(10)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const showMore = () => {
        setVisiblePost(previous => previous + 10)
    }

    return (
        <div className='home py-5'>
            <Header/>
            <div className="container">
                <div className="row">
                        {
                            posts.slice(0, visiblePost).map(post => 
                                <div key={post.id} className="col-md-4">
                                    <div className='card p-3 my-2 bg-light'>
                                        <h5 className='text-center'>{post.title}</h5>
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            
                            )
                        } 
                </div>
                <div className="text-center">
                <button onClick={showMore} className='btn btn-info'>Load More</button>
                </div>
            </div>   
        </div>
    );
};

export default Home;