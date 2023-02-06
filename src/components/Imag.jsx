import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faLaptopCode, faUser, faEdit, faUsers, faSync, faFileAlt, faAward, faCode } from "@fortawesome/free-solid-svg-icons";

import Preview from './images/imag-project-preview.png'
import Interviews from './images/imag-interviews.jpg';
import SneakPeak from './images/imag-sneak-peak.png';
import Wikipedia from './images/wikipedia.png';
import SimTK from './images/simtk.png';
import SGCI from './images/sgci.png';
import Fandom from './images/fandom.png';
import NIBIB from './images/NIBIB.png';

import FindContent from './images/imag-find-content.png';
import AddPages from './images/imag-add-pages.png';
import SignUp from './images/imag-sign-up.png';
import MTD from './images/imag-mtd.png';
import Persona from './images/persona.png';
import Sketches from './images/imag-sketches.png';
import Prototypes from './images/imag-prototypes.png';
import Wireframes from './images/imag-wireframes.png';
import Test1 from './images/imag-test1.png';
import Test2 from './images/imag-test2.png';
import Test3 from './images/imag-test3.png';
import Airtable from './images/imag-airtable.png';
import Homepage from './images/imag-homepage.png';
import CreateAccount from './images/imag-create-account.png';
import Models from './images/imag-models.png';
import Model from './images/imag-model.png';
import Profile from './images/imag-profile.png';
import WorkingGroups from './images/imag-working-groups.png';
import WGDetails from './images/imag-wg-details.png';
import testing from './images/imag-test.png';


