import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faLaptopCode, faUser, faEdit, faUsers, faFileAlt } from "@fortawesome/free-solid-svg-icons";

import Preview from './images/imag-project-preview.png'
import Report from './images/CS206_Paper.pdf';
import InterviewGuide from './images/journie-interview-guide.png';
import Interviews from './images/imag-interviews.jpg';
import JourneyMap from './images/journie-journey-map.png';
import Brainstorm from './images/journie-brainstorm.png';
import Blueprint from './images/journie-blueprint.png';
import ComparatorGuide from './images/journie-comparator-guide.png';
import ComparatorResults from './images/journie-comparative.png';
import NitsNeeds from './images/journie-nits-needs.png';
import Sketches from './images/journie-sketches.jpg';
import PaperPrototype from './images/journie-prototype.jpeg';
import Prototype1 from './images/journie-prototype1.png';
import Flow from './images/journie-flow.png';
import Wireframes from './images/journie-wireframes.png';
import StyleTile from './images/journie-style-tile.png';
import UserTest from './images/journie-user-test.jpg'
import Onboard from './images/journie-onboard.gif';
import Info from './images/journie-info.gif';
import Join from './images/journie-join.gif';
import Morning from './images/journie-morning.gif';
import OnboardIteration from './images/journie-onboard.png';
import InfoIteration from './images/journie-info.png';
import CalendarIteration from './images/journie-calendar.png';
import MorningIteration from './images/journie-morning.png';


