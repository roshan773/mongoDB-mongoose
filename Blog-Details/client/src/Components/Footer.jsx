import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-custom bg-dark text-white py-4 mt-5 shadow-sm">
      <div className="container text-center">
        <h5 className="footer-brand brand-highlight mb-2 d-flex justify-content-center align-items-center gap-2">
          <span role="img" aria-label="blog">📝</span>
          BlogSpace
        </h5>
        <p className="footer-tagline text-muted mb-3">Write. Share. Inspire.</p>

        <div className="footer-links d-flex justify-content-center gap-4 mb-3 flex-wrap">
          <a href="/" className="footer-link text-white text-decoration-none nav-link-style">Home</a>
          <a href="/createpost" className="footer-link text-white text-decoration-none nav-link-style">Create Blog</a>
        </div>

        <small className="text-light opacity-75">
          &copy; 2025 <span className="brand-highlight">BlogSpace</span>. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
