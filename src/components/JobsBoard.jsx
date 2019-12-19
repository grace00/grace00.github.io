import React from 'react';
import './styles.css';
import jobsite from './images/jobcomputer@2x.png'
import classifieds from './images/classifieds.jpg'
import oldjobsboard from './images/oldjobsboard.png'
import jobcompetitors from './images/jobcompetitors.png'
import jobflow from './images/jobflow.png'
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
      <img src={jobsite} />
      <h1 className="projTitle">Stanford Job Tree</h1>
      <p className="subtitle">Designing and developing a more personalized jobs search experience for Stanford students.</p>

      <div className="row">
        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">March 2019 - present</span>
        </div>
        <div className="column">
          <h4>Role</h4><span className="proj-detail">Solo designer, developer, and researcher</span>
        </div>
        <div className="column">
          <h4>Tools/Languages</h4><span className="proj-detail">React, Adobe XD, PHP, Balsamiq</span>
        </div>
      </div>
      <a href="https://thestanforddaily.github.io/jobs-board/#/" target="_blank" className="btn-big">View Demo</a>
      <p>Classified advertising used to be a way businesses hired employees; today, they often find potential hires through the internet. My school’s newspaper, The Stanford Daily, wanted to revamp the classifieds by creating a jobs site for students. This would connect students to career opportunities and attract funding for the paper.</p>
      {/*<p>Here’s a secret: there exists a classifieds section on the site, but The Daily has little control over what is advertised and almost no one knows about it. We needed an online destination that we could manage ourselves and that students would actually visit.</p>
      */}<p>I volunteered to bring this idea to life towards the end of my freshman year. I had never designed or developed a website before then.</p>
      <h2>The First Attempt</h2>
      <p>After taking on the project, my first instinct was to look at job sites for inspiration and then dive into coding. Whenever I wanted to change the color of a button or adjust spacing between elements, I went into my CSS file, fiddled with the code, and prayed to the heavens before refreshing the page.</p>
      <img src={oldjobsboard} className="shadow" />
      <div className="smallText">This took a massively inefficient amount of work</div>
      <h2>Survey Insights</h2>
      <p>After my WebMD internship, I realized I couldn’t just fulfill business needs and design on a whim; I needed to design a product that was empathetic towards students like myself. I renamed my React project “old-jobs-board” and created a new one. </p>
      <p>I then sent out a survey to glean understanding of what students find frustrating about the application process and what helped them find success. Six sophomores and three juniors at Stanford responded. I learned that...</p>
      <ol>
        <li>They <span className="stat">use job search sites</span>, with Handshake being the most-liked one</li>
        <li><span className="stat">Company industry, pay, and location</span> are the most important factors they consider when applying to a job</li>
        <li><span className="stat">Having connections with companies</span>  is important to them and their success in finding internships</li>
        <li>They want to know more about <span className="stat">other students’ experiences and advice</span>  when it comes to job-hunting
</li>
        <li>They dislike <span className="stat">getting rejected</span> and "having to dig through all the requirements” to see if they qualify for a position.
</li>
      </ol>

      <h2>Problem Definition</h2>
      <div className="outline"><p>Applying to jobs is a taxing process and largely dependent on having connections to the right people, which many students do not have.</p></div>

      <h2>Identifying Needs and Opportunities</h2>
      <p>Drawing on my research, I identified the major needs for job seekers and the Stanford Daily and how my product could address them. Since I knew I was going to be coding each solution myself, I had to brainstorm solutions that were feasible for me to implement in a reasonable amount of time as a first-time web developer. (For example, as much as I’d love to provide job recommendations for each user, I know my machine learning skills aren’t quite up to par.)
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

      <h2>Competitive Analysis</h2>
      <p>I analyzed popular job search sites for Stanford students to analyze what needs they met.
  </p>
      <img src={jobcompetitors} />
      <p>Many of the sites had robust filters and provided extra information such as company reviews to better inform prospective applicants. The majority, however, tended to provide somewhat impersonal experiences: click on a job, fill out a form, submit it into the void, and repeat. Handshake stood out by providing upbeat advice written by my school’s career center, information about school career events, and personalized advice about different careers. I found that none of the sites provided advice written by students themselves.</p>

      <h2>User Flow</h2>
      <p>Feeling a little overwhelmed by the task in front of me, I outlined the most important paths users could take through the website. This helped me get an idea of the web pages I’d need to create and develop.</p>
      <img src={jobflow} className="center-image" />

      <p>Using this diagram, I developed low-fidelity wireframes.</p>
      <div className="wireframe overflow">
        <div className="image-row">
          <img src={landingwireframe} />
          <img src={jobwireframe} />
          <img src={detailswireframe} />
          <img src={advicewireframe} />
        </div>
      </div>

      <h2>Style Decisions</h2>
      <div className="design">
        <img src={landing} />
        <p>For the final UI of the site, I aimed for it to have a youthful, welcoming appearance while feeling cleanly professional. I wanted the site to be associated with Stanford without feeling academic and instructional, so I chose red and green as the main colors but brightened them to provide a friendlier tone and avoid reminding students of their looming pile of p-sets. I didn’t want the red to instill a sense of alarm or danger, so I calmed it to be more pink-like.
