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
import PaperPrototype from './images/journie-prototype.jpeg';
import Prototype1 from './images/journie-prototype1.png';
import Flow from './images/journie-flow.png';
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
import SneakPeak from './images/imag-sneak-peak.png';
import Wikipedia from './images/wikipedia.png';
import SimTK from './images/simtk.png';
import SGCI from './images/sgci.png';
import Fandom from './images/fandom.png';
import NIBIB from './images/NIBIB.png';
import Persona from './images/persona.png';
import Sketches from './images/imag-sketches.png';
import Wireframes from './images/imag-wireframes.png';
import Test1 from './images/imag-test1.png';
import Test2 from './images/imag-test2.png';
import Test3 from './images/imag-test3.png';
import Homepage from './images/imag-homepage.png';
import CreateAccount from './images/imag-create-account.png';
import Models from './images/imag-models.png';
import Model from './images/imag-model.png';
import Profile from './images/imag-profile.png';
import WorkingGroups from './images/imag-working-groups.png';
import testing from './images/imag-test.png';


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
        {/* <h4>Background</h4>
        <span className="proj-detail">In the fall of 2020, I was a UX design fellow at the National Institutes of Health (NIH). I was tasked with improving the user experience of the IMAG wiki site, the central spot for research and resources related to multiscale modeling.
        </span> */}

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
          <h5>OVERVIEW</h5>
          <h3>Problem</h3>
          <p>
            The IMAG site is supposed to be a central place for the multiscale modeling community to see what their colleagues are doing, share resources, and find collaborators.
          </p>
          <p>
            However, the current site is unintuitive to use, so very few people actually make an account and contribute their work for others to see.
          </p>
          <h3>Solution</h3>
          <p>
            I redesigned the site during my UX design fellowship at the National Institutes of Health (NIH). I aimed to make it easy and intuitive to use, so more researchers will contribute to the site.
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
          <div className="small-text center-text"><i>Based on survey with 5 site users</i></div>
          <div className="medium-overflow">
            <img src={SneakPeak} />
</div>
          <div className="center-text">
            <Link to="#imag-redesign" className="btn-big">Jump to full redesign</Link>
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
              The task I was given—improve the UX of the site—was broad for 10 weeks. I was responsible for setting the specific design goals and planning my schedule for the fellowship.
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
                  I assessed the usability of the site and identified opportunities for improvement. I learned about this method, a variation of a heuristic evaluation, from the book <i>The User Experience Team of One</i>.
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
                  I conducted interviews with the IMAG director and engineer to understand the project from their perspectives and how they define success.
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
              <h1>Confusing way of creating pages</h1>
              <p>These PhD-holding researchers had to read instructions or email for support to figure out how to create a page on the wiki.
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
              <h1>Unuseful model repository
</h1>
              <p>
                Researchers felt Models, Tools, & Databases page wasn’t organized in a useful way. They struggled to find models relevant to their work.
              </p>
            </li>
          </ol>

          <h3>Persona</h3>
          <p>
            I created a persona summarizing my user research to help me remember the users’ goals and frustrations as I made design decisions.
</p>
          <img src={Persona} className="shadow" />
          <h3>Comparative analysis</h3>
          <p>
            Users have likely used other wikis, NIH sites, and model repositories, so they come to the IMAG site with certain expectations. To learn what standards and best practices users likely expect in the site, I chose and analyzed 5 comparable sites.
</p>
          <div className="image-row-small">
            <img className="competitor" src={Wikipedia} />
            <img className="competitor" src={SimTK} />
            <img className="competitor" src={NIBIB} />
            <img className="competitor" src={Fandom} />
            <img className="competitor" src={SGCI} />
          </div>
          <p>Some of the best practices the site wasn’t following:
