import React from 'react';
import './styles.css';
import surveystats from './images/surveygraphic@2x.png'
import laptopmockup from './images/laptopmockup@2x.png'
import teencenter from './images/teencenter@2x.png'
import genzcenter from './images/genzcenter@2x.png'

function WebMD() {
    return (
        <div className="project">
            <img src={laptopmockup} />
            <h1 className="projTitle">WebMD: A Gen Z-entric Site</h1>
            <p className="subtitle">When it comes to health online, what is Gen Z interested in? WebMD interns find out.</p>

            <div className="row">
                <div className="column">
                    <h4>Duration:</h4><p>2 months</p>
                </div>
                <div className="column">
                    <h4>Teammates:</h4><p>3 interns</p>
                </div>
                <div className="column">
                    <h4>Role:</h4><p>Content strategy, SEO, design, research</p>
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
            <div className="smallText">Z: A Generation Redefining Health and Wellness, AdAge</div>

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


            <h2>Problem Definition</h2>
            <p>From our research, we learned that the majority of Gen Zers identify as healthy and are interested in wellness topics like fitness and nutrition. As a result, they may shy away from WebMD because they associate the site with illness, particularly cancer. </p>
            <p>Gen Zers also expressed a desire for a redesigned homepage that is “cleaner,” “easier to navigate,” and has a “more dynamic, social-media-esque layout.”</p>
            <div className="outline">
                <p>The current WebMD homepage emphasizes medical conditions and appears cluttered to Gen Zers, which discourages them from visiting the site more often.</p>
            </div>

            <h2>Solution: Creating a Landing Page for Gen Zers</h2>
            <p>After brainstorming recommendations to attract Gen Zers to WebMD, we each took one to develop and present. I chose to work on fleshing out the concept of a landing page (also called health centers) on WebMD’s site aimed at the Gen Z demographic.
</p>
            <h3>Content Strategy</h3>
            <p>Drawing on our survey results and my SEO knowledge, I created a possible strategy for the landing page’s content.
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
            <p>After finding content Gen Z would enjoy, I helped with designing the interface it could be housed in. I studied sites popular with Gen Zers such as BuzzFeed and Huffington Post to see how they attract an audience. I noted that these sites prioritize relatable article content and had easy-to-understand categories such as “Trending Now.”
</p>
            <p>For the site’s design, I chose the colors yellow, blue, and pink so it could have broad appeal while seeming youthful and positive. I brainstormed and wrote headlines that address the topics Gen Z is most interested in, incorporating words like “you” where appropriate. Because Gen Z is the most diverse generation, I found images that reflected that. I sent all of this content to the designer and communicated my design recommendations.
</p>
            <p>Here was the final mockup (for comparison, the current Teen Health Center is on the left).</p>
            <div className="mockup overflow">
                <img className="left" src={teencenter} />
                <img src={genzcenter} />
            </div>
            <h2>Reflection</h2>
            <h3>Design with Business in Mind</h3>
            <p>Working on this project taught me the importance of developing solutions that meet user and business needs. An idea can be incredibly useful and beautifully executed, but to increase its chances of survival it should benefit the company in some way. If I were to do this project again I would work on aligning the product to better support WebMD’s business goals while keeping user needs in mind.</p>
            <h3>What UX Is</h3>
            <p>For the majority of the project, I actually didn’t know much about “UI/UX” (if you mentioned affinity maps to me, I probably would’ve just pictured two globes kissing). What I did know was that I loved gathering data and making design and content decisions with them.</p>
            <p>After we presented the project, a member of the SEO team congratulated us and said, "You essentially did the whole UX process."
                A lesson I took away from this project was that what I loved doing -- researching and designing things with the potential to help people -- was actually called something.</p>

        </div>
    );
}

export default WebMD;
