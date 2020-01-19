import React from 'react';
import './styles.css';
import leaflet from './images/leafletmockup@2x.png'
import Report from './images/CS206_Paper.pdf';
import demo from './images/Final_Demo.mp4';

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

      <h2>Problem</h2>
      <p>Transcribing is a <b>necessary, but tedious</b> undertaking for many journalists. While transcription software exists, it only aids one of many steps in a journalist’s interview and writing process.</p>
      
      <h2>Solution</h2>
      <p>In CS 206: Exploring Computational Journalism, I and two teammates built <b>Leaflet</b>, a transcription application that <b>bridges audio, data, and text in meaningful ways to optimize the journalist’s workflow</b>. Leaflet lets journalists receive automated transcripts of their recordings, research related news, link their handwritten notes to their transcriptions, save quotes for later, and begin crafting their stories.
</p>
<h2>My Contribution</h2>
      <ul>
        <li>I conducted competitive analysis, interviews, and all user testing.
</li>
        <li>I created a journey map, led brainstorming, and drew paper sketches.
</li>
        <li>I designed and coded a majority of the interface.
</li>
        <li>I programmed nearly every feature, including automated speech-to-text transcription, audio playback tools, handwritten-to-digital notes conversion with computer vision, the quote bank, and related news search features.
</li>
      </ul>
      <p>Check out a detailed report of our process:</p>
      <a href={Report} target="_blank" className="btn-big">Full Report</a>
      <h2>Demo</h2>
      <video width="100%" controls>
        <source src={demo} type="video/mp4" />
        Your browser does not support HTML5 video.
</video>
      <div className="smallText">Note: Leaflet has already transcribed the reporter's audio file and converted a picture of their notes into digitized text using computer vision.</div>

    </div>)
}

export default Leaflet;