</p>
          <ul>
            <li>Make the option to edit visible on every editable page</li>
            <li>Allow users to see their personal edit history</li>
            <li>Have form field lengths match their intended input</li>
            <li>Clearly communicate the purpose of the site</li>
          </ul>
          <br />
          <div className="center-text">
          <a href="https://docs.google.com/document/d/13U8EeRqz1y8Ofp7nontkKwa4Oe-Xehyo0siYWkrMNLM/edit?usp=sharing" target="_blank" className="btn-big">View Full Analysis</a>
          </div>

          <div className="full-width section-container gray">
        <div className="project"> 
      <h5>DESIGN</h5>
      <h3>Ideation & Sketching</h3>
      <p>
        I brainstormed solutions to fix the issues I discovered during research then sketched the most feasible ideas. I reviewed my sketches with the engineer to check if they were possible to develop in a reasonable amount of time.
</p>
      <div className="medium-overflow">
        <img src={Sketches} />
      </div>
      <h3>Wireframes</h3>
      <p>
        I created low-fidelity wireframes to prototype all of the solutions and functionality.
      </p>
      <div className="medium-overflow">
        <img src={Wireframes} />
      </div>

      <h3>Usability testing</h3>
      <p>
      To validate solutions and identify issues with the prototype, I conducted usability testing with <b>11 users,</b> including college professors and research trainees.
          </p>
      <p>I prepared personalized interview guides for each participant based on their IMAG and site involvement and had them walk through tasks while thinking out loud.
          </p>
      <div className="medium-overflow three-item-row">
        <img src={Test1} className="shadow" />
        <img src={Test2} className="shadow" />
        <img src={Test3} className="shadow" />
      </div>
      <p>With their feedback, I continuously iterated the design, navigation, form fields, and help text until no more usability issues were apparent.
</p>

      {/* <h3>Feedback</h3> */}
      <p>To prevent any problems from being missed, I tracked all of the prototype feedback and issues in a spreadsheet.</p>
      </div>
</div>

      <h5>THE NEW DESIGN</h5>
      <h3>Homepage</h3>
      <p>The homepage is sparse and doesn’t direct researchers to the information most useful to them. Users find funding opportunities, models, upcoming meetings, and support guides helpful but didn’t know the site had these until my user test with them. 
          </p>
      <p>I added direct links to these helpful resources to the home page to make them more discoverable.
      </p>
      <div className="medium-overflow">
        <img src={Homepage} />
      </div>
      <blockquote>
        <div className="quote">
          “Funding opportunities and upcoming meetings are good gateways.”
          </div>
        <div className="quote-citation">– User 10</div>
      </blockquote>

      <h3>Create Account form</h3>
      <p>Researchers were frustrated by how long the Create Account form is, so I cut out unnecessary form fields to speed up the process of creating an account. Since many researchers mark the wrong type of account to sign up for in the first question, wasting a lot of time on their and my supervisor’s part, I took it out and convinced the IMAG supervisor to make all accounts the same type.
      </p>
      <p>I also learned that account holders didn’t know what they were allowed to do on the site, so I added a welcome message to explain permissions to new users.
</p>
      <div className="medium-overflow">
        <img src={CreateAccount} />
      </div>

      <h3>User profile</h3>
      <p>There’s no place to see your past contributions, so users had email Support or search the site to find old posts. I created a new section under the user profile housing the users’ past contributions.
      </p>
      <p>To encourage and make it as easy as possible to post content to the site, I provided add buttons allowing users to add important types of pages immediately after logging in. </p>
      <div className="medium-overflow">
      <img src={Profile} />
      </div>

      <h3>Models, Tools, and Databases page</h3>
      <p>Researchers strongly felt this model repository wasn’t organized in a useful way. They struggled to find models relevant to their specific area of study. I redesigned the page to provide more details about each model and provided filters to help researchers find what they need.
      </p>
      <p>The process of adding a model (and content in general) to the wiki is extremely unintuitive to users. I simplified it by providing an “Add” button on the page (and similar pages), which fit users’ expectations.
</p>
      <div className="medium-overflow">
        <img src={Models} />
      </div>

      <h3>Model details page</h3>
      <p>All details about a model have the same level of visual hierarchy, making it hard for researchers to distinguish the information they care about. I restructured these wiki pages to prioritize what users care about, like the link to the model. 
