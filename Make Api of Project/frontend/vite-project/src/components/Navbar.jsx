import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoArea}>
        <Link to="/" style={styles.logo}>
          🚀 Make API Project
        </Link>
      </div>

      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        {!username && (
          <>
            <Link to="/signup" style={styles.link}>Sign Up</Link>
            <Link to="/login" style={styles.link}>Login</Link>
          </>
        )}
        {username && (
          <>
            <span style={styles.username}>
              👋 Hi, <strong>{username}</strong> {role === "Admin" && <span style={styles.adminBadge}>Admin</span>}
            </span>
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "#002142",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  logoArea: {
    flex: 1,
  },
  logo: {
    color: "#F3CC30",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    position: "relative",
    transition: "color 0.3s",
  },
  username: {
    color: "#F3CC30",
    fontWeight: "600",
    fontSize: "1rem",
  },
  adminBadge: {
    backgroundColor: "#ff5733",
    color: "#fff",
    padding: "2px 6px",
    borderRadius: "4px",
    marginLeft: "6px",
    fontSize: "0.8rem",
  },
  logoutBtn: {
    background: "#FF4D4D",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "0.5rem 1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Navbar;
