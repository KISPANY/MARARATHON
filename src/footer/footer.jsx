import React from 'react';
import './footer.css';
import location from './location.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links-section">
        <div className="footer-head">
            <p className="footer-title">Tanzania Tour Guides Marathon</p>
            <p className="footer-desc">Uniting guides, promoting tourism, and supporting conservation through sport and community.</p>
            <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social">Twitter</a>
            </div>
        </div>
        <div className="footer-links">
          <p>Quicklinks</p>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#info">Marathon Info</a></li>
            <li><a href="#routes">Routes</a></li>
            <li><a href="#ticket">Get Your Ticket</a></li>
            <li><a href="#partners">Partners</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Contact Us</p>
          <ul>
            <li><span className="footer-contact-label"><img src={location} /></span> Arusha, Tanzania</li>
            <li><span className="footer-contact-label"><img src={location} /></span> info@tourguidesmarathon.co.tz</li>
            <li><span className="footer-contact-label"><img src={location} /></span> +255 123 456 789</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tanzania Tour Guides Marathon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
