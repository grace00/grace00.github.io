import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.css';
import Preview from './images/handshake-project-preview.png'
import Mock from './images/handshake-mock.png'
import Before from './images/handshake-before.png'
import Var1 from './images/var1.JPG'
import Var2 from './images/var2.JPG'
import Var3 from './images/var3.JPG'
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


function Handshake() {
  return (
    <div className="project journie">
      <div className="overlay gray full-width no-border-radius cover">
        <h1 className="project-title">
          Handshake: Redesigning Events
        </h1>
        <img src={Preview} />
      </div>

      <div className="row details-container">
        <h4>Overview</h4>
        <span className="proj-detail">Redesigned the Events page on Handshake to help students find career events relevant to them.</span>
        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">2 days</span>
          <h4>Role</h4><span className="proj-detail">User research, UX design, visual design</span>
        </div>
        <div className="column">
          <h4>Teammates</h4><span className="proj-detail">3 other researchers, 1 other designer
          </span>
          <h4>Tools</h4><span className="proj-detail">Pen and paper, Figma</span>
        </div>
      </div>

      <div className="full-width section-container gray">
        <div className="project">
          <h5>PROBLEM</h5>
          <div className='large-text'>Students are overwhelmed with career events on Handshake and struggle to find ones relevant to their career goals. </div>
         
          <h5>SOLUTION</h5>
          <div className='large-text'>A redesigned Events page that’s easier to scan and surfaces recommended events based on the student’s interests.
</div>
         
        </div>
      </div>
      <h5 id="final-design">REDESIGN</h5>
      <br />
        <div className='small-overflow'>
          <img src={Mock} className="shadow"/>
          <div className="caption">The redesign helps users find relevant career events more easily.</div>
        </div>


      <div className="full-width section-container gray">
        <div className="project">
          <h5>USER RESEARCH</h5>
          <h3>Interviewing users</h3>
          <p>
          I conducted interviews with 3 students — Andrew, Regina, and Emma — to understand their Handshake experiences and uncover problems they’ve faced on the platform. 
      </p>

      <p><b>Insights:</b></p>
          <ul>
            <li>Andrew didn’t being inundated with spam messages in his Inbox, felt that many of the career events “suck,” and wished he could see the deadlines for jobs before clicking on them.
</li>
            <li>Regina felt like she wasted a lot of time on the Events page because she had to wade through irrelevant ones and was annoyed at the amount of email notifications she receives from recruiters messaging her. 
</li>
            <li>Emma was frustrated that she would rarely hear back from jobs she applied to and felt that many of the jobs recommended to her weren’t interesting. </li>
           </ul>
          <p>
          Some of these issues rely on the actions of other users (i.e. companies responding back to job applications), but I wanted to focus on improving the experience of students. 
      </p>
      <p>
      I decided to move forward with redesigning the Events page to help Andrew and Regina find career events that would be helpful to them. </p>
        </div>
      </div>

      <h3>Deeper dive into the Events feature</h3>
      <p>
      I looked more closely at the Events page to get a better sense of why Regina and Andrew were struggling to find good events. 
      </p>
      <p>
      Currently, Handshake’s Events section is one long page of events that are school-sponsored and company-sponsored:
      </p>      
      <div>
          <img src={Before} className="shadow"/>
          <div className="caption">The current Events page</div>
        </div>
<br />
      <p>
      Regina told me that when she comes to this page, she’s specifically looking for tech-related events, but there’s no way to filter down to them, and the filters that are provided aren’t helpful. She has to scroll through the all of the listings as a result, which is time-consuming. 
      </p>

      <p>
      While Handshake collects information about the user’s job preferences elsewhere (like what industries they’re interested in and what kind of opportunities they’re looking for), this page doesn’t take any of that into account. The events are listed the same no matter if you’re a freshman looking for your first internship or a PhD student trying to learn about research opportunities. 

        </p>
        <p>
        Some events have a waitlist or are not available to the student because they don’t meet the qualifications. This information isn’t communicated to the user until after they click on an event. This error could be easily prevented by surfacing this information on the listings page.

        </p>
      <h2>With these insights, I identified 3 objectives for the redesign:</h2>
      <ol>
        <li>
        Speed up the process of finding relevant career events
        </li>
        <li>
        Make the resulting events easier to scan 
          </li>
          <li>
          Clearly convey which events are not available to the user
          </li>
        </ol>{/* <h5>BLUEPRINT</h5>
      <h3>Mapping the service</h3>
      <p>
        The app would be part of a larger service that involves the customer, the product, and the employees. We made a service blueprint to visualize the entire service’s process.
      </p>
      <img src={Blueprint} /> */}

      <div className="full-width section-container gray">
        <div className="project">
          <h5>IDEATION</h5>
          <h3>Exploring ideas on paper</h3>
          <p>
          With these objectives in mind, I sketched three directions for the redesigned page.
       </p>

       <img src={Var1} className="shadow"/>
          <p><b>Variation 1:</b> I added a filter for Industries so students like Regina can find events related to the field they want to go in. It also has a section for event recommendations at the top informed by the preferences Handshake has already gathered about them.
</p>
        <br />
          <img src={Var2} className="shadow"/>
          <p><b>Variation 2:</b> Adopting a pattern I found in Handshake’s Employers feature, this variation places more emphasis on filters to help users find what they’re looking for. It also displays cover images to help users scan through the events more easily. The vertical listing of events may also help scanning because the user’s eye can move down rather than in a zig-zag motion like variation 1.
</p>
<br />
        
          <img src={Var3} className="shadow"/>
          <p><b>Variation 3:</b> In the current Events page, it takes an extra click to view what events you’ve registered are. I made this variation to test user’s reactions to having this information more easily accessible.
</p>
        
          <h2>
          I then sought feedback on these directions from Regina and Andrew.
          </h2>
          <p>
          Andrew preferred Variation 1 because he <b>liked the recommendations section</b>, feeling it would surface more interesting events. He also liked that it was less cluttered than the other variations.
          </p>
          <p>
          Regina preferred Variation 2 because it would allow her to adjust the filters and <b>see the results update in real time.</b> She also remarked that text can be too much to parse sometimes, so the pictures make the experience more pleasant.
          </p>
          <p>
          I decided to move forward with Variation 2 while also incorporating the Recommendations section Andrew liked into it. I thought the slight increase clutter would be worth the benefits Regina mentioned of seeing the results of the filtering in real time. Also, the left filter sidebar is a common design pattern (found on Amazon and other parts of Handshake), and I believed users would be fine with it.
          </p>
        </div>
      </div>

      <h5>SOLUTION</h5>
      <h3>Find relevant events</h3>
      <div className='small-overflow'>
          <img src={Mock} className="shadow"/>
          <div className="caption">The redesign helps users find relevant career events more easily.</div>
        </div>

      <p>
      <h2>Measuring this against my objectives:</h2>
      </p>
      <ul>
        <li>
        This design speeds up the process of finding relevant career events by providing personalized recommendations and allowing for real-time filtering.
        </li>
        <li>
        It makes the resulting events easier to scan by displaying them vertically and incorporating cover photos and icons to make the results less text-dense.

          </li>
          <li>
          It clearly conveys when an event is not available to the user through a colored icon that grabs more attention than the lined icons and a message explaining why. 
          </li>
        </ul>
        {/* <p>
      Since I don’t have access to the exact components, I screenshotted components from the site and made adjustments to them, staying close to the design system as much as possible. 
      </p>
<p>If I had more time, I would seek feedback from Andrew and Regina again as well as other users. </p> */}

    


      <div className="full-width section-container gray">
        <div className="project">
          
          <h3>Thanks for reading!&nbsp;&nbsp;🎉</h3>
          <Link to="#top" className="btn-big">Back to top</Link>
        </div>
      </div>
    </div>)
}

export default Handshake;
