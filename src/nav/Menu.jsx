import React, { useState, useEffect, useRef } from 'react';
import './menu.css';


const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Disable body scroll when menu is open (for mobile)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu" ref={menuRef}>
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-controls="menu-content"
      >
        <p className="hamburger-line"></p>
        <p className="hamburger-line"></p>
        <p className="hamburger-line"></p>
      </button>
      
      <nav 
        id="menu-content"
        className={`menu-items ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <ul className='ulm' >
          <li className='lim' ><a className='am' href="#hero" onClick={e => handleScroll(e, '#hero')}>Home</a></li>
          <li className='lim' ><a className='am' href="#info" onClick={e => handleScroll(e, '#info')}>Marathon info</a></li>
          <li className='lim' ><a className='am' href="#routes" onClick={e => handleScroll(e, '#routes')}>Marathon Categories</a></li>
          <li className='lim' ><a className='am' href="#ticket" onClick={e => handleScroll(e, '#ticket')}>Get your Ticket</a></li>
          <li className='lim' ><a className='am' href="#partners" onClick={e => handleScroll(e, '#partners')}>Partners</a></li>
        </ul>
      </nav>
      
      {/* Overlay when menu is open */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu} />}
    </div>
  );
};

export default Menu;