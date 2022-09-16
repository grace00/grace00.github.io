{/*import React from 'react';
import './styles.css';
import jobsite from './images/jobcomputer@2x.png'
import classifieds from './images/classifieds.jpg'
import oldjobsboard from './images/oldjobsboard.png'
import jobcompetitors from './images/jobcompetitors.png'
import jobflow from './images/jobflow.png'
import jobsitemap from './images/jobs-site-map.jpg'
import detailswireframe from './images/detailswireframe.png'
import jobwireframe from './images/jobwireframe.png'
import landingwireframe from './images/landingwireframe.png'
import advicewireframe from './images/advicewireframe.png'

import landing from './images/landing.png'
import jobslist from './images/jobslist.png'
import jobdetails from './images/jobdetails.png'
import postjob from './images/postjob.png'
import advice from './images/advice.png'

function JobsBoard() {
  return (
    <div className="project">
      <div className="overlay purple full-width">
      <h1 className="project-title">Stanford Job Tree</h1>
      <p className="subtitle">A jobs site for Stanford students.</p>
        <img src={jobsite} />
      </div>

      <div className="row">
        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">March 2019 - November 2019</span>
          <h4>Role</h4><span className="proj-detail">Designer and developer</span>
        </div>
        <div className="column">
          <h4>Teammates</h4><span className="proj-detail">None</span>
          <h4>Tools/Languages</h4><span className="proj-detail">React, Adobe XD, PHP, Balsamiq</span>
        </div>
      </div>
      <a href="https://thestanforddaily.github.io/jobs-board/#/" target="_blank" className="btn-big">View Site</a>

      <h2>Problem</h2>
      <p>When I applied internships last year, I felt so alone. As I copy-pasted my resume into little boxes again and again, just hoping for a whiff of acknowledgement, I kept hearing about how others had landed amazing opportunities.
</p>
      <p><b>Applying to jobs and internships can be an unfamiliar, lonely, and taxing process for students</b>. It’s difficult to even find positions that match your interests, and after submitting your application you might never hear back.
</p>

      <h2>Solution</h2>
      <p>I designed and developed Job Tree, a jobs search site for <i>The Stanford Daily</i> that  <b>helps make applying to jobs a friendlier and less isolating process</b>. Job Tree connects talented students to companies they might not otherwise know about, and it reassures them that they’re not alone in their struggles.
</p>

      <h2>The First Try</h2>
      <p>I volunteered to create the site towards the end of my freshman year. I’d never designed or developed a website before, so my first instinct was to look at job sites for inspiration and then dive into coding. Whenever I wanted to change the color of a button or adjust spacing between elements, I went into my CSS file, fiddled with the code, and prayed to the heavens before refreshing the page.
</p>
      <img src={oldjobsboard} className="shadow" />
      <div className="small-text">This took an embarrassing amount of time!</div>
      <h2>The Second Try: Survey Insights</h2>
      <p>I took a break from the project to intern at WebMD. When I came back, I realized I needed to approach the website differently in order to create one that was empathetic towards students like myself.
</p>
      <p>I renamed my React project folder “old-jobs-board” and created a new one. </p>
      <p>Then, I sent out a survey to Stanford students. I hoped to learn what students find frustrating about the application process, what they look for in a job, what helps them land opportunities, etc. I learned that...
</p>
      <div class="box-container">
        <div class="box"><div><b>Company industry, pay, and location</b> are the most important factors they consider when applying to a job
</div></div>
        <div class="box"><div><b>Having connections with companies</b>  is important to them and their success in finding internships
</div></div>
        <div class="box"><div>They want to know more about <b>other students’ experiences and advice</b>  when it comes to job-hunting
</div></div>
        <div class="box"><div>They <b>use job search sites</b>, with Handshake being the most-liked one
</div></div>
        <div class="box"><div>They dislike <b>getting rejected</b> and "having to dig through all the requirements” to see if they qualify for a position.
</div></div>
      </div>

      <h2>Competitive Analysis</h2>
      <p>I looked at popular job search sites to study how they help students find jobs and why the problem hadn’t been solved yet.
  </p>
      <img src={jobcompetitors} />
      <p>Many sites had robust filters and provided special information such as company reviews to better inform prospective applicants. I found that the majority, however, tended to shuffle the hopefuls through an impersonal application process: click on a job, fill out a form, submit it into the void, and repeat. Only the Stanford Alumni Job & Internship Board provided an easy way to get in touch with a real person at the company. From the survey, I knew that having a connection like that is a tremendous advantage for students.</p>
<p>I observed that most of the sites didn’t attempt to help job seekers deal with feelings of rejection. Handshake was the only exception, providing kind advice written by my school’s career center. None of the sites provided advice written by students themselves.
</p>
<p>Through this analysis, I learned that the market overall <b>does not meet students’ desires to form relationships with employees at companies, deal with negative feelings in the job application process, and learn from other students</b>.
</p>

      <h2>Identifying Needs</h2>
      <p>Using my research, I identified the biggest needs of Stanford job seekers and <i>The Stanford Daily</i>. I also brainstormed ideas of how my website could address them. Since I was going to be coding each solution myself, they had to be feasible for me to implement in a reasonable amount of time as a first-time web developer. (For instance, as much as I’d love to provide personalized job recommendations for each user, I know my machine learning skills aren’t quite up to par.)
</p>
      <h3>Job Seeker</h3>
      <table>
        <tr>
          <th>Needs</th>
          <th>Design Feature</th>
        </tr>
        <tr>
          <td width="37%">Find open positions that suit their interests and qualifications
</td>
          <td>Allow students to search and filter through jobs
            <div>Provide a list of jobs, each with details and instructions to apply</div>
          </td>
        </tr>
        <tr>
          <td>Connect with recruiters and employees at companies</td>
          <td>Provide a prominent email address to contact for every posting
</td>
        </tr>
        <tr>
          <td>Deal with rejection and loneliness throughout the process</td>
          <td>Show articles written by other students about their experiences and advice</td>
        </tr>
      </table>

      <h3>Stanford Daily</h3>
      <table>
        <tr>
          <th>Needs</th>
          <th>Design Feature</th>
        </tr>
        <tr>
          <td width="40%">Earn extra money
</td>
          <td>Implement payment processing</td>
        </tr>
        <tr>
          <td>Attract views on the Stanford Daily website</td>
          <td>Include links to articles in the Daily</td>
        </tr>
      </table>

      <h2>User Flow</h2>
      <p>Feeling pretty overwhelmed by the task in front of me, I outlined the most important paths users could take through the website. This helped me understand what web pages I’d need to create to ensure users could achieve their goals. 
</p>
      <img src={jobflow} className="center-image" />
      <img src={jobsitemap} className="center-image" />

      <p>Using these diagrams, I developed low-fidelity wireframes.</p>
      <div className="large-overflow">
        <div className="image-row">
          <img src={landingwireframe} />
          <img src={jobwireframe} />
          <img src={detailswireframe} />
          <img src={advicewireframe} />
        </div>
      </div>

      <h2>Style Decisions</h2>
      <div className="image-left">
        <img src={landing} />
        <p>I aimed for Job Tree to have a <b>youthful, welcoming appearance</b> while feeling cleanly professional. I wanted the site to be associated with Stanford without coming across as academic and instructional, so I chose red and green as the main colors but brightened them to provide a friendlier tone and avoid reminding students of their looming pile of psets. I didn’t want the red to instill a sense of alarm or danger, so I calmed it to be more pink-like.</p>
        <p>I chose the font Source Sans Pro for the body to make the job descriptions and titles seem less intimidating and more inviting.</p>
      </div>

      <h2>Developed Features</h2>
      <p>After creating high-fidelity prototypes in Adobe XD, I developed Job Tree using React, HTML/CSS, JavaScript, and PHP.</p>
      <a href="https://thestanforddaily.github.io/jobs-board/#/" target="_blank" className="btn-big">View Site</a>

      <h3>Jobs List</h3>
      <p>As the application process is time-consuming enough, I wanted to make it as fast as possible for the user to find the jobs they are interested in. Users can search, filter, and quickly scan each job for important details.
</p>
      <a href="https://thestanforddaily.github.io/jobs-board/#/jobs" target="_blank"><img src={jobslist} className="center-image shadow" /></a>
      <div className="small-text center-text">Click me!</div>
      <h3>Job Details</h3>
      <p>Students can learn more about each job by viewing the job description, qualifications, company website, and more. Every posting will have a company email for students to contact.
</p>
      <a href="https://jobs.stanforddaily.com/#/jobs/b0d46b76-a0f8-48c1-bce4-b24190e88d58" target="_blank"><img src={jobdetails} className="center-image shadow" /></a>
      <h3>Advice</h3>
      <p>Students can read articles written by fellow students about jobs and internships. Topics include feeling pressured to have a productive summer, choosing careers, and feeling discouraged about finding opportunities.
</p>
      <a href="https://thestanforddaily.github.io/jobs-board/#/advice" target="_blank"><img src={advice} className="center-image shadow" /></a>
      <h3>Post Job</h3>
      <p>Recruiters and other company representatives can quickly fill out the details about their job opportunity and payment information. It’s mandatory for the application instructions to include an email, so students can connect with a real person right away and form relationships with companies.</p>
      <a href="https://thestanforddaily.github.io/jobs-board/#/post" target="_blank"><img src={postjob} className="center-image shadow reduce-size" /></a>
      <h3>Behind-the-Scenes Development Details:</h3>
      <ul>
        <li>I used test jobs, industries, locations, etc. to make sure the filters work, so some of them may not make complete sense.</li>
        <li>I made the site responsive — try it on your phone!</li>
        <li>The code selects the Daily articles by identifying posts with tags such as “career,” “job,” “internship,” etc.</li>
      </ul>

      <h2>The Future</h2>
      <p>I’m finished with the main development of Job Tree. The business team will handle advertising, finding job opportunities, and more, and I’ve been working with them to ensure the product aligns with the Stanford Daily business.
</p>

      <h2>Reflection</h2>
      <p>Before this project, I didn’t know how websites were made, and I hadn’t heard of visual hierarchy/React/Balsamiq. Designing and developing my first website has been an incredible learning experience, opening me up to the world of design and the technology that brings it to life. I learned how to empathize with users, develop wireframes and information architecture, use Git, and integrate myself with the design community.</p>
    <p>If I returned to this project in the future, I would want to test the website on multiple users and iterate on the design using the results. As I grow my technical skills, I would love to be able to incorporate animation and storytelling into interface designs, create push notifications and email alerts from web content, and increase personalization by coding recommendation algorithms.
</p>
    </div>
  );
}

export default JobsBoard;*/}
