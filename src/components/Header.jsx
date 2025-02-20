import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      className="bg-info w-100"
      style={{
        position: "sticky", // Keeps header fixed at the top
        top: "0", // Sticks it at the top
        zIndex: "1000", // Ensures it's above other content
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional shadow
      }}
    >
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand style={{ color: "white" }} className="fw-bolder">
            <i className="fa-solid fa-utensils me-2"></i> Recipe Sharing
          </Navbar.Brand>
        </Link>
        <Nav className="ms-auto">
          <Link to="/recipes" className="nav-link text-white">
            <i className="fa-solid fa-list me-1"></i> Recipe Corner
          </Link>
          <Link to="/wishlist" className="nav-link text-white">
            <i className="fa-solid fa-heart text-danger me-1"></i> Wishlist
          </Link>
          <Link to="/readlater" className="nav-link text-white">
            <i className="fa-solid fa-bookmark text-warning me-1"></i> Read Later
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
