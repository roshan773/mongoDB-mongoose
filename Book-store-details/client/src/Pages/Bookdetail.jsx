import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BsArrowLeft, BsTrash, BsPencilSquare } from "react-icons/bs";

const Bookdetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/book/detail/${id}`)
      .then(res => setBook(res.data.book))
      .catch(err => console.error("Error fetching book:", err));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`http://localhost:8080/api/book/delete/${id}`);
        alert("Book deleted successfully.");
        navigate("/");
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Failed to delete book.");
      }
    }
  };

  if (!book) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container py-5">
      <Link to="/" className="text-decoration-none text-secondary mb-3 d-inline-flex align-items-center">
        <BsArrowLeft className="me-2" /> <span>Back to Home</span>
      </Link>

      <div className="card shadow-sm border-0 rounded-4 mx-auto" style={{ maxWidth: "1000px", backgroundColor: "#fdfdfd" }}>
        <div className="row g-0">
          <div className="col-md-5 bg-light rounded-start-4 overflow-hidden">
            <img
              src={book.img}
              alt={book.title}
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover", borderRadius: "20px 0 0 20px" }}
            />
          </div>

          <div className="col-md-7 p-4 d-flex flex-column">
            <div className="mb-4">
              <h2 className="fw-bold">{book.title}</h2>
              <p className="text-muted mb-1"><strong>Author:</strong> {book.author}</p>
              <p className="text-muted mb-1"><strong>ISBM:</strong> {book.ISBM}</p>
              <p className="text-success fw-semibold fs-5 mt-2">₹{book.price}</p>
              <hr />
              <p className="text-secondary" style={{ fontSize: "0.95rem" }}>{book.description}</p>
            </div>

            <div className="mt-auto d-flex flex-column flex-sm-row gap-3">
              <Link to={`/edit/${book._id}`} className="btn btn-primary w-100 rounded-pill d-flex align-items-center justify-content-center">
                <BsPencilSquare className="me-2" /> Edit Book
              </Link>
              <button onClick={handleDelete} className="btn btn-danger w-100 rounded-pill d-flex align-items-center justify-content-center">
                <BsTrash className="me-2" /> Delete Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetail;
