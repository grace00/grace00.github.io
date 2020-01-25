import React from 'react';
import './styles.css';
import splash from './images/news-app-v1/Splash@2x.png'
import followtopics from './images/news-app-v1/Follow Topics@2x.png'
import home from './images/news-app-v1/Home-1@2x.png'
import articleoptions from './images/news-app-v1/Article Options@2x.png'
import profileoptions from './images/news-app-v1/Profile Options@2x.png'

import article from './images/news-app-v1/Article@2x.png'
import articlediscussion from './images/news-app-v1/Article Discussion@2x.png'
import comment from './images/news-app-v1/Comment@2x.png'
import thread from './images/news-app-v1/Thread@2x.png'
import share from './images/news-app-v1/Share@2x.png'
import following from './images/news-app-v1/Following-1@2x.png'
import topic from './images/news-app-v1/Topic@2x.png'
import exploretrending from './images/news-app-v1/Explore Trending@2x.png'

import exploretopics from './images/news-app-v1/Explore Topics@2x.png'
import search from './images/news-app-v1/Search@2x.png'
import notifications from './images/news-app-v1/Notifications@2x.png'
import profile from './images/news-app-v1/Profile@2x.png'




function Novi() {
  return (
    <div className="project">

      <h1 className="projTitle">Novi</h1>
      <p className="subtitle">A social news app</p>

      {/*<div className="row">
                <div className="column-left">
                    <h4>Timeline</h4><span className="proj-detail">November 2019 - Present</span>
                </div>
                <div className="column">
                    <h4>Languages</h4><span className="proj-detail">Adobe XD</span>
                </div>
                <div className="column">
                    <h4>Tools</h4><span className="proj-detail">Figma, Qualtrics, Amazon Mechanical Turk, RStudio</span>
                </div>
            </div>
    */}
    <p>Full case study coming soon! Here's a sneak peek:</p>
      <div className="wireframe overflow">
        <div className="image-row">
          <img src={splash} />
          <img src={home} />
          <img src={articlediscussion} />
          <img src={exploretrending} />
          <img src={profile} />
          {/*}
          <img src={splash} />
          <img src={followtopics} />
          <img src={home} />
          <img src={articleoptions} />
          <img src={profileoptions} />
          <img src={article} />
          <img src={articlediscussion} />
          <img src={comment} />
          <img src={thread} />
          <img src={share} />
          <img src={following} />

          <img src={topic} />
          <img src={exploretrending} />
          <img src={exploretopics} />
          <img src={search} />
          <img src={notifications} />
  <img src={profile} />*/}
        </div>
      </div>

    </div>)
}

export default Novi;
