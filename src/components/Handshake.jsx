import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.css';
import Preview from './images/handshake-project-preview.png'
import Mock from './images/handshake-mock.png'
import Before from './images/handshake-before.png'
import Var1 from './images/var1.JPG'
import Var2 from './images/var2.JPG'
import Var3 from './images/var3.JPG'
import Users from './images/handshake-users.png'
import BeforeAfter from './images/handshake-before-after.png'


function Handshake() {
  return (
    <div className="project">
      <div className="overlay yellow full-width no-border-radius cover">
        <h1 className="project-title handshake-title">
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
          <div className='large-text'>A redesigned Events page that is easier to scan and surfaces recommended events based on the student’s interests.
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
          I <b>conducted interviews with 3 students</b> — Andrew, Regina, and Emma — to understand their Handshake experiences and uncover problems they’ve faced on the platform. 
      </p>

      <div className="small-overflow">
          <img src={Users} />

        </div>
          <p>
          Some of these issues rely on the actions of other users (i.e. companies responding back to job applications), but I wanted to focus on improving the experience of students. 
      </p>
      <p>
      I decided to move forward with <b>redesigning the Events page to help Andrew and Regina find career events that would be helpful to them.</b> </p>
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
      Regina told me that when she comes to this page, she’s specifically <b>looking for tech-related events</b>, but there’s <b>no way to filter down to them</b>, and the filters that are provided aren’t helpful. She has to scroll through the all of the listings as a result, which is time-consuming. 
      </p>

      <p>
      While <b>Handshake collects information about the user’s job preferences elsewhere</b> (like what industries they’re interested in and what kind of opportunities they’re looking for), <b>this page doesn’t take any of that into account</b>. The <b>events are the same</b> no matter if you’re a freshman looking for your first internship or a PhD student trying to learn about research opportunities. 

        </p>
        <p>
        Some <b>events have a waitlist or are not available</b> to the student because they don’t meet the qualifications. This <b>information isn’t communicated to the user</b> until after they click on an event. This error could be easily prevented by surfacing this information on the listings page.

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
       <h4>Variation 1</h4>
          <p>I explored adding a <b>filter for Industries</b> so students like Regina can find events related to the field they want to go in. It also has a <b>section for event recommendations</b> at the top informed by the preferences Handshake has already gathered about them.
</p>
<img src={Var1} className="shadow"/>
        <br />
        <h4>Variation 2</h4>
          <p>Adopting a pattern I found in Handshake’s Employers feature, this variation places more <b>emphasis on filters to help users find what they’re looking for.</b> It also <b>surfaces the preview images to help users scan</b> through the events more easily. The <b>vertical listing of events may also help scanning</b> because the user’s eye can move down to read the titles rather than in a zig-zag motion like variation 1.
</p>
<img src={Var2} className="shadow"/>
<br />
<h4>Variation 3</h4>
          <p>In the current Events page, it takes an extra click to view what events you’ve registered are. I made this variation to <b>test user’s reactions to having their registered events more easily accessible.</b>
</p>
<img src={Var3} className="shadow"/>
        
          <h2>
          I then sought feedback on these directions from Regina and Andrew.
          </h2>
          <p>
          Andrew <b>preferred Variation 1</b> because he <b>liked the recommendations section</b>, feeling it would surface more interesting events. He also liked that it was less cluttered than the other variations.
          </p>
          <p>
          Regina <b>preferred Variation 2</b> because it would allow her to adjust the filters and <b>see the results update in real time.</b> She also remarked that text can be too much to parse sometimes, so the pictures make the experience more pleasant.
          </p>
          <p>
          I decided to <b>move forward with Variation 2 while also incorporating the Recommendations section Andrew liked</b> into it. I thought the slight increase clutter would be worth the benefits Regina mentioned of seeing the results of the filtering in real time. Also, the left filter sidebar is a common design pattern (found on Amazon and other parts of Handshake), so I made the assumption that users would be fine with it.
          </p>
        </div>
      </div>

      <h5>SOLUTION</h5>
      <h3>Find relevant events</h3>
      <p>In the redesign, students can <b>find relevant career events</b> more easily through <b>improved filters, personalized recommendations,</b> and <b>vertically-stacked cards.</b></p>
      <div className='medium-overflow'>
          <img src={BeforeAfter} />
          <div className="caption">Before and after comparison of the Handshake Events feature</div>
        </div>
        <p>
      Since I don’t have access to the exact components, I screenshotted components from the site and made adjustments to them, staying close to the design system as much as possible. 
      </p>
      <p>
      <h2>How does this measure against my objectives?</h2>
      </p>
      <ol>
        <li>
        This design <b>speeds up the process of finding relevant career event</b> by providing personalized recommendations and allowing for real-time filtering.
        </li>
        <li>
        It <b>makes the resulting events easier to scan</b> by displaying them vertically and incorporating cover photos and icons to make the results less text-dense.
          </li>
          <li>
          It <b>clearly conveys when an event is not available to the user</b> through a colored icon that grabs more attention than the outline icons and a message explaining why. 
          </li>
        </ol>
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
