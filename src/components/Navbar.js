import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Burgher King
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <nav className="navbar-nav mr-auto">
          <div className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/order" className="nav-link">
              Order
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/coming-soon" className="nav-link">
              Coming Soon
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
