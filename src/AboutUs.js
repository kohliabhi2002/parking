import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-header">
     
        <h1>About Us</h1>
        <p>Making Parking Easier and More Efficient for Everyone</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We are committed to making parking more accessible, efficient, and hassle-free. Our app
            provides real-time parking availability and booking, ensuring a smooth and seamless experience
            for all drivers. Whether you’re looking for a spot downtown or near a specific location, we’ve
            got you covered.
          </p>
          <p>
            We believe that parking should never be a stressful part of your day, so we strive to offer the
            most convenient parking solutions. Our easy-to-use platform ensures that you’ll always find
            the perfect spot when you need it.
          </p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/500" alt="Parking" />
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-list">
          <div className="value-item">
            <h3>Efficiency</h3>
            <p>Save time with real-time parking availability and booking.</p>
          </div>
          <div className="value-item">
            <h3>Convenience</h3>
            <p>Book parking spots in advance from the comfort of your phone.</p>
          </div>
          <div className="value-item">
            <h3>Reliability</h3>
            <p>Always find a secure and reliable parking spot near you.</p>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to reach out!</p>
       
        <button className="contact-btn">Contact Us</button>
       
      </section>
    </div>
  );
};

export default AboutUs;
