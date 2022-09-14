import React from 'react';
import ReactGA from 'react-ga';
import { Switch, HashRouter, Route } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import './components/styles.css';
import NavBar from './components/NavBar';
import Leaflet from './components/Leaflet.jsx';
import Imag from './components/Imag.jsx';
import Journie from './components/Journie.jsx';
import Projects from './components/Projects';
import JobsBoard from './components/JobsBoard.jsx';
import handicon from './components/images/handicon.png';
import eyeicon from './components/images/eyeicon.png';
import youngme from './components/images/youngme.png';

ReactGA.initialize("UA-153162012-1");

class App extends React.Component {
  componentDidMount = () => ReactGA.pageview(window.location.pathname + window.location.search);
  componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);
  render() {
    return (
      <div className="main-container">
        <HashRouter basename="/portfolio" >
          <ScrollToTop>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Projects} />
              <Route exact path='/imag' component={Imag} />
              <Route exact path='/journie' component={Journie} />
              <Route exact path='/leaflet' component={Leaflet} />
              <Route exact path='/daily-job-site' component={JobsBoard} />
              <Route exact path='/about' component={About} />
              <Route path='*' component={Projects} />
            </Switch>
            {/* <Footer /> */}
          </ScrollToTop>
        </HashRouter>
      </div >
    );
  }
}

export default App;

function About() {
  return (
    <div className="project">
      <img src={youngme} style={{ width: "25%", display: "block", borderRadius: "0px" }} className="profile-pic"/>
      <div className="about-text">
      <h1>
        Hi! I’m Grace.
      </h1>
      <p>I’m a designer, creative technologist, and writer. As a kid, I would fold paper and draw buttons on them to “prototype” my dream computers. Now I’m a computer science/HCI student at Stanford who loves designing things and bringing them to life with code. 
      </p>
      <p>Outside of design, you'll find me watching a Joss Whedon show or trying to will myself to exercise.
      </p>
      <p>I also like to write! I've written instructions for Apple products, advice articles for Girls' Life Magazine, and satire pieces for McSweeney's.
      </p>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      Developed by Grace
    </div>
  )
}

