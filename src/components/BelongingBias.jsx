import React from 'react';
import './styles.css';
import bias from './images/largebelongingbias@2x.png'
import Paper from './images/197_Paper.pdf';

function BelongingBias() {
    return (
        <div className="project">
            <img src={bias} />
<h1 className="projTitle">CS197: Computer Science Research</h1>
            <p className="subtitle">Studying the impact of biased web design on women in computer science.</p>

            <div className="row">
                <div className="column-left">
                    <h4>Timeline</h4><span className="proj-detail">August 2019 - December 2019 (10 weeks)</span>
                </div>
                <div className="column">
                    <h4>Languages</h4><span className="proj-detail">HTML/CSS, R, LaTeX</span>
                </div>
                <div className="column">
                    <h4>Tools</h4><span className="proj-detail">Figma, Qualtrics, Amazon Mechanical Turk, RStudio</span>
                </div>
            </div>
        
            <p>In this class, I worked with two other students to conduct a human-computer interaction research study on the effects of biased web design. We studied the impact of stereotypical color, language, and imagery in a computer science course website on women’s interest and belonging in computer science.</p>
            <p>I contributed the following:</p><ul>
                <li>Designed, developed, and wrote content for all four web pages: 
                    <a href="http://web.stanford.edu/~gkzhou/" target="_blank"> gender-neutral</a>, 
                    <a href="http://web.stanford.edu/~gkzhou/c.html" target="_blank"> stereotypical color</a>, 
                    <a href="http://web.stanford.edu/~gkzhou/l.html" target="_blank"> stereotypical language</a>, and 
                    <a href="http://web.stanford.edu/~gkzhou/i.html" target="_blank"> stereotypical imagery</a></li>
                <li>Asked for and received IRB approval to study human subjects</li>
                <li>Helped design, pilot, and conduct the experiment on 55 participants</li>
                <li>Helped write and deploy survey</li>
                <li>Conducted all data analysis for results using R and Google Sheets</li>
            </ul>

            <a href = {Paper} target = "_blank" className="btn-big">View Paper</a>

        </div>)
}

export default BelongingBias;
