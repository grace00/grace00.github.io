import React from 'react';
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
import './styles.css';
import webmd from './images/webmdpreview@2x.png'
import jobsite from './images/jobmockup@2x.png'
import leaflet from './images/leafletmockup@2x.png'
import journie from './images/journie-mockup.png'
import imag from './images/imag-preview.png'

function Projects() {
	return (
		<div className="home-page-container">
			<FadeIn
				delay={500}
			>
				<div className="introduction">
					<p className="header">Hi! I’m Grace.</p>
					<div className="flex-container">
						{/*<img src={art} /> <img src={code} />*/}
						<p className="sub-header">I’m a senior at Stanford graduating in June 2023. <br/>Previously @ <a href="https://about.facebook.com/" target="_blank">Meta</a>, <a href="https://www.amazon.com/" target="_blank">Amazon</a>, and <a href="https://www.nih.gov/" target="_blank">NIH</a>.</p>
					</div>
				</div>
				<div className="all-projects">
				<div class="item">
						<Link to="/imag">
							<div>
								<span class="vertical-helper"></span>
								<img src={imag} className="preview-image" />
							</div>
							<h1>IMAG</h1>
							<p>Redesigning a government site to help biomedical researchers share highlights of their work</p>
						</Link>
					</div>
					<div class="item">
						<Link to="/journie">
							<div>
								<span class="vertical-helper"></span>
								<img src={journie} className="preview-image" />
							</div>
							<h1>Journie</h1>
							<p>Designing an app that matches Stanford commuters with carpools</p>
						</Link>
					</div>
					<div class="item">
						<Link to="/leaflet">
							<div className="overlay gray">
								<span class="vertical-helper"></span>
								<img src={leaflet} className="preview-image" />
							</div>
							<h1>Leaflet</h1>
							<p>Designing and developing a transcription application for journalists.</p>
						</Link>
					</div>
					<div class="item">
						<Link to="/daily-job-site">
							<div className="overlay purple">
								<span class="vertical-helper"></span>
								<img src={jobsite} className="preview-image" />
							</div>
							<h1>Job Tree</h1>
							<p>Designing and developing a jobs search site for Stanford students.</p>
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