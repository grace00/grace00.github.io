import React from 'react';
import './styles.css';
import whizkid1 from './images/whizkid1.png'
import whizkid3 from './images/whizkid3.png'
import screenwritersbible from './images/screenwritersbible.jpg'
import savethecat from './images/savethecat.jpg'
import eighthgrade from './images/eighthgrade.jpg'
import meangirls from './images/meangirls.jpg'
import bridesmaids from './images/bridesmaids.jpg'
import discordcomment from './images/discordcomment.png'

function WebMD() {
    return (
        <div className="project">
            <img src={whizkid1} />
            <h1 className="project-title underPicSpace">Whiz Kid</h1>
            <p className="subtitle">Writing my first full-length screenplay.</p>

            <div className="row">
                <div className="column-left">
                    <h4>Timeline</h4><span className="proj-detail">May 2018 - August 2018 (3 months)</span>
                </div>
                <div className="column">
                    <h4>Length</h4><span className="proj-detail">105 pages</span>
                </div>
                <div className="column">
                    <h4>Role</h4><span className="proj-detail">Writer</span>
                </div>
                </div>
                <p className="prologue">COMEDY. ROMANCE/HORNY TEENS. TIGER PARENTS. It’s the high school coming-of-age story that no one has dared to put on screen (for good reason). Instead of football, there’s math team. Instead of mean girls, there are judgmental genius teens horny for the Ivy Leagues. Instead of bullying, there’s racism against Asians. Instead of insane parties with alcohol, there are nights of studying that are equally long and exhausting. A major motivation of mine was to depict a version of high school/teendom that is far more realistic to me but I haven’t seen much in today’s popular culture. I explore the insanely stressful culture high school can cultivate, the role social media (particularly Instagram) plays in teenagers’ lives, and what coming-of-age can look like for Asian-Americans. Also, I look for the humor in these situations.
                </p>
                <p>I brainstormed, outlined, and wrote a full-length script from June through August 2018 as part of the Screenwriters Network’s first screenplay competition.
                </p>

                <h2>Researching, Learning, Watching</h2>
                <p>Before the contest officially began, I learned how to structure and write screenplays by reading books like <i>Screenwriter’s Bible</i> and <i>Save the Cat</i>. I knew I wanted to write a comedy about an Asian-American girl surviving high school, so I also re-watched and read the screenplays of <i>Eighth Grade</i>, <i>Mean Girls</i>, and <i>Bridesmaids</i>. Studying these helped me solidify my logline and character list.
                </p>
                <div className="image-row">
                    <img src={screenwritersbible} />
                    <img src={savethecat} />
                    <img src={eighthgrade} />
                    <img src={meangirls} />
                    <img src={bridesmaids} />
                </div>
                <div className="quote">Logline: Lena Yang struggles to become extraordinary in her junior year of high school after realizing she’s fallen behind her peers and that her parents are disappointed in her.</div>

                <h2>Outlining and Defining</h2>
                <p>To flesh out the main characters, I thought carefully about their flaws, possible character arcs, and goals in addition to their general personality traits. What do they want at the beginning of the story? What needs of theirs are fulfilled in the end? After writing their biographies, I then brainstormed possible scenes and ordered them into a detailed outline of the three acts. </p>
            

            <h2>Writing, Procrastinating, and More Writing</h2>
            <p>Because contest participants were given deadlines every Friday and I was doing an internship during the week, I frequently stayed up until 3AM pumping out lines of dialogue. Teen characters’ lines flowed right out of me, but I often found myself halting and sputtering when trying to write what a teacher or parent would say. I also worked hard to balance the comedy with serious moments, include authentic details about Chinese culture, and make the characters’ actions consistent with the biographies I established. After completing the first draft, I had enough time to re-write the entire third act before I needed to submit my screenplay.</p>
            <h2>Result</h2>
            <p>The contest started with 123 writers; 21 finished. My screenplay was voted by Screenwriters Network members to end up in the top 10 (what?!). Two people messaged me their suggestions and notes for my screenplay, which was incredibly generous of them. The best surprise, however, was finding this message in my inbox months after the contest had ended:</p>
            <img src={discordcomment} />
            <div className="small-text center-text">Even <i>I'd</i> think I made this up</div>
            <p>I didn’t expect anyone to take the time to read my screenplay all the way through, so I was shocked that someone had good things to say about it. </p>

            <h2>Takeaways</h2>
            <p>Experiencing the screenwriting process has changed the way I look at movies -- and people -- forever. I’ve internalized the three-act story structure and become familiar with the kinds of twists that can occur. I’ve learned how to better understand people’s desires and frustrations as well as how these drive them to certain actions. And I’ve gotten better at tackling large creative tasks in a relatively short amount of time.</p>
            <img src={whizkid3} />
            <div className="small-text center-text">SPOILER ALERT!!! Wait, how do you put this above the image?</div>
        </div>
    );
}

export default WebMD;
