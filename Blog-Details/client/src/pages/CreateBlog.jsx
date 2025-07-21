import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const CreateBlog = () => {
  const [form, setForm] = useState({ title: '', author: '', content: '', tags: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/blog/createpost', {
        ...form,
        tags: form.tags.split(',').map(tag => tag.trim()),
      });
      toast.success('✅ Blog created successfully!', {
        position: 'top-center',
        autoClose: 2500,
      });
      setTimeout(() => navigate('/'), 2800); // navigate after toast
    } catch (error) {
      console.error(error);
      toast.error('❌ Failed to create blog. Try again!', {
        position: 'top-center',
        autoClose: 2500,
      });
    }
  };

  return (
    <div className="container my-5">
      <ToastContainer />
      <div className="create-blog-light mx-auto p-4 shadow rounded-4">
        <h2 className="text-center mb-4 blog-title">📝 Start Writing Your Blog</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              name="title"
              className="form-control blog-input-light"
              placeholder="Enter blog title"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              name="author"
              className="form-control blog-input-light"
              placeholder="Author name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              name="content"
              className="form-control blog-input-light"
              rows="6"
              placeholder="Write your blog content..."
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label">Tags</label>
            <input
              name="tags"
              className="form-control blog-input-light"
              placeholder="e.g. Travel, Lifestyle, Coding"
              onChange={handleChange}
            />
            <div className="form-text">Separate tags with commas (,)</div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill btn-fun">
              🚀 Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
