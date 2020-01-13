import React from 'react';
import './styles.css';
import leaflet from './images/leafletmockup@2x.png'
import Report from './images/CS206_Paper.pdf';
import demo from './images/Final_Demo.mov';

function Leaflet() {
  return (
    <div className="project">
      <div className="overlay green full-width">
      <img src={leaflet} />
      </div>
      <h1 className="projTitle">Leaflet</h1>
      <p className="subtitle">Designing and developing a transcription application aimed at journalists</p>

      <div className="row">
        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">August 2019 - December 2019 (10 weeks)</span>
        </div>
        <div className="column">
          <h4>Languages</h4><span className="proj-detail">React (JavaScript, HTML, CSS), Python/Flask</span>
        </div>
        <div className="column">
          <h4>Tools</h4><span className="proj-detail">Figma, Google Speech-to-Text, Microsoft Computer Vision, Semantic UI
          </span>
        </div>
      </div>

      <p>In CS 206: Exploring Computational Journalism, I and two teammates built <b>Leaflet</b>, a transcription application that helps journalists at every stage of their writing process. Leaflet lets journalists receive automated transcripts of their recordings, attach related news articles, link their handwritten notes to their transcriptions, save quotes for later, and begin crafting their stories.
</p>
      <p>My contributions were:</p><ul>
        <li>Conducted competitive analysis, interviews, ideation, and user testing</li>
        <li>Created journey map, paper sketches, and Figma prototypes</li>
        <li>Programmed these features: automated speech-to-text transcription, audio playback tools, handwritten-to-digital notes conversion, quote bank, export functions, and related news search</li>
        <li>Coded majority of the user interface
</li>
      </ul>
      <a href={Report} target="_blank" className="btn-big">Full Report</a>
      <h2>Demo</h2>
      <video width="100%" controls>
        <source src={demo} type="video/mp4" />
        Your browser does not support HTML5 video.
</video>
      <div className="smallText">(Leaflet has already transcribed the reporter's audio file and converted a picture of their notes into digitized text using computer vision.)</div>

    </div>)
}

export default Leaflet;
