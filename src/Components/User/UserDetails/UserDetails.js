import React from 'react';
import Header from '../../Home/Header/Header';
import Pagination from './Pagination';
import Post from './Post';

const UserDetails = () => {


    return (
        <div className='user-details'>
            <Header/>
            <div className="container">
                <h2>This is user Details</h2>
                <Post/>
               <Pagination/>
            </div>
        </div>
    );
};

export default UserDetails;