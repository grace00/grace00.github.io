import React from 'react';
import ReactGA from 'react-ga';
import { Switch, HashRouter, Route } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'
import './index.css';
import NavBar from './components/NavBar';
import Leaflet from './components/Leaflet.jsx';
import Research from './components/BelongingBias';
import Projects from './components/Projects';
import WebMD from './components/WebMD.jsx';
import Novi from './components/Novi.jsx';
import WhizKid from './components/WhizKid.jsx';
import JobsBoard from './components/JobsBoard.jsx';
import SoundOff from './components/SoundOff';
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
              <Route exact path='/leaflet' component={Leaflet} />
              <Route exact path='/hci-research' component={Research} />
              <Route exact path='/webmd-gen-z' component={WebMD} />
              <Route exact path='/daily-job-site' component={JobsBoard} />
              <Route exact path='/whiz-kid' component={WhizKid} />
              <Route exact path='/novi-app' component={Novi} />
              <Route exact path='/sound-off' component={SoundOff} />
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
    <div className="project">
      <img src={youngme} style={{ width: "200px", display: "block", borderRadius: "2px"}} />
      <h1>Hi, I’m Grace!</h1>
      <p>I’m studying computer science and psychology at Stanford to understand the vast capabilities of technology and human behavior.
      I aim to design beautiful experiences that promote psychological well-being, operate efficiently, and communicate clearly to the user. </p><p>As a marketing design director for BASES, one of the largest student-run entrepreneurship organizations in the world, I’m a proponent of design solutions that meet business as well as user needs. 
My previous internships in writing, editing, and SEO have taught me how to write, design, and deliver valuable content.
</p><p>I’m currently immersing myself in human-computer interaction research and augmented reality development. Outside of design, you’ll catch me watching <i>Buffy the Vampire Slayer</i>, writing film reviews, and trying to conjure up the will to exercise.
</p></div>
  )
}

function Footer() {
  return (
    <div className="footer">
      Coded with <img src={handicon} /> & <img src={eyeicon} /> by Grace
    </div>
  )
}

