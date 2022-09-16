import React from 'react';
import './styles.css';
import leaflet from './images/leafletprototype.png'
import Report from './images/CS206_Paper.pdf';
import demo from './images/Final_Demo.mp4';
import Competitors from './images/leafletcompetitormatrix.png';
import JourneyMap from './images/leafletjourneymap.png';
import Sketch from './images/leafletsketch.JPG';
import LowFi from './images/leafletlowfi.png';
import HiFi from './images/leaflethifi.png';
import Test1 from './images/test1.png';
import Test2 from './images/test2.png';
import Code from './images/leafletcode.png';
import LeafletFinal from './images/leaflet.png';
import Transcription from './images/transcription.png';
import Audio from './images/audio.png';
import NewsPin from './images/newspin.png';
import NewsPinOpen from './images/newspinopen.png';
import Notes from './images/notes.png';
import QuoteBank from './images/quotebank.png';
import RelatedNews from './images/relatednews.png';
import TextEditor from './images/texteditor.png';

function Leaflet() {
  return (
    <div className="project">
      <div className="overlay leaflet full-width">
        <h1 className="project-title">Leaflet</h1>
        <p className="subtitle">Developing a transcription application for journalists.</p>
        <img src={leaflet} />
      </div>

      <div className="row">
        <div className="column-left">
          <h4>Timeline</h4><span className="proj-detail">August 2019 - December 2019 (10 weeks)</span>
          <h4>Role</h4><span className="proj-detail">Designer and full-stack developer</span>
        </div>
        <div className="column">
          <h4>Teammates</h4><span className="proj-detail">1 journalist, 1 front-end developer</span>
          <h4>Tools/Languages</h4><span className="proj-detail">Figma, React, Python, Flask, Google Speech-to-Text, Microsoft Computer Vision, Semantic UI
          </span>
        </div>
      </div>

      <h2>Problem</h2>
      <p>Transcribing is a <b>necessary, but tedious</b> undertaking for many journalists. While transcription software exists, it only aids one of many steps in a journalist’s interview and writing process.</p>

      <h2>Solution</h2>
      <p>In CS 206: Exploring Computational Journalism, I and two teammates built Leaflet, a web platform that <b>bridges audio, transcripts, and notes in meaningful ways to optimize the journalist’s workflow</b>. Leaflet allows journalists to receive automated transcripts of their recordings, research related news, link their handwritten notes to their transcriptions, save quotes for later, and begin crafting their stories.
</p>
      <h2>My Contribution</h2>
      <ul>
        <li>In the research phase, I <b>conducted competitive analysis, interviews, and created a journey map</b> to synthesize our findings.
</li>
        <li>I made paper sketches and <b>created a prototype in Figma</b> that was later developed for the final interface.
</li>
        <li>I researched and selected the computer vision and speech-to-text APIs used in the final product.
</li>
        <li>I <b>programmed the frontend and backend of nearly every feature</b>, including automated speech-to-text transcription, audio playback tools, handwritten-to-digital notes conversion with computer vision, the quote bank, and related news search features.
</li>
        <li>I <b>conducted all the usability testing sessions</b> and incorporated the feedback into the final developed product.</li>
      </ul>

      <div className="full-width section-container gray">
        <div className="project">
          <h2>Demo</h2>
          <video width="100%" controls>
            <source src={demo} type="video/mp4" />
        Your browser does not support HTML5 video.
</video>
          <div className="small-text">Note: Leaflet has already transcribed the reporter's audio file and converted a picture of their notes into digitized text using computer vision.</div>
        </div>
      </div>
      <h2>Research</h2>
      <h3>Competitive Analysis</h3>
      <p>Before creating the application, we studied five popular transcription tools. We input real audio from interviews to gauge their accuracy and available features.
</p>
      <img src={Competitors} />
      <p>Nearly every tool provided a correction interface for the transcript, identified different speakers, and showed timestamps. However, <b> none had features that specifically targeted the reporting process – the tools’ capabilities were general in order to please wider audiences</b>. As a result, they didn’t help users with much beyond transcribing audio, which is often just one step of a user’s workflow.</p>

      <h3>Interviews</h3>
      <p>We spoke to local reporters at The Stanford Daily and industry reporters to gain greater understanding of their workflow and how transcription fits into it.
</p>
      <p>We gained these insights:</p>
      <ul>
        <li>Before doing an interview or attending an event, reporters <b>conduct research</b> to gain context about their subject.</li>
        <li>While recording audio at these events, they <b>limit the presence of electronic devices</b> to avoid distracting others.
</li>
        <li>Journalists usually <b>take handwritten notes</b> when interviewing to make note of important points, and they often include timestamps.
</li>
        <li>Student journalists <b>record audio during interviews</b> and <b>transcribe it later with automated transcription software</b></li>
        <li>Journalists <b>use their notes to locate key sections</b> of the interview/transcript to incorporate into their story.
</li>
        <li>Many journalists store quotes from transcripts in their own makeshift "<b>quote banks</b>,” which they draw on when writing.
</li>
      </ul>
      <p>Our results and technical abilities led us to focus on creating an <b>unintrusive web transcription tool that helps journalists identify important information in their audio to use in their stories</b>.</p>

      <h3>Journey Mapping</h3>
      <p>With the insights from our research, I mapped out a reporter’s typical writing process to identify opportunities for our tool to help.</p>
      <img src={JourneyMap} className="shadow" />

      <h2>Design</h2>
      <h3>Ideation</h3>
      <p>After learning about journalists’ transcription needs and processes, we brainstormed and discussed ideas for features that would be useful for a reporter before, during, and after transcribing. Beyond the main functionality of transcribing audio, we decided to focus on these features:
</p>
      <ul>
        <li><b>Quote bank</b> for saving and storing notable quotes </li>
        <li><b>News search</b> for finding related published stories </li>
        <li><b>Correctional interface</b> for editing the automated transcript</li>
        <li><b>Conversion of handwritten notes to digitized text</b> that links back to the transcript using computer vision</li>
      </ul>
      <p>We considered many other ideas but ultimately chose these to fit within time and technical constraints.</p>

      <h3>User Feedback</h3>
      <p>We conducted a survey to learn more about journalists’ processes and what they thought of our ideas. From the respondents, we learned that:</p>
      <div className="box-container">
        <div className="box"><div>Transcription is the most time-consuming part of their writing process.</div></div>
        <div className="box"><div>Most of them currently use automated transcription software.</div></div>
        <div className="box"><div>All of them replay parts of their audio to collect exact quotes for their stories.</div></div>
        <div className="box"><div>They take notes during interviews and would use a digital note-taking feature.</div></div>
        <div className="box"><div>All reported that a quote bank would be useful and that they would use it.</div></div>
      </div>

      <h3>Prototypes</h3>
      <p>I created sketches and prototypes for our team to get an idea of the application’s visual structure and technical requirements.</p>
      <div className="large-overflow">
        <div className="image-row">
          <img src={Sketch} className="shadow" />
          {/*<img src={LowFi} className="shadow" />*/}
          <img src={HiFi} className="shadow" />
        </div>
      </div>

      <h3>Usability Testing</h3>
      <p>After beginning development, I conducted usability testing with journalists. I asked them to complete a series of tasks while expressing their thoughts out loud as well as questions about their experiences with transcribing audio.
</p>
      <img src={Test1} className="shadow" />
      <div className="small-text">Interface presented to users in the first round of testing</div>
      <img src={Test2} className="shadow" />
      <div className="small-text">Interface presented to users in the second round of testing</div>

      <p>I found that:</p>
      <ul>
        <li>Users <b>liked the quote bank</b> and had no trouble using it.</li>
        <li>To search for related news, they always used the search box instead of the “Search Highlighted Words” button.</li>
        <li>A technical bug caused the quotes in the quote bank to be wiped out whenever the user switched to a different tab.</li>
        <li>They <b>expressed desire to save or pin the news articles</b> they found for later.</li>
      </ul>
      <p>As a result of these findings, I made changes to the design and code.</p>


      <div className="full-width section-container gray">
        <div className="project">
          <h2>Development</h2>

          <h3>Choosing the Foundations</h3>
          <p>Leaflet was made with a <b>React frontend and Python backend</b>. We also drew upon <b>Flask, Semantic UI, Microsoft Computer Vision, Google Speech-to-Text, and News API</b>.</p>
          <p>We used React for the foundation of the interface and Semantic UI for basic visual components such as buttons, icons, and input. Due to time constraints, we were unable to change the default font, font sizes, and a few other aesthetic elements to be exactly like our planned design, but Semantic UI did heavily streamline our frontend development.
</p>

          <h3>Programming the Functionalities</h3>
          <p>That left a daunting task ahead of me: programming and manipulating the backend to curate the content we wanted to display. <b>Computer vision for converting images of handwritten notes into digitized text was the first feature I implemented</b>. After testing and researching different computer vision APIs that could recognize written characters, I chose Microsoft’s for its low cost and relatively high accuracy. I created a Python script to communicate with the API and used Flask to pass in images users uploaded to the interface. </p>
          <p>To implement automated transcription, I followed a similar process. I selected Google’s Speech-to-Text for video API as it seemed to be the most accurate free service. Additionally, it provided useful features like speaker separation. With the data sent from the API, I was able to <b>implement specialized audio features to help users navigate the transcript and audio</b>. These included transcript-audio word matching (click on a word in the transcript and the corresponding audio plays), live highlighting (the word being played gets highlighted), visual separation of speakers, and more.</p>
          <img src={Code} />
          <a href="https://github.com/chloebarreau/leafletnotebook/commits/master" target="_blank" className="btn-big">View GitHub</a>
        </div>
      </div>
      <h2>Final Product</h2>
      <p>After weeks of furious developing, we created the final version of Leaflet: a modern transcription application designed to help journalists at every stage of their writing process.</p>
      <img src={LeafletFinal} className="shadow" />

      <h3>Transcription</h3>
      <p>Journalists can upload an audio file and receive an automated transcript quickly.</p>
      <img src={Transcription} className="shadow" />

      <h3>Playback Tools</h3>
      <p>Journalists can easily verify quotes by clicking on a word, which will play the audio from that word. An audio player and keyboard shortcuts also help journalists navigate through their recording.</p>
      <img src={Audio} className="shadow" />

      <h3>Digital Notes</h3>
      <p>Journalists can upload an image of handwritten notes they took during the recording. Leaflet uses computer vision to digitally link each note to the corresponding section of the transcript. </p>
      <img src={Notes} className="shadow reduce-size center-image" />

      <h3>Quote Bank</h3>
      <p>Journalists can store important quotes within the transcript to use later when writing their story.</p>
      <img src={QuoteBank} className="shadow reduce-size center-image" />

      <h3>Related News </h3>
      <p>Journalists can quickly find out the latest news on any topic.</p>
      <img src={RelatedNews} className="shadow reduce-size center-image" />
      <p>They can drag and drop these news stories into the transcript to pin them for future reference.</p>
      <img src={NewsPin} className="shadow" />
      <img src={NewsPinOpen} className="shadow" />

      <h3>Text Editor</h3>
      <p>Journalists can edit the transcript, rearrange quotes, and even begin writing their story.</p>
      <img src={TextEditor} className="shadow" />

      <p>Check out a more detailed report of our process:</p>
      <a href={Report} target="_blank" className="btn-big">Full Report</a>
    </div>)
}

export default Leaflet;