</p>
        <p>I chose the font Source Sans Pro for the body to make the job descriptions and titles seem less intimidating and more inviting.</p>
      </div>

      <h2>Developed Features</h2>
      <p>After creating high-fidelity prototypes in Adobe XD, I developed the website using React, HTML/CSS, JavaScript, and PHP. Once I receive the official job opportunities from the business team (I'm currently using test jobs), the site will be ready to deploy for students to use.</p>
      <a href="https://thestanforddaily.github.io/jobs-board/#/" target="_blank" className="btn-big">View Demo</a>

      <h3>Jobs List</h3>
      <p>As the application process is time-consuming enough, I wanted to make it as fast as possible for the user to find the jobs they are interested in. Users can search, filter, and quickly scan each job for important details.
</p>
      <a href="https://thestanforddaily.github.io/jobs-board/#/jobs" target="_blank"><img src={jobslist} className="center-image shadow" /></a>
      <div className="smallText center-text">Click me!</div>
      <h3>Jobs Details</h3>
      <p>Students can learn more about each job by viewing the job description, company website, application instructions, and more.</p>
      <a href="https://jobs.stanforddaily.com/#/jobs/683ae113-dc17-4232-b586-a16035f8e45b" target="_blank"><img src={jobdetails} className="center-image shadow" /></a>
      <h3>Advice</h3>
      <p>When taking a break from job-seeking, users can read articles related to jobs and internships to get the honest perspectives of other students.
</p>
      <a href="https://thestanforddaily.github.io/jobs-board/#/advice" target="_blank"><img src={advice} className="center-image shadow" /></a>
      <h3>Post Job</h3>
      <p>Recruiters and other company representatives can quickly fill out the details about their job opportunity and payment information. The email field is mandatory to allow students to connect with a real person right away and form relationships with companies.
</p>
      <a href="https://thestanforddaily.github.io/jobs-board/#/post" target="_blank"><img src={postjob} className="center-image shadow reduce-size" /></a>
      <h3>Behind-the-Scenes Development Details:</h3>
      <ul>
        <li>I'm currently using test jobs, industries, locations, etc. to make sure the filters work.</li>
        <li>I made the site responsive -- try it on your phone!</li>
        <li>To get the Daily articles, I identified posts with tags such as “career,” “job,” “internship,” etc. </li>
      </ul>

      <h2>The Future</h2>
      <p>The business team is handling advertising, finding companies, etc., and I’ve been working with them to ensure the product aligns with the Stanford Daily business. I'm waiting to get the actual job posts and for authentication to be implemented so only Stanford students can access them.
</p>

      <h2>Reflection</h2>
      <p>Six months ago, I didn’t know how websites worked, I hadn’t heard of visual hierarchy/personas/Balsamiq, and most shockingly of all, I didn’t know the difference between “hover” and “focus.” Designing and developing my first website has been an incredible learning experience, opening me up to the world of design and the technology that brings it to life. I love learning, and because of this project, I learned how to empathize with users, develop wireframes and user flows, and integrate myself with the design community. I’ve pushed my limits countless times working on this, and I’ve discovered more that I want to surpass: I want to learn how to incorporate animation and storytelling into interface designs, create push notifications and email alerts from web content, and code recommendation algorithms that I can one day implement. That’s where I’m headed next.</p>
    </div >
  );
}

export default JobsBoard;