</p>
      <div className="medium-overflow">
        <img src={Model} />
      </div>

      <h3>Working Groups landing page</h3>
      <p>Despite visiting the Working Groups page multiple times before, researchers still forget where it is in the navigation menu. I changed the menu to make its location crystal clear. 
      </p>
      <p>Users also complained of  “unnecessary friction” to get to a specific group’s page, so I redesigned the landing page to reduce the amount of clicks it takes to get to a group’s page from 4 to 2.
      </p>
      <div className="medium-overflow">
        <img src={WorkingGroups} />
      </div>

      {/* <h3>Working Group details page</h3>
      <p>Users are most interested in a group’s most recent activities, but it’s buried among all the information accumulated over the years. I made a new section for recent activities to address this feedback and inserted a table of contents for easier navigation.
      </p>
      <p>How to join a group is also important to users, but the process varies between groups. It usually involves emailing a group leader, which takes up their time. I designed a process to automatically join groups from the site to streamline that.
</p>
<span className="small-text">Image coming soon</span>
      <div className="medium-overflow">
        <img src={testing} />
      </div> */}

<div className="full-width section-container gray">
        <div className="project">
      <h5>RESULTS</h5>
      <h3>Feedback</h3>
      <p>In a survey I conducted with 5 site users, I received very positive feedback about the new design!
</p>

      <div className="three-col-container">
        <div className="col">
          <div className="large-stat">5/5</div>
          <div className="stat-text">of users <b>prefer the redesign</b></div>
        </div>
        <div className="col">
          <div className="large-stat">5/5</div>
          <div className="stat-text">feel the redesign is <b>easy to use</b></div>
        </div>
        <div className="col">
          <div className="large-stat">5/5</div>
          <div className="stat-text">imagine most people would learn the new design <b>very quickly</b></div>
        </div>
        <div className="col">
          <div className="large-stat">5/5</div>
          <div className="stat-text">feel <b>very confident</b> using the redesign</div>
        </div>
      </div>

      <blockquote>
        <div className="quote">
          “I am <b>very impressed</b> with this project. It represents a huge effort that is very targeted yet thorough. Seeing the side by side comparisons of the layouts makes the differences very clear.”
          </div>
        <div className="quote-citation">– User</div>
      </blockquote>
      <blockquote>
        <div className="quote">
          “The new design is good—it looks <b>less cluttered</b> and is <b>easier to use.</b>”
          </div>
        <div className="quote-citation">– User</div>
      </blockquote>

      <h3>Things I learned</h3>
      <div className="icon-list">
        <div className="icon-box">
          <div class="icon"><FontAwesomeIcon icon={faQuestion} /></div>
          <div>
            <h1>Understand the backend</h1>
            <p>
              Understanding the site’s backend and the capabilities of Drupal 8, which the site was built on, helped me create more innovative solutions. For example, I learned that it’s possible to automatically add a link to a user’s post underneath their profile. Currently, users have to do this manually by pasting the post’s link into their user profile, which -- unsurprisingly -- very few people do. The redesign uses the automated method to reduce users’ work and ensure that their pages get linked. This new way excited both stakeholders and users.
            </p>
          </div>
        </div>
        <div className="icon-box">
          <div class="icon"><FontAwesomeIcon icon={faLaptopCode} /></div>
          <div>
            <h1>Revise forms carefully</h1>
            <p>
              As I was revising the forms, I searched meticulously for form fields that were unnecessary. Taking them out would streamline the form and save users’ time. I learned early on that I needed to collaborate with the director to avoid taking out any form fields that provided information she needed to have. For example, there were a few questions in the Create Account form that I suggested removing until the director explained they were there to help her tell which account requests were legitimate.
</p>
          </div>
        </div>
        <div className="icon-box">
          <span class="icon"><FontAwesomeIcon icon={faUser} /></span>
          <div>
            <h1>Balance stakeholder and user needs</h1>
            <p>
              I needed to work on balancing stakeholders’ and users’ needs a lot with this project. For instance, researchers vented frustration to me about having to fill out a certain long, complicated form, but stakeholders in IMAG felt it was important they complete it if they could. As a result, I negotiated to make the form optional but incorporated design choices to strongly encourage them to fill it out.
            </p>
          </div>
        </div>
      </div>
      <h3>Thanks for reading!&nbsp;&nbsp;🎉</h3>
    </div>
    </div>
        </div>
  )
}

export default Journie;
