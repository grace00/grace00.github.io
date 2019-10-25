import React from 'react';
import './styles.css';
import surveystats from './surveystats@2x.png'

function WebMD() {
    return (
        <div className="project">
            <h1 className="projTitle">WebMD</h1>
            <p className="subtitle">Researching what Gen Zers want in a health site and creating a landing page on WebMD to make health information more appealing to them.</p>

            <div className="row">
                <div className="column">
                    <h4>Duration:</h4><p>2 months</p>
                </div>
                <div className="column">
                <h4>Teammates:</h4><p>3 interns</p>
                </div>
            </div>

            <p>WebMD has been one of the most visited health sites sites since 1998 (fun fact: approximately half of its page views come from me). Recently, the rise of competitors that target younger audiences has put a strain on the company’s traffic statistics. When I worked there last summer, I and the other interns embarked on a group project to find out what our generation is looking for in a health site and what WebMD can do to be more Gen Z-friendly.</p>
            <p>I was in charge of envisioning a compelling Gen Z-focused landing page. I outlined a potential content strategy and worked with WebMD’s design manager to mockup the site. I also did the data analysis for our survey results and taught the interns how to craft keyword-optimized pitches.</p>

            <h2>Background Research</h2>
            <p>To learn more about, well, ourselves, we read studies to get some context on how our generation regards health. Some key findings were:</p>
            <ul>
                <li><span className="stat">72%</span>  state their most important health concern is managing stress and mental health</li>
                <li><span className="stat">68%</span>  say a well-balanced diet is critical</li>
                <li><span className="stat">61%</span>  believe exercise is of major importance</li>
                <li><span className="stat">60%</span>  think getting enough sleep is also critical</li>
            </ul>
            <p className="smallText">Z: A Generation Redefining Health and Wellness, AdAge</p>

            <div className="competition">
                <h2>Competitive Analysis</h2>
                <img src="https://corporate-wordpress-proxy-stage.healthline.com/wp-content/uploads/2019/08/Healthline-Black-Lockup-1.png" alt=""></img>
                <img src="https://pmdbeauty.com/wp-content/uploads/2014/07/self-magazine-logo.jpg" alt=""></img>
                <img src="http://jj-la.com/wp-content/uploads/2019/04/mbg-full-logo-black.png" alt=""></img>
                <img src="https://katiebressack.com/wp-content/uploads/2017/02/28-4449-page/mbg-logo-300x152.png" alt=""></img>
                <img src="https://www.media24.com/wp-content/uploads/2019/03/Womenshealth_logo.png" alt=""></img>
                <img src="https://pbs.twimg.com/profile_images/966067059913183232/owoXoAMB_400x400.jpg" alt=""></img>
                <p>We looked at six competing health information and news sites to see how they appeal to Gen Zers and where WebMD could improve. We found that sites aimed at a young adult demographic like Healthline curate more wellness- and lifestyle-focused content and write with more relatable voices. They also emphasize diverse imagery, include LGBTQ health information, and exhibit young people’s medical stories more than WebMD. More established publishers such as MayoClinic and CNN Health had the advantage of high perceived credibility.</p>
            </div>

            <h2>User Research</h2>
            <p>We conducted a 21-question survey on Gen Z’s health habits, how they receive health information, and their opinions of WebMD. It received 202 total responses, and here were few of the insights: </p>
            <img className="infographic" src={surveystats} />

            <h2>What I Learned</h2>
            <p>For the majority of the project, I actually didn’t know much about “UI/UX." If you mentioned affinity maps to me, I would’ve just pictured two globes kissing. What I did know was that I loved gathering data and making design and content decisions with them. I have always enjoyed immersing myself in different subjects, whether that be SEO or behavioral economics, and after this project I gained a better understanding of Gen Z’s relationships to health information. My most valuable lesson from this project was that what I loved doing -- researching and designing things with the potential to help people -- was actually called something.</p>
        </div>
    );
}

export default WebMD;
