import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.css';
import Preview from './images/journie-project-preview.png'
import Report from './images/CS206_Paper.pdf';
import InterviewGuide from './images/journie-interview-guide.png';
import InterviewNotes from './images/journie-interview-notes.png';
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
      <div className="overlay green full-width no-border-radius">
        <h1 className="project-title">
          Journie
        </h1>
        <p className="subtitle">Matching commuters to carpools.</p>
        <img src={Preview} />
      </div>

      <div className="row">
        <h4>Context</h4>
        <span className="proj-detail">Journie is a project I worked on for a service design class. My team was tasked with improving Stanford Rideshare, a program that incentivizes Stanford employees to carpool to and from work together.</span>
        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">10 weeks</span>
          <h4>Role</h4><span className="proj-detail">Designer and researcher</span>
        </div>
        <div className="column">
          <h4>Teammates</h4><span className="proj-detail">3 during research, 1 during design
          </span>
          <h4>Tools</h4><span className="proj-detail">Figma</span>
        </div>
      </div>

      <div className="full-width section-container gray">
        <div className="project">
          <h5>PROBLEM</h5>
          <h3>Stanford employees currently struggle to find other employees to carpool with. </h3>
          <p>
            Employees hope to carpool to save money, time, and the environment. However, the process of finding and joining a Stanford Rideshare carpool is tedious and time-consuming, preventing many people from actually carpooling.
      </p>
          <h5>SOLUTION</h5>
          <h3>We designed Journie, an app that helps employees join carpools by providing personalized recommendations.
</h3>
          <p>
            Users can also view their upcoming rides and stay updated about rides that are currently happening.
      </p>
        </div>
      </div>
      <h5 id="final-design">FINAL DESIGN</h5>
      <h3></h3>
      <br />
      <div className="small-overflow">
        <div className="demo-box">
          <img src={Onboard}/>
          <div>
            <h3>Receive your top recommendations</h3>
            <p>After completing a quick onboarding process, users are provided with a list of the best recommendations based on their work schedule and address. They can further refine the options with filters.</p>
          </div>
        </div>
        <div className="demo-box">
          <div>
            <h3>Get informed about each carpool option</h3>
            <p>Users can view all the details they need to know about each carpool to make an informed decision, including the carpools’s expectations, costs, and route.</p>
          </div>
          <img src={Info} />
        </div>
        <div className="demo-box">
          <img src={Join} />
          <div>
            <h3>Join a carpool in seconds</h3>
            <p>When users join their preferred carpool option, it automatically gets populated into their calendar for each day they plan to ride.</p>
          </div>
        </div>
        <div className="demo-box">
          <div>
            <h3>Know what's happening</h3>
            <p>While a carpool is occurring, users can easily access directions and see how far the driver from their stop. If an emergency happens, they can cancel a ride but are reminded of the consequences.</p>
          </div>
          <img src={Morning} />
        </div>
      </div>


      <div className="full-width section-container gray">
        <div className="project">
          <p>Let’s rewind back to the beginning.</p>
          <h5>USER RESEARCH</h5>
          <h3>Empathizing with users</h3>
          <p>
            In order to understand how we could improve Stanford Rideshare, we each interviewed 2 Stanford employees about their rideshare experiences, needs, and frustrations. Our <b>8 interviewees</b> included carpool coordinators, riders, and an employee who was unsuccessful in finding a carpool.
      </p>
          <p>
            We created an affinity map and journey maps to synthesize our findings and identify pain points.
      </p>

          <img src={JourneyMap} style={{ width: "100%", height: "auto" }} />

          <h3>Key Insights</h3>
          <ol>
            <li>Employees <b>struggle to find carpools</b> that work for their schedule and location.</li>
            <li>People need <b>flexibility</b> when scheduling carpools.</li>
            <li>Even if a user finds a carpool that fits their needs, officially <b>joining is a hassle</b>. </li>
            <li>Carpools use <b>inefficient methods of communicating</b> and coordinating schedules. </li>
          </ol>
        </div>
      </div>

      <h5>IDEATION</h5>
      <h3>Defining the idea 🧠</h3>
      <p>
        After analyzing these user insights and pain points, we asked ourselves this question:
      </p>
      <div className="emphasized-text">How might we help Stanford employees find carpools that fit their schedules and preferences?</div>
      <p>
        After brainstorming, we decided to design an <b>app</b> for Stanford Rideshare that accomplishes the following:
      </p>

      <div class="box-container">
        <div class="box"><div>Enables Stanford employees to <b>join carpools quickly</b>
        </div></div>
        <div class="box"><div>Clearly <b>allows for flexibility</b> to suit people’s schedules
