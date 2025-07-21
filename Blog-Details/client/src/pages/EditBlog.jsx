import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: '',
        author: '',
        content: '',
        tags: ''
    });

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/blog/${id}`);
                const { title, author, content, tags } = res.data.blog;
                setForm({
                    title,
                    author,
                    content,
                    tags: tags.join(', ')
                });
            } catch (err) {
                toast.error('⚠️ Failed to load blog data');
            }
        };
        fetchBlog();
    }, [id]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/blog/update/${id}`, {
                ...form,
                tags: form.tags.split(',').map(tag => tag.trim())
            });
            toast.success('✅ Blog updated successfully!');
            setTimeout(() => navigate('/'), 2000);
        } catch (err) {
            toast.error('❌ Failed to update blog');
        }
    };

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                padding: '2rem'
            }}
        >
            <ToastContainer />
            <div
                className="p-5 shadow-lg rounded-4"
                style={{
                    width: '100%',
                    maxWidth: '700px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid #e0e0e0'
                }}
            >
                <h2 className="mb-4 text-center fw-semibold text-primary">✏️ Edit Your Blog</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control rounded-3"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Author</label>
                        <input
                            type="text"
                            name="author"
                            className="form-control rounded-3"
                            value={form.author}
                            onChange={handleChange}
                            placeholder="Author name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Content</label>
                        <textarea
                            name="content"
                            className="form-control rounded-3"
                            rows="6"
                            value={form.content}
                            onChange={handleChange}
                            placeholder="Write your blog content..."
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Tags</label>
                        <input
                            name="tags"
                            className="form-control rounded-3"
                            value={form.tags}
                            onChange={handleChange}
                            placeholder="e.g. tech, react, blog"
                        />
                        <div className="form-text text-muted">Separate tags with commas (,)</div>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary px-5 py-2 rounded-pill shadow-sm"
                            style={{ fontWeight: '600', letterSpacing: '1px' }}
                        >
                            💾 Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBlog;
