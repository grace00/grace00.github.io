import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.css';
import Preview from './images/metasign.png'
import journie from './images/journie-mockup.png'
import imag from './images/imagpreview.png'
import Matrix from './images/valueeffort.png'
import IG from './images/igoffice.JPG'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faPaintBrush, faEdit, } from "@fortawesome/free-solid-svg-icons";


function Meta() {
  return (
    <div className="project">
      <div className="overlay gray full-width no-border-radius cover">
        <h1 className="project-title">
          Meta Internship
        </h1>
        <p className="subtitle">Helping users make the most of their product.</p>
        <img src={Preview} />
      </div>
      <div className="row details-container">

        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">June 2022 - September 2022 (12 weeks)
          </span>
          <h4>Platform</h4><span className="proj-detail">Web and mobile
          </span>
        </div>
        <div className="column">
          <h4>Role</h4><span className="proj-detail">Product Design Intern</span>
          <h4>Teammates</h4><span className="proj-detail">5 product designers, 2 content designers, 1 PM, 1 product marketing manager, 2 engineers, 2 user researchers</span>
        </div>
      </div>

      <div className="full-width section-container gray">
        <div className="project">
          <h3>Introduction</h3>
          <p>
            Once upon a summer 2022, I interned at Meta as a product designer on the Business Messaging Tools team. <b>I designed an experience and end-to-end flows to help users make the most of their product.</b> None of which I can show because of this weird thing called “NDAs.” I also gained a ton of learnings and experiences along the way, which I confirmed I <i>can</i> share after reading 200 pages of legal documents.
          </p>
        </div>
      </div>

      <h5>RESEARCH</h5>
      <h3>Gathering project context </h3>
      <p>
      I started with research to get a better understanding of the problem space. I combed through research studies and data, then set up 1:1s with user researchers and a product marketing manager to dive deeper into what the user needs and pain points were. 
</p>
      <p>
      With their perspectives, I created a value/effort matrix to help me <b>prioritize key areas for improvement</b>. To get a better sense of what was causing friction, I audited the existing flows for those areas against major design heuristics. I also analyzed the product’s biggest competitors to gain insight into how other products have solved for users’ frustrations. </p>
      <img src={Matrix} />
      <div className="caption">Value-effort matrix with content removed</div>
      <div className="full-width section-container gray">
        <div className="project">
      <h5>DESIGN</h5>
      <h3>Defining the solution
      </h3>
      <p>
        I used my research to begin designing the experience.
      </p>
      <div className="shadow-box-container">
        <div className="icon-box">
          <div class="icon"><FontAwesomeIcon icon={faEdit} /></div>
          <div>
            <h1>Exploring concepts</h1>
            <p>
              Through sketches and designs in Figma, I brainstormed many possible solutions to the problem, converging and diverging on directions.
            </p>
          </div>
        </div>
      </div>
      <div className="shadow-box-container">
        <div className="icon-box">
          <div class="icon"><FontAwesomeIcon icon={faCompass} /></div>
          <div>
            <h1>Choosing a direction
            </h1>
            <p>
              To help me hone in on a design direction, I sought feedback from other designers on the team. I also checked with the PM and engineers to understand feasibility and requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="shadow-box-container">
        <div className="icon-box">
          <div class="icon"><FontAwesomeIcon icon={faPaintBrush} /></div>
          <div>
            <h1>Fleshing out the design
            </h1>
            <p>
              After deciding on a direction, I designed end-to-end flows and interactive prototypes using the design system. I made a logic flow diagram for different use cases and mocked up mobile screens as well. I also wrote the initial content and collaborated with content designers to polish it.
            </p>
          </div>
        </div>
      </div>
      
      <h3>Curveball: A new business need
      </h3>
      <p>
        While I was designing the solution, I was given a new requirement: add a flow directing users to a new product feature. Clearly, there was a businesses need for this addition, but was it worth adding cognitive load for the user at this part of the journey? I ultimately concluded <b>the tradeoff was worth it because past research suggested it would be valuable to users</b>.
      </p>

      <h3>Iterating…and iterating…and iterating
      </h3>
      <p>
        I shared the design with team members and partners to gather their input and further improve it.
      </p>
      <ul>
        <li>
          I presented it at our team’s formal <b>Design Review</b> and received feedback from senior designers.
        </li>
        <li>
          I conducted a <b>design walkthrough for engineers</b> to get their input and answer questions.
        </li>
        <li>
          I set up <b>1:1s</b> with the PM and team lead for their feedback.</li>
        <li>
          I also <b>reviewed it with the design system team</b> to ensure it was compatible with the overall product’s design. </li>
      </ul>
      <p>I kept iterating the design until it was ready for implementation.</p>
      </div>
      </div>


      <h5>SIDE PROJECT</h5>
      <h3>Bonus: Designing error states
      </h3>
<p>
I volunteered to take on a side project of designing error states for mobile. I designed 9 error states for different use cases. 
</p>
<p>
While doing so, I came across a custom component that was being used to fill a gap in the design system, but it didn’t meet accessibility standards. I revised it to meet them and be more visually aligned with existing system components. I <b>proposed this as a new component for the system</b> so it could be easily incorporated into other parts of the app, improving consistency.
</p>


<div className="full-width section-container gray">
        <div className="project">
<h5>TAKEAWAYS</h5>
      <h3>Lessons learned
      </h3>

      <ol>
            <li>
              <b>Making decisions without user testing</b>
              <p>My team didn’t do user testing because of limited UX research bandwidth. Instead, I was expected to draw from existing research and my design intuition to form POVs on the design. I learned how to craft design rationales and rely more heavily on feedback from peers to make decisions.
              </p>
            </li>
            <li>
              <b>How to ask for feedback</b>
              <p>I heard my team say this phrase a lot: <i>get feedback early and often.</i> Throughout my internship, I pushed myself to ask for feedback from a variety of sources, which helped shape the design to be the best it could be. I learned what avenues (1:1s, chats, or group posts) were appropriate under which circumstances, how to quickly provide necessary context, and when to use feedback or set it aside.  
</p>
            </li>
            <li>
              <b>Keeping partners informed
</b>
              <p>My partners were focusing on other projects at the same time, so it was my job to keep them updated on my progress and where I needed their help. I learned how to communicate with them to keep them in the loop. I also learned the importance of making my work and contributions more visible, so my project isn’t lost among the many priorities of the team and collaboration opportunities can arise.
</p>
            </li>
          </ol>


          <h3>Fun new experiences
      </h3>
      <p>Outside of work, this summer I got to have many fun new experiences. I went to my first concert and rollerbladed for the first time, inside a church! And still have that bruise from falling one month later.
      </p>
      <img src={IG} />
      <div className="caption">Plus, I visited the Instagram office.</div>
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