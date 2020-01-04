import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import whizkid from './images/whizkid.png'
import news from './images/news-mock@2x.png'
import webmd from './images/webmdpreview@2x.png'
import jobsite from './images/jobmockup@2x.png'
import vrgame from './images/vrgame@2x.png'
import leaflet from './images/leafletmockup@2x.png'
import bias from './images/belongingbias@2x.png'
import art from './images/creativity.png'
import code from './images/browser.png'

function Projects() {
	return (
		<div className="container">
			<div className="introduction">
				<h1>Hi, I'm Grace!</h1>
        <div className="flex-container">
        <img src={art} />
				<p>I'm a designer who also codes + writes things. </p>
				<img src={code} />
        </div>
        {/*<p>Read about my projects below, or check out my <a href="https://ors.artandwriting.org/media/416527" target="_blank">satire</a>.</p>*/}
			</div>
			<div className="allProjects">
				<div class="item">
					<Link to="/leaflet">
						<div className="overlay green">
							<img src={leaflet} />
						</div>
						<h1>Leaflet</h1>
						<p className="subtitle">Creating a transcription application for journalists.</p>
						<div className="smallText">Design, full-stack development, UX research</div> {/*React, Python, Figma*/}
					</Link>
				</div>
				<div class="item">
					<Link to="/daily-job-site">
						<div className="overlay purple">
							<img src={jobsite} />
						</div>
						<h1>Job Tree</h1>
						<p className="subtitle">Developing a jobs search site for Stanford students.</p>
						<div className="smallText">Design, full-stack development, UX research</div> {/*React, Adobe XD, PHP*/}
					</Link>
				</div>
				<div class="item">
					<Link to="/novi-app">
						<div className="overlay novi fix-height">
							<img src={news}/>
						</div>
						<h1>Novi</h1>
						<p className="subtitle">Making a social news app for young adults.</p>
						<div className="smallText">UI/UX design</div>
					</Link>
				</div>
       
        <div class="item">
					<Link to="/webmd-gen-z">
						<div className="overlay yellow">
							<img src={webmd} />
						</div>
						<h1>WebMD</h1>
						<p className="subtitle">Envisioning a health page for Gen Z.</p>
						<div className="smallText">Research, SEO, content strategy, design</div>
					</Link>
				</div>
				<div class="item">
					<Link to="/hci-research">
						<div className="overlay blue">
							<img src={bias} />
						</div>
						<h1>Human-Computer Interaction Research</h1>
						<p className="subtitle">Researching the effects of biased web design.</p>
						<div className="smallText">Research, design, frontend development</div>
					</Link>
				</div>
				{/*}
				<div class="item">
					<Link to="/whiz-kid">
						<div className="overlay">
							<img src={whizkid} />
						</div>
						<h1>Whiz Kid</h1>
						<p className="subtitle">Writing my first full-length screenplay.</p>
						<div className="smallText">Screenwriting</div>
					</Link>
					*/}
					{/*}
				<Link to={Oryx}>
					<div className="overlay">
						<img src={whizkid} />
					</div>
					<h1>Nunci</h1>
					<p className="subtitle">Social media + news = happy Gen Zers.</p>
					<div className="smallText">Prototyping, Adobe XD</div>
				</Link>
				
				</div>*/}
				<div class="item">
					<Link to="/sound-off">
						<div className="overlay">
							<img src={vrgame} />
						</div>
						<h1>SoundOff</h1>
						<p className="subtitle">A VR sound game for kids.</p>
						<div className="smallText">VR design</div>
					</Link>
				</div>
			</div>
		</div >
	);
}

export default Projects;


function Oryx() {
	return (
		<div>
			Oryx & Crake review
        </div>
	)
}