import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            console.log(data);
        })
    }, [])

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)


    return (
        <div className='pagination mt-5'>
            <div className="container">
                <ul className="list-group mb-4">
                    {
                        posts.map(post => 
                            <li key={post.id} className='list-group-item'>{post.title}</li>
                            )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Pagination;