import React from 'react';
import './styles.css';
import Preview from './images/journie-preview.png'
import Report from './images/CS206_Paper.pdf';
import InterviewGuide from './images/journie-interview-guide.png';
import InterviewNotes from './images/journie-interview-notes.png';
import JourneyMap from './images/journie-journey-map.png';
import Brainstorm from './images/journie-brainstorm.png';
import Blueprint from './images/journie-blueprint.png';
import ComparatorGuide from './images/journie-comparator-guide.png';
import ComparatorResults from './images/journie-comparator-results.png';
import NitsNeeds from './images/journie-nits-needs.png';
import Sketches from './images/journie-sketches.jpg';
import PaperPrototype from './images/journie-prototype.jpeg';
import Flow from './images/journie-flow.png';
import Wireframes from './images/journie-wireframes.png';
import StyleTile from './images/journie-style-tile.png';
import Onboard from './images/journie-onboard.gif';
import Info from './images/journie-info.gif';
import Join from './images/journie-join.gif';
import Morning from './images/journie-morning.gif';


function Journie() {
  return (
    <div className="project">
      <div className="overlay blue full-width">
        <img src={Preview} />
      </div>
      <h1 className="project-title">
        Journie
      </h1>
      <p className="subtitle">Designing an app that matches commuters to form carpools</p>

      <div className="row">
        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">10 weeks</span>
        </div>
        <div className="column">
          <h4>Role</h4><span className="proj-detail">Designer</span>
        </div>
        <div className="column">
          <h4>Teammates</h4><span className="proj-detail">3 other people during research phase, 1 other person during design phase
          </span>
        </div>
      </div>

      <h2>Problem</h2>
      <p>
        Stanford Rideshare is a program that incentives Stanford employees to carpool to work together. However, employees struggle to find others whose schedules, locations, and carpool preferences align. Carpools are also forced to set up their own complicated systems of communication and organization, placing a large burden on the volunteer carpool coordinators.
      </p>
      <h2>Solution</h2>
      <p>
        We set out to redesign Stanford Rideshare. The result was Journie, an app concept that helps employees quickly find and join carpools. Users can also view their upcoming rides and stay updated about rides currently happening.
</p>

      <h2>User Research</h2>
      <h3>Interviews</h3>
      <p>
        We interviewed a diverse array of Stanford employees to better understand how the program currently works and what could be improved.
      </p>
      <p>
        We spoke to employees who coordinate a Stanford Rideshare carpool, who ride in one, and who tried to join a carpool but failed. To learn about the underlying structure of the current rideshare program, we also interviewed an administrator who helps manage it.
      </p>

      <div className="medium-overflow">
        <div className="image-row">
          <img src={InterviewGuide} />
          <img src={InterviewNotes} style={{ height: "200px" }} />
        </div>
      </div>

      <h3>Affinity Map</h3>
      <p>
        We then grouped our findings to uncover insights and trends.
      </p>
      <p>From our synthesis of the interviews, we learned that:</p>
      <ul>
        <li>
          People who can’t find an existing carpool that fits their needs post a new listing and attempt to form a new group. Unfortunately, they have to wait months for responses and may never attract enough people to form a carpool.
</li>
        <li>
          If a potential user finds a carpool that fits their needs, they still need to undergo a time-consuming, back-and-forth process with the coordinator to check for compatibility before joining.
</li>
        <li>
          Some people don’t even attempt to join because they think the carpools wouldn’t be flexible enough to accommodate their needs.
</li>
        <li>
          Many carpools are actually very flexible with their members’ needs.
        </li>
        <li>
          Rideshare coordinators struggle to recruit new riders when a rider leaves. This causes immense stress for coordinators because the group may lose its benefits if it falls below a minimum size.
        </li>
        <li>
          Carpools use time-consuming and inefficient methods of communicating and coordinating schedules.
        </li>
      </ul>

      <h3>Journey Map</h3>
      <p>
        We also created journey maps such as this to visualize users’ experiences with Stanford Rideshare.
        </p>
      <img src={JourneyMap} />

      <h2>Design</h2>
      <h3>Ideation</h3>
      <p>
        With these user insights and pain points in mind, my partner and I brainstormed ideas.
      </p>
      <img src={Brainstorm} />
      <p>
        Ultimately, we decided to design an app that accomplishes the following:
      </p>
      <ul>
        <li>
          Enables commuters to join carpools quickly
</li>
        <li>
          Makes carpool information and expectations transparent
        </li>
        <li>
          Simplifies communication between carpool members
        </li>
        <li>
          Clearly allows for flexibility in scheduling
        </li>
      </ul>

      <h3>Blueprint</h3>
      <p>
        Since the app would be part of a larger service, we designed a blueprint to map the processes the service may consist of.
      </p>
      <img src={Blueprint} />

      <h3>Comparative Usability Testing</h3>
      <p>
        Before designing the app, my partner and I tested Bumble, Google Maps, and Waze Carpool on 4 people. We wanted to better understand how people connect with strangers, choose a route, and compare carpool options.
       </p>
      <div className="small-overflow">
        <div className="image-row">
          <img src={ComparatorGuide} />
          <img src={ComparatorResults} />
        </div>
      </div>
      <p>
        After grouping our observations, we created a table summarizing the surface-level usability issues and deeper user needs we discovered.
       </p>
      <img src={NitsNeeds} className="center-image shadow" />

      <h3>Sketches</h3>
      <p>
        Drawing on our user research and comparative testing, we each sketched different directions the app could go in.
      </p>
      <img src={Sketches} />

      <h3>Prototypes</h3>
      <p>
        We then created paper prototypes of the ideas we felt were most feasible and tested them on 3 people.
      </p>
      <img src={PaperPrototype} />

      <h3>User Flow</h3>
      <p>
        Taking user feedback into consideration, we created a user flow diagram to map out the steps users could take through the app.
      </p>
      <img src={Flow} />

      <h3>Wireframes</h3>
      <p>
        We then wireframed a concept that combined two prototypes. Users of the app input their work hours and locations, receive a list of compatible carpools, and choose which one(s) to join and put in their schedule. They can also receive live information about carpools that are happening.
      </p>
      <div className="medium-overflow">
        <img src={Wireframes} />
      </div>

      <h3>Usability Testing & Iteration</h3>
      <p>
        Between wireframes and the final prototype, we tested the app with 6 Stanford Rideshare members and other Stanford affiliates. We followed the highly iterative RITE method: after each test, we implemented improvements so later users could provide feedback and validate the new solutions.
      </p>
      <p>
        With the feedback from our users, we incorporated many changes into the app.
      </p>
      <h4>Carpool Recommendations</h4>
      <ul>
        <li>Users didn’t realize they could tap on a carpool’s card to view more information about it, so we added a small arrow to the right of the card to suggest more details were available.
</li>
        <li>
          We added Home and Work icons next to the location fields to clarify what locations to input.
</li>
        <li>The meaning of a carpool’s leave time was unclear to users. We re-used the same Home and Work icons to more clearly indicate the time to leave home and estimated time of arrival.</li>
        </ul>
      <h4>Carpool Information</h4>
      <ul>
        <li>We added member ratings because users were worried about joining a group of “bad people.”
</li>
        <li>We moved the map to the bottom of the screen because the exact route was less immediately useful to users than a carpool’s information and logistics.</li>
      </ul>
      <h4>Calendar</h4>
      <ul>
        <li>A user thought they could add more than 2 rides in one day. We clarified that each day has room for only one morning carpool and one night carpool by adding sun and moon icons. 
</li>
        <li>
        The next user had no idea what was going on in this screen. The view was not familiar to them through an existing pattern, and it departed from previous screens. We decided to copy over the cards from the carpool listings to help the user recognize their function. As a result, further users were all able to understand what was happening.
</li>
        </ul>
        <h4>Live Carpool Information</h4>
      <ul>
        <li>Users didn’t find the live location of the car useful or necessary, so we took it out.
</li>
        <li>
        The repercussions of marking that you were “out” of a carpool were unclear, so we changed the wording to “Cancel” and added a warning message about the penalty.
</li>
<li>This warning message wasn’t severe enough to deter a later user. To make the consequences more clear, we added a confirmation modal explaining that cancelling could lead them to lose their spot in the carpool.
</li>
<li>We differentiated the two green buttons more so users wouldn’t accidentally tap the wrong one in a rush.</li>
        </ul>

      <h3>Mood Board & Style Tile</h3>
      <p>I created a mood board and style tile for our high-fidelity design.</p>
      <img src={StyleTile} className="shadow" />

      <h2>Final Design</h2>
      <div className="image-left">
      <img src={Onboard} />
      <h3>Recommendations</h3>
      <p>After completing a quick onboarding process, users are provided with a list of the top recommendations that fit their schedule and preferences.</p>
      </div>
      <div className="image-left">
      <img src={Info} />
      <h3>Carpool Information</h3>
      <p>For each carpool, users can see the group’s expectations, costs, and route if the user joined.</p>
      </div>
      <div className="image-left">
      <img src={Join} />
      <h3>Join a Carpool</h3>
      <p>When users join their preferred carpool option, it automatically gets populated into their calendar for each day they plan to ride.</p>
      </div>
      <div className="image-left">
      <img src={Morning} />
      <h3>Live Carpool</h3>
      <p>While a carpool is occurring, users can easily access directions, message their group, and see when the driver is arriving at their stop. If an emergency happens, they can cancel a ride but are reminded of the consequences.</p>
      </div>
    </div>)
}

export default Journie;
