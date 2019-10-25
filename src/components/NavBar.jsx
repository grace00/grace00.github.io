import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <nav>
          <Link to="/" className="name">Grace Zhou</Link>
          <ul>
            <li><Link to="/">projects</Link></li>
            {/*<li><Link to="/writing">writing</Link></li>*/}
            <li><Link to="/about">about</Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default NavBar;
