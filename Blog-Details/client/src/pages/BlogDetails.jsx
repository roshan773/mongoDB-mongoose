import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title: '',
        author: '',
        content: '',
        tags: [],
        createdAt: ''
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/blog/detail/${id}`)
            .then((res) => setBlog(res.data.blog))
            .catch((err) => console.log(err));
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;
        try {
            const res = await axios.delete(`http://localhost:8080/api/blog/delete/${id}`);
            alert(res.data.message);
            navigate("/"); // Go back to home after delete
        } catch (error) {
            alert("Error deleting blog");
        }
    };

    return (
        <div className="container mt-5">
            <Card className="shadow p-4 rounded-4 border-0">
                <Card.Body>
                    <h2 className="mb-3">{blog.title}</h2>
                    <h6 className="text-muted">
                        ✍️ by {blog.author} —{" "}
                        {new Date(blog.createdAt).toLocaleDateString("en-GB")}
                    </h6>
                    <hr />
                    <p className="fs-5" style={{ lineHeight: "1.8" }}>
                        {blog.content}
                    </p>

                    {blog.tags.length > 0 && (
                        <div className="mt-3">
                            {blog.tags.map((tag, index) => (
                                <span key={index} className="badge bg-primary me-2 mb-2">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-4 d-flex justify-content-end gap-2">
                        <Link to={`/edit/${blog._id}`} className="btn btn-outline-dark">
                            Edit ✏️
                        </Link>
                        <Button variant="outline-dark" onClick={handleDelete}>
                            Delete 🗑️
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogDetails;
