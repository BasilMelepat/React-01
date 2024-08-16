import React from 'react';
import './Navbar.css';

const MyNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="#" className="navbar-brand">Welcome to React</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="#">Home</a>
              <a class="nav-item nav-link" href="#">About</a>
              <a class="nav-item nav-link" href="#">Services</a>
              <a class="nav-item nav-link" href="#">Contact</a>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;