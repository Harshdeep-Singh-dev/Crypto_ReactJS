import React, { useState } from 'react';
import './Header.css'; // assuming you keep the CSS as is

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <img
        src="images/—Pngtree—editable text effect crypto with_7536642.png"
        alt="Crypto Text Logo"
      />

      <div
        className={`hamburg ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        dangerouslySetInnerHTML={{ __html: isOpen ? 'X' : '&#9776;' }}
      />

      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">What's New</a></li>
          <li><a href="#">Payments</a></li>
          <li><a href="#">Upgrades</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Insider Perks</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
