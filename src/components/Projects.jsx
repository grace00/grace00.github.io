import React from 'react';
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
import './styles.css';
import webmd from './images/webmdpreview@2x.png'
import jobsite from './images/jobmockup@2x.png'
import leaflet from './images/leafletmockup@2x.png'
import journie from './images/journie-preview.png'
import imag from './images/imag-preview.png'

function Projects() {
	return (
		<div>
			<FadeIn
				delay={500}
			>
				<div className="introduction">
					<p className="header">Hi! I’m Grace.</p>
					<div className="flex-container">
						{/*<img src={art} /> <img src={code} />*/}
						<p className="sub-header">I’m a rising junior at Stanford studying Computer Science and an incoming Instructional Design Intern @ <a href="https://www.apple.com/" target="_blank">Apple</a>. Previously @ <a href="https://www.nih.gov/" target="_blank">NIH</a> and <a href="https://interns.latimes.com/technology/" target="_blank">The Los Angeles Times</a>.</p>
					</div>
				</div>
				<div className="all-projects">
				<div class="item">
						<Link to="/imag">
							<div className="overlay imag">
								<span class="vertical-helper"></span>
								<img src={imag} className="preview-image" />
							</div>
							<h1>IMAG</h1>
							<p>Redesigning a government site to help biomedical researchers share highlights of their work</p>
						</Link>
					</div>
					<div class="item">
						<Link to="/journie">
							<div className="overlay green">
								<span class="vertical-helper"></span>
								<img src={journie} className="preview-image" />
							</div>
							<h1>Journie</h1>
							<p>Designing an app that matches commuters with carpools</p>
						</Link>
					</div>
					<div class="item">
						<Link to="/leaflet">
							<div className="overlay gray">
								<span class="vertical-helper"></span>
								<img src={leaflet} className="preview-image" />
							</div>
							<h1>Leaflet</h1>
							<p>Developing a transcription application for journalists.</p>
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
						</Link>
					</div>
				</div>
				<div className="footer">
					Developed by Grace
    		</div>
			</FadeIn>
		</div>
	);
}

export default Projects;