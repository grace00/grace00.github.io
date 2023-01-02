import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.css';
import Preview from './images/journie-project-preview.png'
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
    <div className="project journie">
      <div className="overlay green full-width no-border-radius cover">
        <h1 className="project-title">
          Journie
        </h1>
        <p className="subtitle">Matching commuters to carpools.</p>
        <img src={Preview} />
      </div>

      <div className="row details-container">
        <h4>Overview</h4>
        <span className="proj-detail">Journie is a project I worked on for a service design class. My team was tasked with improving Stanford Rideshare, a program that incentivizes Stanford employees to carpool to and from work together.</span>
        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">10 weeks</span>
          <h4>Role</h4><span className="proj-detail">UI/UX designer, researcher</span>
        </div>
        <div className="column">
          <h4>Teammates</h4><span className="proj-detail">3 other researchers, 1 other designer
          </span>
          <h4>Tools</h4><span className="proj-detail">Figma</span>
        </div>
      </div>

      <div className="full-width section-container gray">
        <div className="project">
          <h5>PROBLEM</h5>
          <h1>Stanford employees currently struggle to find other employees to carpool with. </h1>
          <p>
            Employees are eager to carpool to save money, time, and the environment. The process of finding and joining a Stanford Rideshare carpool, however, is tedious and time-consuming. This prevents some people from carpooling entirely.
      </p>
          <h5>SOLUTION</h5>
          <h1>We designed Journie, an app that helps employees join carpools by providing personalized recommendations.
</h1>
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
          <img src={Onboard} />
          <div>
            <h1>Receive your top recommendations</h1>
            <p>After completing a quick onboarding process, users are provided with a list of the best recommendations based on their work schedule and address. They can further refine the options with filters.</p>
          </div>
        </div>
        <div className="demo-box">
          <div>
            <h1>Get informed about each carpool option</h1>
            <p>Users can view all the details they need to know about each carpool to make an informed decision, including the carpools’s expectations, costs, and route.</p>
          </div>
          <img src={Info} />
        </div>
        <div className="demo-box">
          <img src={Join} />
          <div>
            <h1>Join a carpool in seconds</h1>
            <p>When users join their preferred carpool option, it automatically gets populated into their calendar for each day they plan to ride.</p>
          </div>
        </div>
        <div className="demo-box">
          <div>
            <h1>Know what's happening</h1>
            <p>While a carpool is occurring, users can easily access directions and see how far the driver is from their stop. If an emergency happens, they can cancel a ride but are reminded of the consequences.</p>
          </div>
          <img src={Morning} />
        </div>
      </div>


      <div className="full-width section-container gray">
        <div className="project">
          <p>Let’s rewind back to the beginning of our process.</p>
          <h5>USER RESEARCH</h5>
          <h3>Empathizing with users</h3>
          <p>
            In order to understand how we could improve Stanford Rideshare, we each interviewed two Stanford employees about their rideshare experiences, needs, and frustrations. Our <b>8 interviewees</b> included carpool coordinators, riders, and an employee who was unsuccessful in finding a carpool.
      </p>
          <p>
            We created an affinity map and journey maps (or should I say Journie<sup>TM</sup> maps) to synthesize our findings and identify pain points.
      </p>

          <img src={JourneyMap} style={{ width: "100%", height: "auto" }} />
          <div className="caption">Journey map I made</div>

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
      <h3>Defining the idea</h3>
      <p>
        After analyzing these user insights and pain points, we asked ourselves this question:
      </p>
      <div className="emphasized-text">How might we help Stanford employees find carpools that fit their schedules and preferences?</div>
      <img src={Brainstorm} />
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
      <p>Some ideas we nixed: an in-person meetup (too difficult to prototype with Stanford employees), an email list (didn’t want to cross into the Stanford Rideshare administrators’ territory), and a dark horse hitchhiking app (didn't want to get sued).</p>
      {/* <h5>BLUEPRINT</h5>
      <h3>Mapping the service</h3>
      <p>
        The app would be part of a larger service that involves the customer, the product, and the employees. We made a service blueprint to visualize the entire service’s process.
      </p>
      <img src={Blueprint} /> */}

      <div className="full-width section-container gray">
        <div className="project">
          <h5>COMPARATIVE USABILITY TESTING</h5>
          <h3>Learning from testing other platforms</h3>
          <p>
            My partner and I <b>tested 3 existing products on 4 people</b> to learn from their designs before we started on ours.
       </p>
          <div className="small-overflow">
            <img src={ComparatorResults} />
          </div>
          <br />
          <div className="center-text">
          <a href="https://docs.google.com/document/d/1j5tg171gBLV3CdU0LSTmcAGvBOsrnUu8sIpEhng1Fdc/edit?usp=sharing" target="_blank" className="btn-big">View Full Analysis</a>
        </div>
        </div>
      </div>

      <h5>PROTOTYPING</h5>
      <h3>Testing early directions and converging</h3>
      <p>
        We created <b>3 paper prototypes</b> based on our idea and <b>tested them on 3 people</b> to decide which concept was best for users.
      </p>
      <p>Users felt that Prototype #1’s upcoming ride calendar was very helpful and that Prototype #3’s flow was the most intuitive. We decided to move forward with <b>a combination of the two concepts.</b></p>
      <div className="medium-overflow usability-box">
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
          <h3>Testing and iterating the design 🔄</h3>
          <p>
            Between wireframes and the final prototype, we <b>tested the app with 6 users:</b> Stanford Rideshare members and other Stanford affiliates.
      </p>
          <p>We followed the <b>highly iterative RITE method:</b> after each test, we implemented improvements so following users could provide feedback and validate them.
      </p>
          <img src={UserTest} />
          <p>Here are a few of the changes we made:</p>

          <div className="medium-overflow">
            <div className="usability-box">
              <img src={OnboardIteration} />
              <div>
                <h1>More emphasis on important information</h1>
                <ul>
                  <li>Added leaving and arrival times because this helped users decide between carpools</li>
                  <li>Added home and work icons next to location fields to clarify expected input</li>
                </ul>
              </div>
            </div>
            <div className="usability-box">
              <div>
                <h1>More intuitive</h1>
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
                <h1>Just the essentials</h1>
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
      <div className="center-text">
        <Link to="#final-design" className="btn-big">Jump up to final design</Link>
      </div>

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
          <Link to="#top" className="btn-big">Back to top</Link>
        </div>
      </div>
    </div>)
}

export default Journie;
