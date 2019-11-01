import React from 'react';
import './styles.css';

function JobsBoard() {
    return (
        <div className="project">
            <h1 className="projTitle">Job Tree</h1>
            <p className="subtitle">Designing and developing a more personalized jobs search experience for Stanford students (and my first website ever).</p>
            
            <div className="row">
                <div className="column">
                    <h4>Duration:</h4><p>In progress</p>
                </div>
                <div className="column">
                    <h4>Teammates:</h4><p>Just me</p>
                </div>
            </div>
            <p>Full case study coming soon! In the meantime, please check out a demo of what I've coded so far <a href="https://thestanforddaily.github.io/jobs-board/#/">here</a>!</p>
        </div>
    );
}

export default JobsBoard;
