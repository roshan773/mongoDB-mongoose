import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Spinner } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/blog/detail/${id}`)
            .then((res) => {
                setBlog(res.data.blog);
                setLoading(false);
            })
            .catch(() => {
                toast.error("Failed to fetch blog details");
                setLoading(false);
            });
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;
        try {
            const res = await axios.delete(`http://localhost:8080/api/blog/delete/${id}`);
            toast.success(res.data.message || "Blog deleted successfully!");
            setTimeout(() => navigate("/"), 1500);
        } catch {
            toast.error("Error deleting blog");
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    if (!blog) return null;

    return (
        <div className="container mt-5">
            <ToastContainer />
            <Card className="shadow p-4 rounded-4 border-0 bg-light">
                <Card.Body>
                    <h2 className="mb-3 text-dark">{blog.title}</h2>
                    <h6 className="text-muted mb-4">
                        ✍️ by <span className="fw-semibold text-dark">{blog.author}</span> —{" "}
                        {new Date(blog.createdAt).toLocaleDateString("en-GB")}
                    </h6>
                    <hr />
                    <p className="fs-5 text-secondary" style={{ lineHeight: "1.8" }}>
                        {blog.content}
                    </p>
                    {blog.tags.length > 0 && (
                        <div className="mt-3">
                            {blog.tags.map((tag, index) => (
                                <span key={index} className="badge bg-secondary me-2 mb-2">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="mt-4 d-flex justify-content-end gap-2">
                        <Link to={`/edit/${blog._id}`} className="btn btn-outline-primary">
                            ✏️ Edit
                        </Link>
                        <Button variant="outline-danger" onClick={handleDelete}>
                            🗑️ Delete
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogDetails;
