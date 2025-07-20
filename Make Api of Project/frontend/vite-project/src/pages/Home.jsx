import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container text-center py-5">
        <h1 className="display-4 fw-bold text-warning mb-4 animate__animated animate__fadeInDown">
          Welcome to Make API Project
        </h1>
        <p className="lead mb-4 animate__animated animate__fadeInUp">
          A full-stack user management platform with secure registration, login, and role-based access.
          <br />
          Built with Node.js, Express, MongoDB, and React.
        </p>

        <img
          src="https://www.softacom.com/wp-content/uploads/2024/06/Web-API-project-dotNET-jpg.webp"
          alt="User Management"
          className="img-fluid mb-4 animate__animated animate__zoomIn"
          style={{ maxWidth: "500px" }}
        />

        <div className="row text-start mt-5">
          <div className="col-md-4 mb-4">
            <div className="card bg-secondary h-100 text-white shadow-sm">
              <div className="card-body">
                <h5 className="card-title">🔐 Secure Authentication</h5>
                <p className="card-text">
                  Register and log in securely using bcrypt and JWT tokens. Your data is protected.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-secondary h-100 text-white shadow-sm">
              <div className="card-body">
                <h5 className="card-title">🛡️ Role-based Access</h5>
                <p className="card-text">
                  Admins can edit or delete users, while Explorers have limited access — enforced by middleware.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-secondary h-100 text-white shadow-sm">
              <div className="card-body">
                <h5 className="card-title">🗂️ Full CRUD System</h5>
                <p className="card-text">
                  Perform Create, Read, Update, and Delete operations on users. Admin-only restrictions included.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted mt-4 small">
          This project is for educational purposes. Practice your full-stack skills from frontend to backend.
        </p>
      </div>
    </div>
  );
};

export default Home;
