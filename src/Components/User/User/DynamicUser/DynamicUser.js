import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../../Home/Header/Header';
import Pagination from './Pagination';

const DynamicUser = () => {
    const [selectUser, setSelectUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(3)
    const {userId} = useParams()
 

    useEffect(() => {
        //fetch for find specific user
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            const result = data.find(user => {
                return user.id === parseInt(userId)
            })
            setSelectUser(result)
        })

        //fetch for filter user all posts
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const result = data.filter(posts => {
                return posts.userId === parseInt(userId)
            })
            setPosts(result)
        })

    }, [userId])

    const lastPost = currentPage * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPost = posts.slice(firstPost, lastPost);

    const paginate = (number) => {
        console.log(number);
        setCurrentPage(number)
    }
    
    return (
        <div className='dynamic-user'>
            <Header/>
            <div className="container">
                <div className="user-info card bg-light p-4 my-4 w-50 mx-auto">
                    <h2>User ID No : {selectUser.id}</h2>
                    <h3>User Name : {selectUser.name}</h3>
                    <h3>Email : {selectUser.email}</h3>
                    <h3>Phone : {selectUser.phone}</h3>
                    <h3>Website : {selectUser.website}</h3>
                </div>
                <div className="user-posts">
                    <h4>User Posts</h4>
                    <ul className="list-group my-2">
                        {
                            currentPost.map(post =>
                                <li key={post.id} className="list-group-item">
                                      <span>{post.id}</span> {post.title}
                                </li>
                                )
                        }
                    </ul>
                    <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
                </div>
            </div>
        </div>
    );
};

export default DynamicUser;