import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Homepage">Home</Link>
        </li>
        <li>
          <Link to="/Register">SignUp</Link>
        </li>
        {/* <li>
          <Link to="/Login">Login</Link>
        </li>  */}
        
      </ul>
    </nav>
  );
}

export default NavBar;
