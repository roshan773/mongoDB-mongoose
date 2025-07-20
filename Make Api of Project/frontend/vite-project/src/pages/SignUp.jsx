import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [form, setForm] = useState({
    username: "", email: "", dob: "", role: "", location: "", password: "", confirmPassword: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:8080/signup", form);
      alert("🎉 Registration successful");
    } catch (err) {
      alert("❌ Registration failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-3">🔐 Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Username</label>
            <input type="text" name="username" className="form-control" onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <label>Date of Birth</label>
            <input type="date" name="dob" className="form-control" onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <label>Location</label>
            <input type="text" name="location" className="form-control" onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <label>Role</label>
            <select name="role" className="form-select" onChange={handleChange} required>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Explorer">Explorer</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" name="password" className="form-control" onChange={handleChange} required />
          </div>
          <div className="form-group mb-4">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" className="form-control" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
