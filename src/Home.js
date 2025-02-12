import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to create this CSS file in the same directory

function Home() {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">Smart Parking</div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/book-parking" className="nav-link">Book Parking</Link></li>
          <li><Link to="/my-bookings" className="nav-link">My Bookings</Link></li>
          <li><Link to="/payments" className="nav-link">Payments</Link></li>
          <li><Link to="/contact-us" className="nav-link">Contact Us</Link></li>
          <li><Link to="/about-us" className="nav-link">About Us</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Smart Parking</h1>
        <p>Your solution to easy and efficient parking. Explore our features and book parking in real-time.</p>
      </section>

      {/* Search Section */}
      <section className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search parking locations..."
        />
        <button className="search-button">Search</button>
      </section>

      {/* Content Sections */}
      <div className="content">
        {/* Book Parking Section */}
        <section className="feature-section" id="book-parking">
          <h2>Book Parking</h2>
          <p>Find available parking spots nearby and book instantly. Check real-time availability and select your preferred spot.</p>
          <Link to="/book-parking">
            <button className="cta-button">Book Now</button>
          </Link>
        </section>

        {/* My Bookings Section */}
        <section className="feature-section" id="my-bookings">
          <h2>My Bookings</h2>
          <p>View your current and past parking bookings, including location, time, and payment status.</p>
          <Link to="/my-bookings">

          <button className="cta-button">View Bookings</button>
          </Link>
        </section>

        {/* Payments Section */}
        <section className="feature-section" id="payments">
          <h2>Payments</h2>
          <p>Complete your parking payments and view past transactions. We support UPI, cards, and wallets.</p>
          <Link to="/payments">
          <button className="cta-button">Make Payment</button>
          </Link>
        </section>

        {/* Contact Us Section */}
        <section className="feature-section" id="contact-us">
          <h2>Contact Us</h2>
          <p>If you have any questions or need support, feel free to reach out to us!</p>
          <Link to="/contact-us">
            <button className="cta-button">Contact Us</button>
          </Link>
        </section>

        {/* About Us Section */}
        <section className="feature-section" id="about-us">
          <h2>About Us</h2>
          <p>We are committed to making parking easier and more efficient for everyone. Our app provides real-time parking availability and booking, ensuring a smooth experience.</p>
        </section>
      </div>
    </div>
  );
}

export default Home;
