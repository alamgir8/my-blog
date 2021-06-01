import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../Home/Header/Header';

const UserDetails = () => {
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState({});
    const [users, setUsers] = useState([])
    const {userId} = useParams()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    }, [])

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
        <div className='user-details'>
            <Header/>
            <div className="container">
                <h2>This is user Details</h2>
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
                <div className="table-responsive my-5">
                    <table className="table table-borderless table-hover">
                        <thead className='bg-light'>
                            <tr>
                                <th className='fw-bolder'>Sr No</th>
                                <th className="fw-bolder">Name</th>
                                <th className="fw-bolder">Email</th>
                                <th className="fw-bolder">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => 
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Link to='/'>{user.name}</Link>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;