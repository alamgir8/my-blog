import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="nav-section text-white bg-dark sticky-top py-3">
        <div className="container">
        <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                           
                            <ul className="navbar-nav ml-auto mb-lg-0 nav justify-content-end">
                                <li className="nav-item">            
                                    <Link to="/home" className="nav-link mx-3 h6 nav-header"> Home </Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/user/2" className="nav-link mx-3 h6 nav-header">Profile</Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    </nav>
           

        </div>
    </div>
    );
};

export default Header;