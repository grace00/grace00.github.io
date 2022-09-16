import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.css';
import Preview from './images/metasign.JPG'
import Desk from './images/desk.JPG'
import Dropoff from './images/dropoff.JPG'
import journie from './images/journie-mockup.png'
import imag from './images/imagpreview.png'

function Meta() {
  return (
    <div className="project">
      <div className="overlay gray full-width no-border-radius">
        <h1 className="project-title">
          Meta Summer Internship
        </h1>
        <p className="subtitle">Designing an onboarding experience for business owners.</p>
        <img src={Preview} />
      </div>
      <div className="row">

        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">12 weeks, summer 2022</span>
          <h4>Teammates</h4><span className="proj-detail">5 product designers, 2 content designers, 1 PM, 1 product marketing manager, 2 engineers, 2 user researchers
          </span>
        </div>
        <div className="column">
          <h4>Role</h4><span className="proj-detail">Product Design Intern</span>
          <h4>Tools</h4><span className="proj-detail">Figma</span>
        </div>
      </div>

      <div className="full-width section-container gray">
        <div className="project">
          <h5>SUMMARY</h5>
          <h3>Work</h3>
          <p>Once upon a summer 2022, I was a Product Design Intern on the Ads & Business Platforms organization at Meta.</p>
          <p>My main project was <b>designing an onboarding experience to help business owners make the most of their product.</b> Early on, I met with a product marketing manager and two user researchers to thoroughly understand user needs, pain points, and opportunities. I then designed end-to-end flows and interactive prototypes, collaborating with two content designers. I continuously sought feedback through Design Crits, 1:1 meetings with team members and stakeholders, and chat messages, and I iterated the design to optimally meet user and business needs. I also met with the design system team to ensure the designs were compatible with the system and with engineers to check the feasibility.
          </p>
          <p>I addition to my main project, I designed empty states and error states for web and mobile. After realizing a gap in the design system, I designed and proposed a new component to meet user needs and accessibility standards.
          </p>
          <img src={Desk} />
          <div className="caption">My assigned desk</div>

      <h3>Learnings</h3>
      <p>
        Working with 8+ cross-functional partners, I learned how to better juggle priorities, align on project requirements, and articulate my own point of view after considering multiple perspectives. I also became more adept at designing within a larger organization, understanding when to use the design system and when to break from it.
      </p>
      <p>
        I can’t publicly share my work, so reach out if you’d like more details!
      </p>
      <img src={Dropoff} />
      <div className="caption">Tech dropoff on the last day</div>
      </div>
      </div>
      <h3>Up Next</h3>
      <p>Check out my other projects below!</p>
      <div className="all-projects">
        <div class="item">
          <Link to="/imag">
            <div>
              <span class="vertical-helper"></span>
              <img src={imag} className="preview-image" />
            </div>
            <h1>IMAG</h1>
            <div className="small-text">INTERNSHIP • USER RESEARCH • ITERATIVE</div>
            <p>Redesigning a government site to help biomedical researchers share highlights of their work.</p>
          </Link>
        </div>
        <div class="item">
          <Link to="/journie">
            <div>
              <span class="vertical-helper"></span>
              <img src={journie} className="preview-image" />
            </div>
            <h1>Journie</h1>
            <div className="small-text">PROJECT • USER RESEARCH • VISUAL DESIGN</div>
            <p>Designing an app that matches Stanford commuters with carpools.</p>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Meta;