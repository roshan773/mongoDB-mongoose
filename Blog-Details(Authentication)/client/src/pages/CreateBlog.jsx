import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [form, setForm] = useState({ title: '', author: '', content: '', tags: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/blog/createpost', {
        ...form,
        tags: form.tags.split(',').map(tag => tag.trim())
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm rounded-4 p-4 mx-auto" style={{ maxWidth: '700px' }}>
        <h2 className="mb-4 text-center">📝 Create New Blog</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              name="title"
              className="form-control"
              placeholder="Enter blog title"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              name="author"
              className="form-control"
              placeholder="Author name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              name="content"
              className="form-control"
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
              className="form-control"
              placeholder="e.g. React, JavaScript, Web Development"
              onChange={handleChange}
            />
            <div className="form-text">Separate tags with commas (,)</div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4 rounded-pill shadow-sm">
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
