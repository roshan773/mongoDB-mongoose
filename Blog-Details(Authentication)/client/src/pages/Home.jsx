import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/api/blog/getpost')
      .then(res => setBlogs(res.data.blog))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">📰 Latest Blog Posts</h2>
      <div className="row g-4">
        {blogs.map(blog => (
          <div key={blog._id} className="col-md-6 col-lg-4">
            <div className="card blog-card border-0 shadow-sm h-100">
              <img
                src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                alt={blog.title}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className="card-body d-flex flex-column">
                {blog.tags.length > 0 && (
                  <div className="mt-4">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="badge bg-primary me-2 mb-2">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                <h5 className="card-title fw-bold">{blog.title}</h5>
                <p className="card-text text-muted mb-2">
                  {blog.content.length > 100
                    ? blog.content.substring(0, 100) + '...'
                    : blog.content}
                </p>
                <div className="d-flex justify-content-between text-muted small mt-auto">
                  <span>{new Date(blog.createdAt).toDateString()}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-secondary">By {blog.author}</span>
                  <Link to={`/detail/${blog._id}`} className="btn btn-outline-primary btn-sm rounded-pill">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-between px-3 pb-3 pt-0">
                <div className="d-flex gap-3 text-muted small">
                  <i className="bi bi-heart"> 256</i>
                  <i className="bi bi-chat"> 18</i>
                  <i className="bi bi-share"> 12</i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
