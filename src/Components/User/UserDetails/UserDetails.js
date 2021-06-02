import React from 'react';
import Header from '../../Header/Header';
import UserTable from './UserTable/UserTable';
import Post from './Post/Post';

const UserDetails = () => {


    return (
        <div className='user-details'>
            <Header/>
            <div className="container">
                <Post/>
               <UserTable/>
            </div>
        </div>
    );
};

export default UserDetails;