import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      style={{ zIndex: 1 }}
      className="bg-info position-fixed w-100 py-2"
    >
      <Container className="d-flex justify-content-between">
        {/* Clickable Logo - Redirects to Home */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand style={{ color: "white" }} className="fw-bolder">
            <i className="fa-solid fa-utensils me-2"></i> Recipe Sharing
          </Navbar.Brand>
        </Link>

        {/* Navigation Links with Colored Icons & Labels */}
        <Nav className="d-flex align-items-center">
          <Link to="/favorites" className="text-white text-decoration-none me-4 d-flex flex-column align-items-center">
            <i className="fa-solid fa-heart fs-5" style={{ color: "red" }}></i>
            <span className="small">Favorites</span>
          </Link>
          <Link to="/read-later" className="text-white text-decoration-none me-4 d-flex flex-column align-items-center">
            <i className="fa-solid fa-bookmark fs-5" style={{ color: "orange" }}></i>
            <span className="small">Read Later</span>
          </Link>
          <Link to="/profile" className="text-white text-decoration-none d-flex flex-column align-items-center">
            <i className="fa-solid fa-user fs-5" style={{ color: "green" }}></i>
            <span className="small">Profile</span>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
