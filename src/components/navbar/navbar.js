import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/options">Options</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
    </ul>
  );
}

export default NavBar;