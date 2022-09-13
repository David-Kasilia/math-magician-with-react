import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="Nav-Bar">
    <ul className="Nav-items">
      <li className="Nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="line">|</li>
      <li className="Nav-item">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li className="line">|</li>
      <li className="Nav-item">
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
