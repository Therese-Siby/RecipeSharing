import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* Intro Section */}
          <div className="col-md-4">
            <h5>
              <i className="fa-solid fa-utensils me-2"></i> Recipe Sharing
            </h5>
            <p>
              Explore and share delicious recipes from all over the world. Join our community of passionate food lovers!
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/create" className="text-white text-decoration-none">Create Recipe</Link></li>
            </ul>
          </div>

          {/* Guides Section */}
          <div className="col-md-3">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="https://react.dev/" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">React</a></li>
              <li><a href="https://getbootstrap.com/" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">Bootstrap</a></li>
              <li><a href="https://reactrouter.com/" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">React Router</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <div className="d-flex">
              <input type="text" placeholder="Enter your email" className="form-control me-2" />
              <button className="btn btn-info">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="mt-3">
              <a href="https://www.instagram.com/" className="text-white me-3" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/" className="text-white me-3" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.linkedin.com/" className="text-white me-3" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/" className="text-white me-3" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="https://x.com/" className="text-white me-3" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
              <a href="tel:+1234567890" className="text-white"><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>

        {/* ✅ Copyright Section (Now Centered at Bottom) */}
        <div className="text-center mt-3">
          © 2025 Recipe Sharing App. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
