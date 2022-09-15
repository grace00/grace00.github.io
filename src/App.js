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
import FadeIn from 'react-fade-in';
import youngme from './components/images/youngme.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHands, faEye } from "@fortawesome/free-solid-svg-icons";

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
            <Footer />
          </ScrollToTop>
        </HashRouter>
      </div >
    );
  }
}

export default App;

function About() {
  return (
    <div className="about project">
      <FadeIn delay={500} >
        <div>
      <img src={youngme} style={{ width: "25%", display: "block", borderRadius: "0px" }} className="profile-pic"/>
      <h1>Hi, I'm Grace!</h1>
      <div className="small-text"><i>(pronounced "grah-che." just kidding)</i></div>
      </div>
      <div className="about-text">
      <p>I’m a designer, developer, and walking IMDb. As a kid, I would fold paper and draw buttons on them to “prototype” my dream computers. Now I’m a computer science/HCI student at Stanford who loves designing things and bringing them to life with code. 
      </p>
      <p>When I’m not designing or coding, I’m typically trying to will myself to exercise. After a couple seconds, I usually give up and end up watching a show or movie and accidentally researching all of the actors in it. I'm a great person to have around when you ask, "Why does that actor look so familiar?" and your phone is all the way across the room.
      </p>
      <p>I also like to write! I've written instructions for Apple products, advice articles for Girls' Life Magazine, and humor pieces for McSweeney's. Check out some of my humor:
      </p>
      <p><a href="https://www.mcsweeneys.net/articles/every-asian-american-celebrity-interview" target="_blank">Every Asian American Celebrity Interview <i>- McSweeney’s</i></a></p>
      <p><a href="https://stanforddaily.com/2022/06/01/freshman-wastes-summer-spending-quality-time-with-loved-ones-and-relaxing/" target="_blank">Freshman wastes summer spending quality time with loved ones and relaxing <i>- The Stanford Daily</i></a></p>
      </div>
      </FadeIn>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      Developed by me with <FontAwesomeIcon icon={faEye} /> and <FontAwesomeIcon icon={faHands} />
    </div>
  )
}

