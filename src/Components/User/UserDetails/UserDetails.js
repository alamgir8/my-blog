import React from 'react';
import Header from '../../Home/Header/Header';
import UserTable from './UserTable/UserTable';
import Post from './Post/Post';

const UserDetails = () => {


    return (
        <div className='user-details'>
            <Header/>
            <div className="container">
                <h2>This is user Details</h2>
                <Post/>
               <UserTable/>
            </div>
        </div>
    );
};

export default UserDetails;