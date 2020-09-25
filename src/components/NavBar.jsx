import React from 'react';
import './styles.css';
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <nav>
          <NavLink to="/" className="name">Grace Zhou</NavLink>
          <ul>
            <li><NavLink to="/" className="underline" exact={true} activeClassName='is-active'>Work</NavLink></li>
            {/*<li><Link to="/writing">writing</Link></li>*/}
            <li><Link to="/about" className="underline">About</Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default NavBar;
