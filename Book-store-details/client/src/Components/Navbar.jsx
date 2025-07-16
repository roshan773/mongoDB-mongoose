import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container-fluid bg-dark'>
            <nav className="navbar container navbar-expand-lg navbar-dark px-3">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">📚 BookStore</Link>

                    {/* Toggler button for small screens */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link text-light" to="/">Home</Link>
                            <Link className="nav-link text-light" to="/add">Add Book</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
