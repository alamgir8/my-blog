import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="nav-section text-white sticky-top">
        <div className="container">
        <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                           
                            <ul className="navbar-nav ml-auto mb-lg-0 nav justify-content-end">
                                <li className="nav-item  pt-1">            
                                    <Link to="/home" className="nav-link mx-3 h6 nav-header"> Home </Link>
                                </li>
                                <li className="nav-item  pt-1">
                                <Link to="/user/2" className="nav-link mx-3 h6 nav-header">Profile</Link>
                                </li>
                               
                                {/* <li className="nav-item  pt-1">
                                    {loggedInUser.displayName ? <span className="nav-link active mx-3 h6 nav-header">{loggedInUser.displayName}</span> : <Link to="/login" className="nav-link active px-3 h6 nav-header">Login</Link>}
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    </nav>
           

        </div>
    </div>
    );
};

export default Header;