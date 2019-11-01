import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import whizkid from './images/whizkid.png'
import oryx from './oryx.png'
import webmd from './webmdpreview@2x.png'
import jobsite from './images/jobmockup@2x.png'
import vrgame from './images/vrgame@2x.png'

function Projects() {
	return (
		<div className="container">
			<div class="item">
				<Link to="/webmd-gen-z">
					<div className="overlay">
						<img src={webmd}/>
					</div>
					<h1>WebMD: A Gen Z-entric Site</h1>
					<p className="subtitle">When it comes to health online, what is Gen Z interested in? WebMD interns find out.</p>
					<div className="smallText">Survey research, SEO</div>
				</Link>
			</div>

			<div class="item">
				<Link to="/daily-job-site">
					<div className="overlay">
						<img src={jobsite} />
					</div>
					<h1>Job Tree</h1>
					<p className="subtitle">Designing and developing a more personalized jobs search experience for Stanford students.</p>
					<div className="smallText">React.js, Adobe XD, PHP</div>
				</Link>
            </div>


			<div class="item">
				<Link to="/whiz-kid">
					<div className="overlay">
						<img src={whizkid} />
					</div>
					<h1>Whiz Kid</h1>
					<p className="subtitle">Writing my first full-length screenplay.</p>
					<div className="smallText">WriterDuet</div>
				</Link>
				{/*}
				<Link to={Oryx}>
					<div className="overlay">
						<img src={whizkid} />
					</div>
					<h1>Nunci</h1>
					<p className="subtitle">Social media + news = happy Gen Zers.</p>
					<div className="smallText">Prototyping, Adobe XD</div>
				</Link>
				*/}
			</div>
			<div class="item">
				<Link to="/sound-off">
					<div className="overlay">
						<img src={vrgame} />
					</div>
					<h1>SoundOff</h1>
					<p className="subtitle">A VR sound game for kids.</p>
					<div className="smallText">Unity</div>
				</Link>
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