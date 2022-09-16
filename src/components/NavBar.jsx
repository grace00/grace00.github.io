import React, { Component } from 'react';
import './styles.css';
import { Link, NavLink } from "react-router-dom";

// hide navbar on scroll code from https://lxieyang.github.io/blogs/tech-2018-08-18-reactstrap-gatsby-auto-hiding-navbar-trick/

function NavBar() {
  return (
    <div id="top">
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


// class NavBar extends Component {
//   constructor (props) {
//     super(props);

//     // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
//     if (typeof window !== 'undefined') {
//       let prevScrollpos = window.pageYOffset;
//       window.onscroll = function () {
//         const maxScroll = document.body.clientHeight - window.innerHeight;
//         let currentScrollPos = window.pageYOffset;
//         if (
//             (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
//           || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
//           || (prevScrollpos <= 0 && currentScrollPos <= 0)
//           ) {
//           document.getElementById("navbar").style.top = "0";
//         } else {
//           document.getElementById("navbar").style.top = "-5.0rem"; // adjustable based your need
//         }
//         prevScrollpos = currentScrollPos;
//       }
//     }
//   }

//   render () {
//     return (
//     <div>
//         <nav id="navbar">
//           <NavLink to="/" className="name">Grace Zhou</NavLink>
//           <ul>
//             <li><NavLink to="/" className="underline" exact={true} activeClassName='is-active'>Work</NavLink></li>
//             {/*<li><Link to="/writing">writing</Link></li>*/}
//             <li><Link to="/about" className="underline">About</Link></li>
//           </ul>
//         </nav>
//     </div>
//     );
//   }
// }

// export default NavBar;
