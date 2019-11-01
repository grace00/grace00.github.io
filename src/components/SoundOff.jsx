import React from 'react';
import './styles.css';
import vrgame from './images/vrgamefull.png'

function JobsBoard() {
    return (
        <div className="project">
            <img src={vrgame} />
            <h1 className="projTitle">SoundOff</h1>
            <p className="subtitle">A VR sound game for kids.</p>

            <div className="row">
                <div className="column">
                    <h4>Duration:</h4><p>3 weeks</p>
                </div>
                <div className="column">
                    <h4>Teammates:</h4><p>Just me</p>
                </div>
            </div>
            <p>I believe the strongest emotional reactions to films are evoked with sound. The harp weeping as a character dies, the violins swelling during a kiss. But in movies, sound can be constrained to a flat screen. VR headsets like the Oculus Go, on the other hand, offer powerful spatial audio in addition to 360 visuals. When it came time to create a project in my class CS11: Intro to VR Design & Development, I wondered how I could make a VR experience with sound at its core.

            <h2>The Idea</h2>
            <p>I decided to create a game where players listen and try to pinpoint where audio cues are coming from. As children, we all learn the sounds animals make; it’s almost as important to our education as learning to tie our shoes. So my game was set on a farm. At the beginning of the game, players stand in the middle of a farm and hear sounds created by multiple sources. When they point and click a source, its sound stops: silence is golden.</p>

            <h2>Creation Process</h2>
            <p>To create the farm scene, I arranged several assets I found online and set up the lighting and camera positions. I connected the assets to sound clips, and configured them in Unity so that triggering the source would silence its sound.</p>

            <h2>Outcome</h2>
            <p>During my class’s demo day, several people tried out my game. I learned that the instructions were easy to miss, so in the future, I should try creating a separate screen with the instructions placed directly in front of players' eyes. People seemed to enjoy clicking the sounds away once they learned how the game worked.</p>
            </p>
        </div>
    );
}

export default JobsBoard;