function Journie() {
  return (
    <div className="project">
      {/* <ul className="table-of-contents">
      <li><Link to="#imag-overview">Overview</Link></li>
      <li><Link to="#final-design">Research</Link></li>
      <li><Link to="#final-design">Design</Link></li>
      <li><Link to="#final-design">Results</Link></li>
</ul> */}

      <div className="overlay imag full-width no-border-radius cover">
        <h1 className="project-title">
          IMAG Redesign
        </h1>
        <p className="subtitle">Redesigning a government site for biomedical researchers to share their work.</p>
        <img src={Preview} />
      </div>

      <div className="row details-container">
        <h4>Context</h4>
        <span className="proj-detail">During my UX design fellowship at the National Institutes of Health (NIH), I was tasked with improving the user experience of the IMAG wiki site, the central place for sharing research and resources related to multiscale modeling.
        </span>

        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">10-week internship</span>
          <h4>Role</h4><span className="proj-detail">UX/UI designer, researcher</span>
        </div>
        <div className="column">
          <h4>Teammates</h4><span className="proj-detail">IMAG founder + 1 engineer
          </span>
          <h4>Tools</h4><span className="proj-detail">Pen & paper, Figma, Miro, Microsoft Teams</span>
        </div>
      </div>

      <div className="full-width imag section-container gray">
        <div className="project">
          <h5 id="#imag-overview">OVERVIEW</h5>
          <h3>Background</h3>
          {/* <blockquote>
            <div className="quote">
              There’s no point in doing research just for myself.
          </div>
            <div className="quote-citation">– User 1</div>
          </blockquote> */}
          <p>
            The IMAG website is a central place for the multiscale modeling community to share their research with colleagues, learn about upcoming meetings, and network.
          </p>
          <p>
            However, the IMAG team struggled to get researchers to use and contribute to the site. I was brought on as UX design fellow to improve the UX of the site and increase contributions. Working with the founder of IMAG and an engineer, I redesigned the website, making it easier and smoother for biomedical researchers to post their work and stay up-to-date about other research.
          </p>
          <p>
            In an end-of-project survey conducted with 5 researchers who use the site,
          </p>

          <div className="three-col-container">
            <div className="col">
              <div className="large-stat">5/5</div>
              <div className="stat-text">of users <b>preferred the new design</b></div>
            </div>
            <div className="col">
              <div className="large-stat">5/5</div>
              <div className="stat-text">felt the new design was <b>easy to use</b></div>
            </div>
            <div className="col">
              <div className="large-stat">5/5</div>
              <div className="stat-text">felt <b>very confident</b> using the new design</div>
            </div>
          </div>
          <div className="medium-overflow">
            <img src={SneakPeak} />
          </div>
          <div className="caption">Sneak peak of new design</div>
          <div className="center-text">
            <Link to="#imag-redesign" className="btn-big">Jump to full design</Link>
          </div>

          {/* <h3>Challenges</h3>
          <p>This being my first government project, I faced a few challenges:
      </p>
          <div className="icon-list">
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
                <h1>Lone designer</h1>
                <p>
                  I was the only person with design experience on my team, so I leaned on my mentors and books like <i>The User Experience Team of One</i> for guidance.
          </p>
              </div>
            </div>
          </div>
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
            <span class="icon"><FontAwesomeIcon icon={faAward} /></span>
            <div>
              <h1>Understanding government goals</h1>
              <p>
                Getting significantly more users wasn't a priority for my team because it meant more work for them. Helping scientists provide and access useful information was most important.
</p>
            </div>
          </div>*/}
        </div>
      </div>

      <h5>RESEARCH</h5>
      {/* <h3>Site audit</h3>
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
      </div> */}

      <br />
      <h3>User testing the initial site</h3>
      <p>
        To identify pain points and usability problems, <b>I tested the site with 5 users</b> and interviewed them about their experiences.
      </p>
      <p>
        Some of the <b>biggest issues I identified</b> with the current site were:
      </p>

      <div className="small-overflow">
        <div className="usability-box">
          <img src={FindContent} className="shadow" />
          <div>
            <h1>Helpful content is hidden</h1>
            <p>Users find the site’s resources helpful, but they struggled to find them because they were buried within the navigation. They also struggled to navigate to resources they did know existed.
            </p>
          </div>
        </div>
        <div className="usability-box">
          <img src={SignUp} className="shadow" />
          <div>
            <h1>Complex sign-up process prevented people from joining</h1>
            <p>Users were frustrated by how complex the Create Account form is. It asks for difficult-to-find information and doesn’t prevent common errors. This stopped people from joining the site.
            </p>
          </div>
        </div>
        <div className="usability-box">
          <img src={AddPages} className="shadow" />
          <div>
            <h1>Confusing how to contribute to the site</h1>
            <p>Creating a page on the wiki is an unintuitive process. Researchers with PhDs in Computer Science had to read instructions or ask for support in order to contribute to the wiki. They were also afraid of messing things up on the site, further discouraging them from posting.
            </p>
          </div>
        </div>
        <div className="usability-box">
          <img src={MTD} className="shadow" />
          <div>
            <h1>Model repository wasn't useful
            </h1>
            <p>
              Researchers felt Models, Tools, & Databases page wasn’t organized in a useful way. They struggled to find models relevant to their work and researchers to potentially collaborate with.
            </p>
          </div>
        </div>
        <p>
          I sorted the feedback into categories and <b>worked with the founder to prioritize</b> which areas of the site to redesign.
        </p>
        <img src={Interviews} className="shadow" />
        <div className="caption">Affinity diagram</div>
      </div>

      <h3>User persona</h3>
      <p>
      I created a persona summarizing my user research to convey my findings to my team. It also helped me keep the users’ goals and frustrations at the forefront as I made design decisions.
</p>
      <img src={Persona} className="shadow" />
      <h3>Comparative analysis</h3>
      <p>
      I analyzed 5 comparable wikis, NIH sites, and model repositories to learn what user needs they met that IMAG could improve in. 
      </p>
      <div className="image-row-small">
        <img className="competitor" src={Wikipedia} />
        <img className="competitor" src={SimTK} />
        <img className="competitor" src={NIBIB} />
        <img className="competitor" src={Fandom} />
        <img className="competitor" src={SGCI} />
      </div>
      <p>Some capabilities other sites had that IMAG didn’t were:
      </p>
      <ul>
        <li>Section for users to see their personal edit history
</li>
        <li>Made the option to edit clearly visible on every editable page
</li>
        <li>Allowed filtering of models based on research topic</li>
      </ul>
      <br />
      <div className="center-text imag">
        <a href="https://docs.google.com/document/d/13U8EeRqz1y8Ofp7nontkKwa4Oe-Xehyo0siYWkrMNLM/edit?usp=sharing" target="_blank" className="btn-big">View Full Analysis</a>
      </div>

      <div className="full-width section-container gray">
        <div className="project">
          <h5>DESIGN</h5>
          <h3>Ideation and sketching</h3>
          <p>
          I brainstormed solutions to the issues I discovered from my research then sketched the most promising ideas. <b>I reviewed my sketches with the founder to get her feedback</b> on these early directions and <b>the engineer to check if they were feasible to develop</b>.</p>
          <div className="medium-overflow">
            <img src={Sketches} />
          </div>
          <h3>Paper prototyping</h3>
          <p>The site’s unique value is that it brings multiscale modelers together, so the model repository where they can share their models was a critical area for improvement. I created <b>3 divergent paper prototypes</b> to solicit early user feedback.</p>
          <p>I <b>tested them with 3 users</b>. All of them felt that the first prototype was easy to use, familiar, and useful, so I moved forward with that direction.
          </p>
          <div className="medium-overflow">
            <img src={Prototypes} />
          </div>
          <h3>Wireframing the site</h3>
          <p>
            With a clearer idea of which ideas were feasible and promising, I created low-fidelity wireframes to test the proposed solutions.
          </p>
          <div className="medium-overflow">
            <img src={Wireframes} />
          </div>

          <h3>Testing and iteration</h3>
          <p>
          <b>I conducted usability testing with 8 users</b>, mostly college professors and research trainees, <b>to validate solutions and identify issues</b> with the prototype.
          </p>
          <p>I prepared personalized interview guides for each participant based on their IMAG and site involvement and had them walk through tasks while thinking out loud.
          </p>
          <div className="medium-overflow three-item-row">
            <img src={Test1} className="shadow" />
            <img src={Test2} className="shadow" />
            <img src={Test3} className="shadow" />
          </div>
          <p>With their feedback, I <b>continuously iterated the design</b>, including the navigation, form fields, and wording of the help text to address usability problems.
          </p>

          {/* <h3>Feedback</h3> */}
          <p>To prevent any problems from being missed, I <b>tracked all of the prototype feedback</b> and issues in a spreadsheet. Here's a snippet of the full sheet:</p>
          <img src={Airtable} className="shadow" />
        </div>
      </div>

      <h5 id="imag-redesign">THE NEW DESIGN</h5>
      <h3>Homepage</h3>
      <p>The homepage now <b>directs researchers to the information most useful to them</b>. Researchers can find funding opportunities, models, upcoming meetings, and support guides that they couldn’t before.
      </p>
      <div className="large-overflow">
        <img src={Homepage} />
      </div>
      <blockquote>
        <div className="quote">
          Funding opportunities and upcoming meetings are good gateways.
        </div>
        <div className="quote-citation">– User 10</div>
      </blockquote>

      <h3>Create Account form</h3>
      <p>Unnecessary form questions were removed to <b>speed up the process of creating an account and reduce the barrier to entry</b>. A welcome message appears for new users, communicating their permissions so they feel more encouraged to post on the site.
</p>
      <div className="large-overflow">
        <img src={CreateAccount} />
      </div>

      <h3>User profile</h3>
      <p>Buttons were added to the user profile <b>to make it as easy as possible to post content to the site</b>, allowing users to publish common post types immediately after logging in. A section for past contributions was also added, so users can access their old posts and revise them. 
</p>
      <div className="large-overflow">
        <img src={Profile} />
      </div>

      <h3>Models, Tools, and Databases page</h3>
      <p>The model repository has filters, images, previews, and direct links, so <b>users can sort through the models and find work relevant to their own research</b>. The process of adding a model was made more intuitive by providing an “Add” button on the page.
</p>
      <div className="medium-overflow">
        <img src={Models} />
      </div>
      <blockquote>
        <div className="quote">
          I like this! It's better than the current page.
        </div>
        <div className="quote-citation">– User 6</div>
      </blockquote>
      <blockquote>
        <div className="quote">
          The button to add a model is much easier than the current way.
        </div>
        <div className="quote-citation">– User 13</div>
      </blockquote>

      <h3>Model details page</h3>
      <p>The details about each model were restructured to <b>prioritize what users care about</b>.
</p>
      <div className="large-overflow">
        <img src={Model} />
      </div>
      <blockquote>
        <div className="quote">
          I like the metadata on the side and that you provide a direct link to the model.
        </div>
        <div className="quote-citation">– User 7</div>
      </blockquote>

      <h3>Working Groups landing page</h3>
      <p>Working Groups are mini-communities that focus on a specific area of multiscale modeling, and each has a page where they record their activities. Despite visiting the Working Groups page multiple times before, researchers would still forget where it is in the navigation menu. I changed the menu to <b>make its location easier to find</b>. </p>
      <p>The landing page <b>reduces the amount of clicks</b> it takes to get to a group’s page from 4 to 2.</p>
      <div className="large-overflow">
        <img src={WorkingGroups} />
      </div>
      <blockquote>
        <div className="quote">
          I like the new 'working groups' tab. This was always difficult to find and not intuitive.
        </div>
        <div className="quote-citation">– User</div>
      </blockquote>

      <h3>Working Group details page</h3>
      <p>A Latest Activities section and table of contents were added to <b>help users quickly navigate to the information they're looking for</b>. The process of joining a group is also automated to save the group leaders’ time.</p>
      <div className="large-overflow">
        <img src={WGDetails} />
      </div>

      <div className="full-width section-container gray">
        <div className="project">
          <h5>RESULTS</h5>
          <h3>User evaluation</h3>
          <p>I wanted to further evaluate the new designs' overall usability.
          </p>
          <p>I adapted the <a href="https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html" target="_blank"><b>System Usability Scale (SUS)</b></a> and had <b>5 site users anonymously score these statements</b> from it on a scale of strongly disagree to strongly agree:
          </p>
          <div className="emphasized-text">
            “I thought the new design was easy to use.”
            <div className="medium-stat">5/5 agreed</div>
          </div>
          <div className="emphasized-text">
            “I would imagine that most people would learn to use this new design very quickly.”
            <div className="medium-stat">5/5 strongly agreed</div>
          </div>
          <div className="emphasized-text">
            “I felt very confident using the new design”
            <div className="medium-stat">5/5 strongly agreed</div>
          </div>

          {/* <div className="three-col-container">
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
          </div> */}
          <p>Additional comments:</p>
          <blockquote>
            <div className="quote">
              I am <b>very impressed</b> with this project. It represents a huge effort that is very targeted yet thorough. Seeing the side by side comparisons of the layouts makes the differences very clear.
            </div>
            <div className="quote-citation">– User</div>
          </blockquote>
          <blockquote>
            <div className="quote">
              The new design is good—it looks <b>less cluttered</b> and is <b>easier to use.</b>
            </div>
            <div className="quote-citation">– User</div>
          </blockquote>
          <blockquote>
            <div className="quote">
              I liked that the layout <b>fits my natural instincts</b> to navigate and find relevant pages and information.
            </div>
            <div className="quote-citation">– User</div>
          </blockquote>

          <h3>Future opportunities</h3>
          <p>Though the new design received very positive feedback, there were still some problems I uncovered in user research that I didn’t have time to improve. Here are areas that could be worked on in the future:
          </p>
          <ol>
            <li>
              <h1>Revising the Resource Credibility Assessment form
              </h1>
              <p>Users were very frustrated that this complex form takes half a work day to complete and has unclear benefits. I negotiated to make this form optional but recommended to my team that they make it easier to fill out in the future.
              </p>
            </li>
            <li>
              <h1>Expanding target audience to the public</h1>
              <p>Many researchers work on science that could benefit the public. A next step for the IMAG site could be to make the site’s jargon-heavy resources understandable and helpful to non-scientists.
              </p>
            </li>
            <li>
              <h1>Reaching users through social media</h1>
              <p>Users told me that they wished the site has a Twitter, LinkedIn, or Slack, so they can stay updated on activities passively rather than actively have to check the IMAG site. Incorporating a social media strategy would get information to these researchers faster and be more efficient for their workflow.
              </p>
            </li>
          </ol>

          <h3>Things I learned</h3>
          <div className="icon-list">
            <div className="icon-box">
              <div class="icon"><FontAwesomeIcon icon={faSync} /></div>
              <div>
                <h1>Aligning with stakeholders
                </h1>
                <p>
                  This was the first time I designed outside of a school project, so I learned how to align with stakeholders. I worked on gaining their trust through interviewing them about their goals and needs at the beginning of the project, creating a project brief that I shared with them, and regularly providing updates.
                </p>
              </div>
            </div>
            <div className="icon-box">
              <div class="icon"><FontAwesomeIcon icon={faUsers} /></div>
              <div>
                <h1>Advocating for users
                </h1>
                <p>
                  I was the first person to ever gather feedback from users about their experiences with the site, since the team had never had a UX designer before. I learned how to defend my design decisions from a user-centered perspective and push for changes that would make their experience better.
                </p>
              </div>
            </div>
            {/* <div className="icon-box">
              <span class="icon"><FontAwesomeIcon icon={faUser} /></span>
              <div>
                <h1>Balance stakeholder and user needs</h1>
                <p>
                  I needed to work on balancing stakeholders’ and users’ needs a lot with this project. For instance, researchers vented frustration to me about having to fill out a certain long, complicated form, but stakeholders in IMAG felt it was important they complete it if they could. As a result, I negotiated to make the form optional but incorporated design choices to strongly encourage them to fill it out.
            </p>
              </div>
            </div> */}
          </div>
          <h3>Thanks for reading!&nbsp;&nbsp;🎉</h3>
          <div className="center-text">
            <Link to="#top" className="btn-big">Back to top</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journie;


{/* <ol>
        <li>
          <h1>Hard to find helpful content</h1>
          <p>Researchers missed useful resources like models because they were hidden. Plus, they struggled to navigate to resources they <i>did</i> know existed.
</p>
        </li>
        <li>
          <h1>Confusing way of creating pages</h1>
          <p>Researchers with PhDs in Computer Science still had to read instructions or email for support to figure out how to create a page on the wiki. They would also only post when instructed to, not knowing they were allowed to contribute to the wiki as they please.
              </p>
        </li>
        <li>
          <h1>Complex sign-up process</h1>
          <p>Researchers were annoyed by how complex the Create Account form is. It asks for difficult-to-find information and doesn’t prevent common errors.
</p>
        </li>
        <li>
          <h1>Unuseful model repository
</h1>
          <p>
            Researchers felt Models, Tools, & Databases page wasn’t organized in a useful way, so they had no reason to use it. They struggled to find models relevant to their work.
              </p>
        </li>
      </ol> */}