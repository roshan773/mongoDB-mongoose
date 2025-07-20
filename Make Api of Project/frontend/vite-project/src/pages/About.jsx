import React from "react";

function About() {
  return (
    <div className="bg-dark text-light min-vh-100 py-5 px-3 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="text-center mb-5 animate__animated animate__fadeInDown">
          <h1 className="display-4 text-warning fw-bold">About This Project</h1>
          <p className="lead">A full-stack web application for user management with secure authentication and admin features.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <div className="card bg-secondary text-light h-100 shadow-lg">
              <div className="card-body">
                <h5 className="card-title">🔐 Features</h5>
                <ul className="list-unstyled mt-3">
                  <li>✅ User Sign Up & Login with JWT</li>
                  <li>✅ Password hashing using bcrypt</li>
                  <li>✅ Role-based access (Admin / Explorer)</li>
                  <li>✅ Middleware for Auth & Role Validation</li>
                  <li>✅ Logging user activity to <code>log.txt</code></li>
                  <li>✅ Admin can Edit/Delete Users</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 animate__animated animate__fadeInRight">
            <div className="card bg-secondary text-light h-100 shadow-lg">
              <div className="card-body">
                <h5 className="card-title">🛠️ Technologies Used</h5>
                <ul className="list-unstyled mt-3">
                  <li>⚛️ React.js - Frontend UI</li>
                  <li>🧠 Node.js + Express.js - Backend API</li>
                  <li>🍃 MongoDB with Mongoose - Database</li>
                  <li>🛡️ JWT - Token-based Authentication</li>
                  <li>🔑 bcrypt - Password Security</li>
                  <li>📁 fs - File System for Logging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 animate__animated animate__fadeInUp">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/api-documentation-5734439-4791587.png"
            alt="API Project Illustration"
            className="img-fluid"
            style={{ maxWidth: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
