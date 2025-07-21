import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/blog/getpost');
      if (res.data.blog.length === 0) {
        toast.info('No blogs found. Start by creating your first one!');
      }
      setBlogs(res.data.blog);
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch blogs. Please try again later.');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 fw-bold">📝 Explore Latest Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-center text-muted">No blogs available.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {blogs.map((blog) => (
            <Col key={blog._id}>
              <Card className="h-100 shadow-sm border-0 blog-card" style={{ transition: 'transform 0.3s ease' }}>
                <Card.Body>
                  <Card.Title className="fw-semibold">{blog.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted small">
                    By {blog.author} &nbsp;•&nbsp; {blog.createdAt?.substring(0, 10)}
                  </Card.Subtitle>

                  <Card.Text className="mt-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {blog.content.length > 200
                      ? blog.content.substring(0, 200) + '...'
                      : blog.content}
                  </Card.Text>

                  <div className="mb-3">
                    {blog.tags.map((tag, i) => (
                      <Badge bg="secondary" key={i} className="me-1">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="d-flex justify-content-end">
                    <Link to={`/detail/${blog._id}`} className="btn btn-outline-primary btn-sm">
                      Read More →
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Home;
