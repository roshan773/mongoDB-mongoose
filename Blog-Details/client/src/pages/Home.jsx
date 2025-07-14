import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchblog = () => {
    axios.get('http://localhost:8080/api/blog/getpost')
      .then(res => setBlogs(res.data.blog))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchblog()
  }, []);

  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map(blog => (
        <div key={blog._id} className="container mt-5">
          <Card className="shadow p-4">
            <Card.Body>
              <h2 className="mb-3">{blog.title}</h2>
              <h6 className="text-muted">by {blog.author} — {blog.createdAt?.substring(0, 10)}</h6>
              <hr />
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{blog.content.length > 200 ? blog.content.substring(0, 200) + "..." : blog.content}</p>
              <div className="mt-4">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="badge bg-primary me-2">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="d-flex justify-content-end gap-2">
                <Link
                  to={`/detail/${blog._id}`}
                  className="btn btn-outline-dark px-3"
                >
                  Read more
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>

      ))}
    </div>
  );
};

export default Home;