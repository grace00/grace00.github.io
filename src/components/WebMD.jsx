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
            <p>Competitors that target younger audiences have recently begun to put a strain on WebMD’s traffic statistics. When I worked there last summer, I and the other interns worked on a project to <b>advise the company about how they can better appeal Gen Z</b> — whether through an app, website, or anything else.
</p>
            <h2>My Contribution</h2>
            <p>I took charge of envisioning <b>a landing page that provides important, interesting, and relevant wellness and lifestyle information to Gen Z</b>. I led the content strategy, worked with a designer to mockup the site, and taught the interns how to craft SEO-friendly pitches. I also helped write the survey and conducted the data analysis.</p>

            <h2>Background Research</h2>
            <p>At the beginning of our process, we pored over studies to gain context about how our generation regards health. Some key findings were:</p>
            <ul>
                <li>Our biggest health concern is <b>managing stress and mental health</b>
</li>
                <li>Having a <b>balanced diet, exercising, and getting enough sleep</b> are also important to us
</li>
                <li>We feel the need for <b>acceptance and belonging</b>
</li>
                <li>We’re the most <b>ethnically diverse</b> generation in the US so far
</li>
            </ul>
            <div className="smallText">Z: A Generation Redefining Health and Wellness, Into Z Future</div>
            <p>Our top health priorities are related to <b>general lifestyle</b> rather than specific medical conditions. 
</p>

            <h2>Studying Competitors</h2>
            <div className="image-row">
                <img className="competitor" src="https://corporate-wordpress-proxy-stage.healthline.com/wp-content/uploads/2019/08/Healthline-Black-Lockup-1.png" alt="" />
                <img className="competitor" src="https://pmdbeauty.com/wp-content/uploads/2014/07/self-magazine-logo.jpg" alt=""/>
                <img className="competitor" src="http://jj-la.com/wp-content/uploads/2019/04/mbg-full-logo-black.png" alt=""></img>
                <img className="competitor" src="https://katiebressack.com/wp-content/uploads/2017/02/28-4449-page/mbg-logo-300x152.png" alt=""/>
                <img className="competitor" src="https://www.media24.com/wp-content/uploads/2019/03/Womenshealth_logo.png" alt=""/>
                <img className="competitor" src="https://pbs.twimg.com/profile_images/966067059913183232/owoXoAMB_400x400.jpg" alt=""/>
            </div>
            <p>We looked at six other health information and news sites to study how they appeal to Gen Z. We learned that sites aimed at a young adult demographic like Healthline curate more wellness- and lifestyle-focused content and write with more relatable voices than WebMD does currently. They also incorporate more diverse imagery, include more LGBTQ health information, and exhibit more young people’s medical stories than WebMD. 
</p>


            <h2>User Research</h2>
            <p>We needed to know more about our target audience, so we conducted a survey on Gen Z’s health habits, how they receive health information, and their perception of WebMD. There were 202 respondents, most between 20-22 years old. Some of our key insights included:
</p>
            <div class="box-container">
                <div class="box"><div>Gen Z is generally <b>healthy</b> and is most interested in the topics <b>food and diet, mental health, fitness, and body positivity</b>. 
</div>
                </div>
                <div class="box"><div>Gen Z wants a <b>redesigned homepage</b> that is “cleaner,” “easier to navigate,” and has a “more dynamic, social-media-esque layout.”
</div></div>
                <div class="box"><div>The current WebMD website emphasizes illnesses like <b>cancer, their biggest fear</b> by far, which <b>discourages them from visiting the site</b>  more often. </div></div>
                <div class="box"><div>They most prefer getting health information in <b>article</b> form, followed by <b>video</b> — and least prefer getting it from an app.
</div></div>
            </div>
            <a href={surveystats} target="_blank" className="btn-big">See More Results</a>

            <div className="outline">
                <p>The results further emphasized that Gen Z enjoys learning about wellness and lifestyle topics. However, they associate WebMD with the very opposite: sickness and life-threatening diseases. On top of that, they don’t find the design appealing and easy to navigate. <b>These findings motivated us to design a health center would better target our generation’s needs.</b>
</p>
            </div>

            <h2>Solution: Creating a Gen Z Health Center
</h2>
            <p>After brainstorming multiple recommendations improve WebMD’s relationship with Gen Z, we each chose one to develop and present. I took on the idea of designing a new health center for WebMD’s website. It would target Gen Z’s interests in a way the rest of the site couldn’t.
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
            <p>To provide a more specific picture of the page’s content, I came up with over 20 possible pitches. I also wanted each pitch to have <b>high SEO potential</b>, so I analyzed keyword volume, competition, and content gaps using the tools <a href="https://keywordseverywhere.com/" target="_blank">Keywords Everywhere</a> and <a href="https://www.seoclarity.net/" target="_blank">seoClarity</a>. </p>
            <p>In terms of business, I learned that the <b>Gen Z page could help diversify revenue streams</b>. WebMD struggles to engage with consumer packaged goods advertising, but including more wellness content could get more views to attract these brands.
</p>
            <h3>Design</h3>
            <p>After finding content Gen Z would enjoy, I worked with a designer to mockup a clean interface to house it in. Here was the final mockup (for comparison, the current Women’s Health Center is on the left):
</p>
            <div className="mockup overflow">
                <img src={genzmock} />
            </div>
            <h2>Takeaways</h2>
            <h3>Design with Business in Mind</h3>
            <p>Working on this project taught me the importance of developing solutions that meet user and business needs. An idea can be incredibly useful and well executed, but to increase its chances of survival it should clearly benefit the company. If I were to do this project again I would work on aligning the final product to better support WebMD’s business goals while keeping user needs in mind.</p>
            <h3>What UX Is</h3>
            <p>For the majority of the project, I actually didn’t know much about “UI/UX.” What I did know was that I loved gathering data and making design and content decisions with them. A valuable lesson I took away from this project was that what I loved doing — researching and creating meaningful experiences with the potential to help people — had a name. Oh, and don’t mention cancer around Gen Z.</p>

        </div>
    );
}

export default WebMD;