function Journie() {
  return (
    <div className="project">
      <div className="overlay imag full-width no-border-radius">
        <h1 className="project-title">
          IMAG
        </h1>
        <p className="subtitle">Redesigning a government site to help biomedical researchers.</p>
        <img src={Preview} />
      </div>

      <div className="row">
        <h4>Overview</h4>
        <span className="proj-detail">In the fall of 2020, I was a UX design fellow at the National Institutes of Health (NIH). I was tasked with improving the user experience of the IMAG wiki site, the central spot for research and resources related to multiscale modeling.
        </span>

        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">10-week internship (Oct - Dec 2020)</span>
          <h4>Role</h4><span className="proj-detail">UX Designer</span>
        </div>
        <div className="column">
          <h4>Teammates</h4><span className="proj-detail">IMAG Director + 1 engineer
          </span>
          <h4>Tools</h4><span className="proj-detail">Pen & paper, Figma, Miro, Microsoft Teams</span>
        </div>
      </div>

      <div className="full-width section-container gray">
        <div className="project">

          <h3>Problem</h3>
          <p>
            The IMAG site is supposed to be a gathering place for the multiscale modeling community to see what their colleagues are doing, share resources, and network.
          </p>
          <p>
            However, the current site is unintuitive to use, so very few people actually sign up and contribute their work for others to see.
          </p>
          <h3>Solution</h3>
          <p>
            I worked with the director of IMAG and an engineer to redesign the site. My goal was to make it easy and intuitive to use so more researchers will contribute their work.
</p>
          <p>
            The redesign (currently in implementation) has been received really positively!
          </p>

          <div className="three-col-container">
            <div className="col">
              <div className="large-stat">100%</div>
              <div className="stat-text">of users <b>prefer the redesign</b></div>
            </div>
            <div className="col">
              <div className="large-stat">100%</div>
              <div className="stat-text">feel the redesign is <b>easy to use</b></div>
            </div>
            <div className="col">
              <div className="large-stat">100%</div>
              <div className="stat-text">feel the redesign is <b>intuitive</b></div>
            </div>
          </div>
          <p className="small-text center-text"><i>Based on survey with 5 site users</i></p>
        </div>
      </div>

      <h3>Challenges</h3>
      <p>This being my first project in government, I faced a few challenges:
      </p>
      <div className="icon-list">
        <div className="icon-box">
          <div class="icon"><FontAwesomeIcon icon={faQuestion} /></div>
          <div>
            <h1>Vague project</h1>
            <p>
              The task I was given—improve the user experience of the site—was broad for 10 weeks. I was responsible for creating the specific design goals and planning my schedule for the fellowship.
          </p>
          </div>
        </div>
        <div className="icon-box">
          <div class="icon"><FontAwesomeIcon icon={faLaptopCode} /></div>
          <div>
            <h1>Only 1 part-time engineer available</h1>
            <p>
              The site only has one developer, who works on multiple government sites. I needed to ensure my solutions were feasible and worth his effort.
          </p>
          </div>
        </div>
        <div className="icon-box">
          <span class="icon"><FontAwesomeIcon icon={faUser} /></span>
          <div>
            <h1>Lone designer in government team</h1>
            <p>
              I was the only person with design experience on my team, so I leaned on my mentors and books like <i>The User Experience Team of One</i> for guidance.
          </p>
          </div>
        </div>
      </div>
      {/* <ul className="fa-ul icon-list">
        <li><span class="fa-li"><FontAwesomeIcon icon={faQuestion} /></span>
          <h1>Vague project</h1>
          <p>
            The task I was given—improve the user experience of the site—was broad for 10 weeks. I was responsible for creating the specific design goals and planning my schedule for the fellowship.
          </p>
        </li>
        <li><span class="fa-li"><FontAwesomeIcon icon={faLaptopCode} /></span>
          <h1>Only 1 part-time engineer available</h1>
          <p>
            The site only has one developer, who works on multiple government sites. I needed to ensure my solutions were feasible and worth his effort.
          </p>
        </li>
        <li><span class="fa-li"><FontAwesomeIcon icon={faUser} /></span>
          <h1>Lone designer in government team</h1>
          <p>
            I was the only person with design experience on my team, so I leaned on my mentors and books like The User Experience Team of One for helpful guidance.
          </p>
        </li>
      </ul> */}

      <div className="full-width section-container gray">
        <div className="project">
          <h5>RESEARCH</h5>
          <h3>Website audit</h3>
          <p>
            At the start, I needed to gain a complete understanding of the site I was redesigning.
          </p>
          <div className="shadow-box-container">
            <div className="icon-box">
              <div class="icon"><FontAwesomeIcon icon={faEdit} /></div>
              <div>
                <h1>Heuristic markup </h1>
                <p>
                  I did a heuristic markup, a method I learned from the book <i>The User Experience Team of One</i>. It’s a variation of a heuristic evaluation: I assessed the usability of the site and identified opportunities for improvement.
            </p>
              </div>
            </div>
          </div>
          <div className="shadow-box-container">
            <div className="icon-box">
              <div class="icon"><FontAwesomeIcon icon={faUsers} /></div>
              <div>
                <h1>Stakeholder interviews</h1>
                <p>
                  I conducted stakeholder interviews with the IMAG director and engineer to understand the project from their perspectives and how they define success.
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-box-container">
            <div className="icon-box">
              <div class="icon"><FontAwesomeIcon icon={faFileAlt} /></div>
              <div>
                <h1>Content audit</h1>
                <p>
                  To better understand what currently exists on the site, I performed a content audit. I evaluated each type of content on the site, paying attention to usability, accuracy, and findability.
</p>
              </div>
            </div>
          </div>
          <br />
          <h3>User interviews and initial testing</h3>
          <p>
            Now familiar with the existing site, it was time to research the end users. I interviewed 5 researchers who use the site about their experiences and tested the existing site on them. My goal was to identify pain points and issues people face on the site (some people had...<i>strong</i> feelings).
      </p>
          <p>
            I grouped findings and identified the biggest issues people were facing.
      </p>
          <img src={Interviews} className="shadow" />
          <p>
            Some of the biggest issues I found:
      </p>

          <ol>
            <li>
              <h1>Hard to find helpful content</h1>
              <p>Researchers missed useful resources like models because they were hidden. Plus they struggled to navigate to resources they <i>did</i> know existed.
</p>
            </li>
            <li>
              <h1>Complex sign-up process</h1>
              <p>Researchers were annoyed by how long it takes to sign up for an account. The form asks for redundant information and doesn’t prevent common errors.
</p>
            </li>
            <li>
              <h1>Unclear permissions</h1>
              <p>Researchers didn’t know they were allowed to edit and post on the wiki as they please. They would only post when instructed to.
              </p>
            </li>
            <li>
              <h1>Confusing way of creating pages</h1>
              <p>These PhD-holding researchers had to read instructions or email for support to figure out how to create a page on the wiki.
              </p>
            </li>
            <li>
              <h1>Unuseful model repository
</h1>
              <p>
                Researchers felt Models, Tools, & Databases page wasn’t organized in a useful way. They struggled to find models relevant to their work.
              </p>
            </li>
          </ol>

          <h3>Persona</h3>
          <p>
          I created a persona summarizing my user research to help me remember the users’ goals and frustrations as I made design decisions. I also hoped it would help my team envision the end user better after I left, since they’d never had any research like this before.
</p>
          <div className="small-overflow">
            <img src={ComparatorResults} />
          </div>

          <h3>Comparative analysis</h3>
          <p>
          Users have likely used other wikis, NIH sites, and model repositories, so they come to the IMAG site with certain expectations. To learn what standards and best practices users likely expect in the site, I chose and analyzed 6 comparable sites.
</p>
<p>Some of the best practices the site wasn’t following:
</p>
          <ul>
            <li>Make the option to edit visible on every editable page</li>
            <li>Allow users to see their personal edit history</li>
            <li>Have form field lengths match their intended input</li>
            <li>Clearly communicate the purpose of the site</li>
          </ul>
          <div className="small-overflow">
            <img src={ComparatorResults} />
          </div>
          <br />
          <a href="https://docs.google.com/document/d/1j5tg171gBLV3CdU0LSTmcAGvBOsrnUu8sIpEhng1Fdc/edit?usp=sharing" target="_blank" className="btn-big">View Full Analysis</a>
        </div>
      </div>

      <h5>PROTOTYPING</h5>
      <h3>Exploring different directions and converging on one</h3>
      <p>
        We created paper prototypes based on our idea and tested them on 3 people to decide which concept was best for users.
      </p>
      <p>Users felt that Prototype #1’s upcoming ride calendar was very helpful and that Prototype #3’s flow was the most intuitive. We decided to move forward with <b>a combination of the two concepts.</b></p>
      <div className="medium-overflow demo-box">
        <div>
          <img src={Prototype1} style={{ width: '85%' }} />
          <div className="small-text">Prototype #1</div>
        </div>
        <div>

          <img src={PaperPrototype} style={{ width: '100%' }} />
          <div className="small-text">Prototype #3</div>
        </div>
      </div>

      <h3>The user's path</h3>
      <p>
        We made a user flow diagram to map how the user would navigate the selected app concept.
      </p>
      <img src={Flow} />

      <h5></h5>
      <h3>Wireframes</h3>
      <p>
        Following the user flow, we designed wireframes for the screens most essential to the concept. I wireframed all of the following screens except for the one with the header "Live Location."
      </p>
      <div className="medium-overflow">
        <img src={Wireframes} />
      </div>

      <div className="full-width section-container gray">
        <div className="project">
          <h5>USABILITY TESTING</h5>
          <h3>Getting feedback and iterating the design 🔄</h3>
          <p>
            Between wireframes and the final prototype, we tested the app with <b>6</b> Stanford Rideshare members and other Stanford affiliates.
      </p>
          <p>We followed the <b>highly iterative RITE method:</b> after each test, we implemented improvements so following users could provide feedback and validate them.
      </p>
          <img src={UserTest} />
          <p>Here are a few of the changes we made:</p>

          <div className="medium-overflow">
            <div className="usability-box">
              <img src={OnboardIteration} />
              <div>
                <h3>More emphasis on important information</h3>
                <ul>
                  <li>Added leaving and arrival times because this helped users decide between carpools</li>
                  <li>Added home and work icons next to location fields to clarify expected input</li>
                </ul>
              </div>
            </div>
            <div className="usability-box">
              <div>
                <h3>More intuitive</h3>
                <ul>
                  <li>Clarified each day has room for only one morning and night carpool by adding sun and moon icons </li>
                  <li>Copied card design from the carpool recommendations to help users understand the calendar through a familiar pattern</li>
                </ul>
              </div>
              <img src={CalendarIteration} />
            </div>
            <div className="usability-box">
              <img src={MorningIteration} />
              <div>
                <h3>Just the essentials</h3>
                <ul>
                  <li>Removed live locations because it wasn’t helpful to users</li>
                  <li>Provided a cancel option so users can quickly communicate they can’t make it</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5>STYLE</h5>
      <h3>Communicating visually</h3>
      <p>To make sure my partner and I designed the high-fidelity prototype consistently, I developed a style tile. I wanted to <b>evoke nature and the world outside.</b> Users we interviewed cited helping the environment as a reason they joined Stanford Rideshare, so I wanted to remind people of this positive impact. </p>
      <img src={StyleTile} className="shadow" />
      <br /> <br />
      <Link to="#final-design" className="btn-big">Jump to Final Design</Link>

      <div className="full-width section-container gray">
        <div className="project">
          <h5>REFLECTION</h5>
          <h3>Future product possibilities</h3>
          <p>We discovered some problems in user research that we didn’t have time to design solutions for. We also focused just on Stanford Rideshare throughout this project, but I thought a bit about how this product could potentially grow and be monetized. Here were a few of my ideas:</p>
          <ol>
            <li>
              <h1>Expand to more workplaces</h1>
              <p>Growing the user base could lead to better recommendations and more optimized gas-saving routes. </p>
            </li>
            <li>
              <h1>Facilitate the driving rotation</h1>
              <p>Journie could guide the process of scheduling who’s driving which day so everyone is on the same page.</p>
            </li>
            <li>
              <h1>Handle payments and transactions</h1>
              <p>It’s a hassle to split the costs for gas and vehicle maintenance. Journie could make this process more efficient and charge a small fee.
</p>
            </li>
          </ol>

          <h3>Lessons I learned</h3>
          <h1>Screen users before interviewing them</h1>
          <p>I found users to interview by emailing carpoolers on the Stanford Rideshare website. So I was very surprised when the first thing an interviewee told me was that she never managed to join a carpool! Her unsuccessful attempt at joining was insightful, but I could have been more prepared for the interview if I’d uncovered this information in advance. </p>
          <h1>User feedback trumps design patterns</h1>
          <p>I love studying other apps’s interfaces, but their choices might not present the best solution for the problem I’m solving. When conducting user testing, we realized some design patterns we incorporated in our early prototypes were actually confusing or unintuitive for users.
</p>

          <h3>Thanks for reading!&nbsp;&nbsp;🎉</h3>
        </div>
      </div>
    </div>)
}

export default Journie;
