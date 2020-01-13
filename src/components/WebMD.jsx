import React from 'react';
import './styles.css';
import surveystats from './images/surveygraphic@2x.png'
import laptopmockup from './images/laptopmockup@2x.png'
import genzmock from './images/genz-mock@2x.png'

function WebMD() {
    return (
        <div className="project">
            <div className="overlay yellow full-width">
            <img src={laptopmockup} />
            </div>
            <h1 className="projTitle">WebMD: A Gen Z-entric Site</h1>
            <p className="subtitle">When it comes to health online, what is Gen Z interested in? WebMD interns find out.</p>

            <div className="row">
                <div className="column-left">
                    <h4>Timeline</h4><span className="proj-detail">June 2019 - August 2019 (2 months)</span>
                </div>
                <div className="column">
                    <h4>Teammates</h4><span className="proj-detail">3 interns</span>
                </div>
                <div className="column">
                    <h4>Role</h4><span className="proj-detail">Content strategy, SEO, design, research</span>
                </div>
            </div>
            <h2>Challenge</h2>
            <p>Competitors that target younger audiences have recently begun to put a strain on WebMD’s traffic statistics. When I worked there last summer, I and the other interns worked on a project to advise the company about how they can better appeal Gen Z.
</p>
<h2>My Contribution</h2>
            <p>I took charge of envisioning a compelling health center aimed at Gen Z. The center provides wellness and lifestyle information that is important, interesting, and relevant to Gen Z. I led the content strategy, worked a designer to mockup the site, and taught the interns how to craft SEO-friendly pitches. I also helped write the survey and conducted the data analysis.</p>

            <h2>Background Research</h2>
            <p>To gain context about how our generation regards health, we pored over studies. Some key findings were:</p>
            <ul>
                <li>Our biggest health concern is managing stress and mental health
</li>
                <li>Having a well-balanced diet, exercising, and getting enough sleep are also important
</li>
                <li>We feel the need for acceptance and belonging
</li>
                <li>We’re the most ethnically diverse generation in the US so far
</li>
            </ul>
            <div className="smallText">Z: A Generation Redefining Health and Wellness, Into Z Future</div>
            <p>It seemed our biggest concerns are lifestyle-related rather than tied to specific medical conditions. WebMD is more known for expertise in the latter.
</p>
            <div className="competition">
                <h2>Studying Competitors</h2>
                <img src="https://corporate-wordpress-proxy-stage.healthline.com/wp-content/uploads/2019/08/Healthline-Black-Lockup-1.png" alt=""></img>
                <img src="https://pmdbeauty.com/wp-content/uploads/2014/07/self-magazine-logo.jpg" alt=""></img>
                <img src="http://jj-la.com/wp-content/uploads/2019/04/mbg-full-logo-black.png" alt=""></img>
                <img src="https://katiebressack.com/wp-content/uploads/2017/02/28-4449-page/mbg-logo-300x152.png" alt=""></img>
                <img src="https://www.media24.com/wp-content/uploads/2019/03/Womenshealth_logo.png" alt=""></img>
                <img src="https://pbs.twimg.com/profile_images/966067059913183232/owoXoAMB_400x400.jpg" alt=""></img>
                <p>We looked at six other health information and news sites to see how they appeal to Gen Z. We found that sites aimed at a young adult demographic like Healthline curate more wellness- and lifestyle-focused content and write with more relatable voices. They also emphasize diverse imagery, include LGBTQ health information, and exhibit young people’s medical stories more than WebMD. 
</p>
            </div>

            <h2>User Research</h2>
            <p>We conducted a survey on Gen Z’s health habits, how they receive health information, and their perception of WebMD. It had 202 respondents, most between 20-22 years old. These were some key insights:
</p>
<div class="box-container">
  <div class="box"><div>Gen Z generally identifies as <b>healthy</b> and is most interested in food and diet, mental health, fitness, and body positivity.</div>
</div>
  <div class="box"><div>Gen Z wants a <b>redesigned</b> homepage that is “cleaner,” “easier to navigate,” and has a “more dynamic, social-media-esque layout.”
</div></div>
  <div class="box"><div>The current WebMD website emphasizes illnesses like <b>cancer</b> (their biggest fear by far), which <b>discourages</b> them from visiting the site more often. </div></div>
  <div class="box"><div>They most prefer getting health information in <b>article</b> form, followed by <b>video</b>.
</div></div>
</div>
<a href={surveystats} target="_blank" className="btn-big">See More Results</a>

            <div className="outline">
                <p>The current WebMD homepage emphasizes medical conditions and appears cluttered to Gen Zers, which discourages them from visiting the site more often.</p>
            </div>

            <h2>Solution: Creating a Gen Z Health Center
</h2>
            <p>After brainstorming recommendations to attract Gen Z to WebMD, we each chose one to develop and present. I worked on creating a new health center (similar to a landing page) for WebMD’s site. It would target Gen Z’s interests in a way the rest of the site couldn’t
</p>
            <h3>Content Strategy</h3>
            <p>Drawing on our research and my SEO knowledge, I created a strategy for its content to best address Gen Z’s health concerns and interests.
</p>
            <table>
                <tr>
                    <td width="20%">Target audience</td>
                    <td>18-25 (population: 30 million)</td>
                </tr>
                <tr>
                    <td>Content formats</td>
                    <td>Articles and videos</td>
                </tr>
                <tr>
                    <td>Content topics</td>
                    <td>Fitness, nutrition, mental health, body positivity, skincare, beauty, sexual/reproductive health, disease prevention</td>
                </tr>
                <tr>
                    <td>Language</td>
                    <td>Address the audience directly with second-person language to come across as more inviting and understanding</td>
                </tr>
            </table>
            <p>To provide a more specific picture of the page’s content, I came up with over 20 possible pitches. I also wanted each pitch to have high SEO potential, so I analyzed keyword volume, competition, and content gaps using Keywords Everywhere and seoClarity. </p>
            <p>In terms of business, I learned that the Gen Z page could help diversify revenue streams. WebMD struggles to engage with consumer packaged goods advertising, but including more wellness content could get more views to attract these brands.
</p>
            <h3>Design</h3>
            <p>After finding content Gen Z would enjoy, I worked with a designer to mock up a clean interface to house it in. Here was the final mockup (for comparison, the current Women’s Health Center is on the left):
</p>
            <div className="mockup overflow">
                <img src={genzmock} />
            </div>
            <h2>Reflection</h2>
            <h3>Design with Business in Mind</h3>
            <p>Working on this project taught me the importance of developing solutions that meet user and business needs. An idea can be incredibly useful and well executed, but to increase its chances of survival it should clearly benefit the company. If I were to do this project again I would work on aligning the final product to better support WebMD’s business goals while keeping user needs in mind.</p>
            <h3>What UX Is</h3>
            <p>For the majority of the project, I actually didn’t know much about “UI/UX.” What I did know was that I loved gathering data and making design and content decisions with them. A valuable lesson I took away from this project was that what I loved doing -- researching and creating things with the potential to help people -- had a name. Oh, and don’t mention cancer around Gen Z.</p>

        </div>
    );
}

export default WebMD;
