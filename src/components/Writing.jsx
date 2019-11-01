import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import whizkid from './images/whizkid.png'
import oryx from './oryx.png'

function Writing() {
	return (
		<div className="flex-container wrapper">
			<div class="flex-item">
				<Link to={WhizKid}>
					<div className="overlay">
						<img src={whizkid} />
					</div>
					<h1>Whiz Kid</h1>
					<p className="subtitle">A coming-of-age story that no one has dared to put on screen (for good reason).</p>
					<div className="smallText">Screenwriting, WriterDuet</div>
				</Link>
			</div>

			<div class="flex-item">
				<Link to={Oryx}>
					<div className="overlay">
						<img src={oryx} />
					</div>
					<h1>Whiz Kid</h1>
					<p className="subtitle">A coming-of-age story that no one has dared to put on screen (for good reason).</p>
					<div className="smallText">Screenwriting, WriterDuet</div>
				</Link>
			</div>
			<div class="flex-item">
				<Link to={Oryx}>
					<div className="overlay">
						<img src={whizkid} />
					</div>
					<h1>Whiz Kid</h1>
					<p className="subtitle">A coming-of-age story that no one has dared to put on screen (for good reason).</p>
					<div className="smallText">Screenwriting, WriterDuet</div>
				</Link>
			</div>
			<div class="flex-item">
				<Link to={Oryx}>
					<div className="overlay">
						<img src={whizkid} />
					</div>
					<h1>Whiz Kid</h1>
					<p className="subtitle">A coming-of-age story that no one has dared to put on screen (for good reason).</p>
					<div className="smallText">Screenwriting, WriterDuet</div>
				</Link>
			</div>
		</div >
	);
}

export default Writing;

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