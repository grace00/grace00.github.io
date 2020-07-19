import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import webmd from './images/webmdpreview@2x.png'
import jobsite from './images/jobmockup@2x.png'
import leaflet from './images/leafletmockup@2x.png'
import journie from './images/journie-preview.png'


function Projects() {
	return (
		<div>
			<div className="introduction">
				<h1>Hello, World! I'm Grace.</h1>
				<div className="flex-container">
					{/*<img src={art} /> <img src={code} />*/}
					<p>I'm a designer who codes 👩🏻‍💻 and occasionally writes <a href="https://ors.artandwriting.org/media/416527" target="_blank">satire</a> 😝. </p>
				</div>
			</div>
			<div className="all-projects">
			<div class="item">
					<Link to="/journie">
						<div className="overlay blue">
							<span class="vertical-helper"></span>
							<img src={journie} className="preview-image"/>
						</div>
						<h1>Journie</h1>
						<p>Designing an app that matches commuters with carpools</p>
						<div className="small-text">UX design, UX research</div> {/*React, Python, Figma*/}
					</Link>
				</div>
				<div class="item">
					<Link to="/leaflet">
						<div className="overlay green">
							<span class="vertical-helper"></span>
							<img src={leaflet} className="preview-image"/>
						</div>
						<h1>Leaflet</h1>
						<p>Creating a transcription application for journalists.</p>
						<div className="small-text">Design, full-stack development, UX research</div> {/*React, Python, Figma*/}
					</Link>
				</div>
				<div class="item">
					<Link to="/daily-job-site">
						<div className="overlay purple">
							<span class="vertical-helper"></span>
							<img src={jobsite} className="preview-image" />
						</div>
						<h1>Job Tree</h1>
						<p>Developing a jobs search site for Stanford students.</p>
						<div className="small-text">Design, full-stack development, UX research</div> {/*React, Adobe XD, PHP*/}
					</Link>
				</div>
				<div class="item">
					<Link to="/webmd-gen-z">
						<div className="overlay yellow">
							<span class="vertical-helper"></span>
							<img src={webmd} className="preview-image" />
						</div>
						<h1>WebMD</h1>
						<p>Envisioning a health page for Gen Z.</p>
						<div className="small-text">Content strategy, SEO, research, design</div>
					</Link>
				</div>
			</div>
		</div >
	);
}

export default Projects;