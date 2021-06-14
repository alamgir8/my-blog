import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../../Header/Header';
import Pagination from './Pagination';

const DynamicUser = () => {
    const [selectUser, setSelectUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(3)
    const {userId} = useParams()
 

    useEffect(() => {
        //fetch for find specific user
        const getUsers = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
            const result = data.find(user => {
                return user.id === parseInt(userId)
            })
            setSelectUser(result)
           
        }

        return getUsers()

    }, [userId])

    useEffect(() => {
        const getPosts = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
                const result = data.filter(posts => {
                    return posts.userId === parseInt(userId)
                })
                setPosts(result)
               
            }
            return getPosts()
    }, [userId])



    const lastPost = currentPage * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPost = posts.slice(firstPost, lastPost);

    const paginate = (number) => {
        // console.log(number);
        setCurrentPage(number)
    }
    
    return (
        <div className='dynamic-user'>
            <Header/>
            <div className="container">
                <div className="user-info card bg-light p-4 my-4 w-50 mx-auto">
                    <p className='h6'>User ID No : {selectUser.id}</p>
                    <h4>User Name : {selectUser.name}</h4>
                    <h4>Email : {selectUser.email}</h4>
                    <h4>Phone : {selectUser.phone}</h4>
                    <h4>Website : {selectUser.website}</h4>
                </div>
                <div className="user-posts my-4">
                    <h4>User Posts</h4>
                    <ul className="list-group mt-2">
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