</div></div>
        <div class="box"><div>Makes carpool information and <b>expectations transparent</b>
        </div></div>
        <div class="box"><div><b>Simplifies communication</b> between carpool members
</div></div>
      </div>
      <p>We aimed to help more potential members join carpools, so they can enjoy their commute and get precious time back.</p>
      <div className="small-text">Some ideas we nixed: an in-person meetup (too difficult to prototype with Stanford employees), an email list (didn’t want to cross into the Stanford Rideshare administrators’ territory), and a dark horse hitchhiking app (for danger reasons).</div>
      {/* <h5>BLUEPRINT</h5>
      <h3>Mapping the service</h3>
      <p>
        The app would be part of a larger service that involves the customer, the product, and the employees. We made a service blueprint to visualize the entire service’s process.
      </p>
      <img src={Blueprint} /> */}

      <div className="full-width section-container gray">
        <div className="project">
          <h5>COMPARATIVE USABILITY TESTING</h5>
          <h3>Learning from other platforms</h3>
          <p>
            My partner and I tested existing products on 4 people to learn from their designs before we started on ours.
       </p>
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
      <p>Users felt that Prototype #3’s flow was the most intuitive and that Prototype #1’s upcoming ride calendar was very helpful. We decided to move forward with <b>a combination of the two concepts.</b></p>
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

      <h3>The user's path 🚶‍♀️</h3>
      <p>
        We made a user flow diagram to map how the user would navigate the selected app concept.
      </p>
      <img src={Flow} />

      {/* <h5></h5>
      <h3>Wireframes</h3>
      <p>
        We then wireframed a concept that combined two prototypes. Users of the app input their work hours and locations, receive a list of compatible carpools, and choose which one(s) to join and put in their schedule. They can also receive live information about carpools that are happening.
      </p>
      <p>
        I wireframed all of the following screens except for the Live Location one.
      </p>
      <div className="medium-overflow">
        <img src={Wireframes} />
      </div> */}

      <div className="full-width section-container gray">
        <div className="project">
          <h5>USABILITY TESTING</h5>
          <h3>Getting feedback and iterating the design 🔄</h3>
          <p>
            Following the user flow, we designed wireframes for the screens most essential to the concept.
      </p>
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
                  <li>Added leave and arrival times because this helped users decide between carpools more than their names</li>
                  <li>Added Home and Work icons next to clarify what to input in location fields</li>
                </ul>
              </div>
            </div>
            <div className="usability-box">
              <div>
                <h3>More intuitive</h3>
                <ul>
                  <li>Clarified each day has room for only one morning carpool and night carpool by adding sun and moon icons </li>
                  <li>Repeated card design from the carpool listings to help users understand this calendar is showing their upcoming rides</li>
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
      <p>To make sure my partner and I designed the high-fidelity prototype consistently, I developed a style tile. I wanted to <b>evoke nature and the world outside.</b> Many users we interviewed cited helping the environment as a reason they joined Stanford Rideshare, so I wanted to remind people of the good they can do by joining a carpool. </p>
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
              <b>Expand to more workplaces</b>
              <p>Growing the user base could lead to better recommendations and more optimized gas-saving routes. </p>
            </li>
            <li>
              <b>Facilitate the driving rotation</b>
              <p>Journie could guide the process of scheduling who’s driving which day so everyone is on the same page.</p>
            </li>
            <li>
              <b>Handle payments and transactions</b>
              <p>It’s a hassle to split the costs for gas and vehicle maintenance. Journie could make this process more efficient and charge a small fee.
</p>
            </li>
          </ol>

          <h3>Lessons I learned</h3>
          <b>Screen users before interviewing them</b>
          <p>I found users to interview by emailing carpoolers on the Stanford Rideshare website. So I was very surprised when the first thing an interviewee told me was that she never managed to join a carpool! Her unsuccessful attempt at joining was insightful, but I could have been more prepared for the interview if I’d uncovered this information in advance. </p>
          <b>User feedback trumps design patterns</b>
          <p>I love studying other apps’s interfaces, but their choices might not present the best solution for the problem I’m solving. When conducting user testing, we realized some design patterns we incorporated in our early prototypes were actually confusing or unintuitive for users.
</p>

          <h3>Thanks for reading!&nbsp;&nbsp;🎉</h3>
        </div>
      </div>
    </div>)
}

export default Journie;
