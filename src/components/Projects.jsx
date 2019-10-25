import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import whizkid from './whizkid.png'
import oryx from './oryx.png'

function Projects() {
	return (
		<div className="container">
			<div class="item">
				<Link to="/webmd-gen-z">
					<div className="overlay">
						<img src={whizkid} />
					</div>
					<h1>Job Tree</h1>
					<p className="subtitle">Designing and developing a more personalized jobs search experience for Stanford students.</p>
					<div className="smallText">Adobe XD, React.js, PHP</div>
				</Link>
                </div>

			<div class="item">
				<Link to="/webmd-gen-z">
					<div className="overlay">
						<img src={oryx} />
					</div>
					<h1>WebMD: A Gen Z-entric Site</h1>
					<p className="subtitle">When it comes to health, what is Gen Z interested in? WebMD interns find out.</p>
					<div className="smallText">Survey research, SEO, data analysis</div>
				</Link>
			</div>
			<div class="item">
				<Link to={Oryx}>
					<div className="overlay">
						<img src={whizkid} />
					</div>
					<h1>Nunci</h1>
					<p className="subtitle">Social media + news = happy Gen Zers.</p>
					<div className="smallText">Prototyping, Adobe XD</div>
				</Link>
			</div>
			<div class="item">
				<Link to={Oryx}>
					<div className="overlay">
						<img src={whizkid} />
					</div>
					<h1>Listen to Your [NAME]</h1>
					<p className="subtitle">A VR game for kids.</p>
					<div className="smallText">Unity</div>
				</Link>
			</div>
		</div >
	);
}

export default Projects;

function WhizKid() {
	return (
		<div>
			Whiz Kid
        </div>
	)
}

function Oryx() {
	return (
		<div>
			Oryx & Crake review
        </div>
	)
}