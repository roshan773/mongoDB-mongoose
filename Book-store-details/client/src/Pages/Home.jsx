import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/book/books");
      setBooks(res.data.book);
    } catch (err) {
      console.error("Error fetching books:", err);
      toast.error("Failed to fetch books. Please try again later.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">📚 Book Collection</h2>
        <Link to="/add" className="btn btn-success px-4 py-2 rounded-pill shadow-sm">
          + Add Book
        </Link>
      </div>

      <div className="row">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 book-hover">
                <div className="position-relative">
                  <img
                    src={book.img}
                    className="card-img-top rounded-top-4"
                    alt={book.title}
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <button className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm">
                    <i className="bi bi-heart text-danger"></i>
                  </button>
                </div>

                <div className="card-body d-flex flex-column">
                  <h6 className="fw-semibold text-dark text-truncate">{book.title}</h6>
                  <small className="text-muted">{book.author}</small>
                  <p className="text-secondary mt-2" style={{ fontSize: "0.85rem" }}>
                    {book.description?.slice(0, 50)}...
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="text-success fw-semibold">₹{book.price}</span>
                    <span className="badge bg-warning text-dark">★ 4.7</span>
                  </div>

                  <Link
                    to={`/detail/${book._id}`}
                    className="btn btn-outline-primary btn-sm rounded-pill mt-3"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No books available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
