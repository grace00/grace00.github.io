import React from 'react';
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';
import './styles.css';
import jobsite from './images/jobmockup@2x.png'
import leaflet from './images/leafletmockup@2x.png'
import journie from './images/journie-mockup.png'
import imag from './images/imag-preview.png'


function Projects() {
	return (
		<div className="home-page-container">
			<FadeIn delay={500} >
				<div className="introduction">
					<p className="header">Hey! I’m Grace.  👩🏻‍💻</p>
					<div className="flex-container">
						{/*<img src={art} /> <img src={code} />*/}
						<p className="sub-header">I'm a product designer studying computer science and adulting at Stanford.
						<br/> Formerly at <a href="https://about.facebook.com/" target="_blank" className="meta-color">Meta</a>, <a href="https://www.amazon.com/" target="_blank" className="amazon-color">Amazon</a>, and <a href="https://interns.latimes.com/technology/" target="_blank" className="lat-color">LA Times</a>.
						Occasional contributor to <a href="https://www.mcsweeneys.net/authors/grace-zhou" target="_blank" className="mcsweeneys-color">
							 McSweeney's
							</a>.
						</p>
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
							<div className="small-text">INTERNSHIP • USER RESEARCH • ITERATIVE</div>
							<p>Redesigning a government site to help biomedical researchers share highlights of their work.</p>
						</Link>
					</div>
					<div class="item">
						<Link to="/journie">
							<div>
								<span class="vertical-helper"></span>
								<img src={journie} className="preview-image" />
							</div>
							<h1>Journie</h1>
							<div className="small-text">PROJECT • USER RESEARCH • VISUAL DESIGN</div>
							<p>Designing an app that matches Stanford commuters with carpools.</p>
						</Link>
					</div>
					<div class="item">
						<Link to="/leaflet">
							<div className="overlay gray">
								<span class="vertical-helper"></span>
								<img src={leaflet} className="preview-image" />
							</div>
							<h1>Leaflet</h1>
							<div className="small-text">PROJECT • FULLSTACK DEVELOPMENT • DESIGN </div>
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
							<div className="small-text">PROJECT • FULLSTACK DEVELOPMENT • DESIGN </div>
							<p>Designing and developing a jobs search site for Stanford students.</p>
						</Link>
					</div>
				</div>
			</FadeIn>
		</div>
	);
}

export default Projects;