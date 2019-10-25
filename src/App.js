import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import NavBar from './components/NavBar';
import Writing from './components/Writing';
import Projects from './components/Projects';
import WebMD from './components/WebMD.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
            <Switch>
              <Route exact path='/' component={Projects} />
              <Route exact path='/webmd-gen-z' component={WebMD} />
              <Route exact path='/about' component={About} />
              <Route exact path='/writing' component={Writing} />
            </Switch>
          <Footer />
        </Router>
      </div >
    );
  }
}

export default App;

function About() {
  return (
    <div className="about">
      As a kid, I would fold paper and draw buttons on them to create my dream computers. Now, I’m a computer science student at Stanford
      who loves design and development. In my free time, you’ll catch me watching Coursera lectures, writing film reviews,
      and trying to conjure up the will to exercise.
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      Site designed & coded by Grace
    </div>
  )
}
