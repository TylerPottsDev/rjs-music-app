import React from 'react'
import Controls from './Controls';
import Details from './Details';

function Player(props) {
    return (
        <div className="c-player">
            <audio></audio>
            <h4>Playing now</h4>
            <Details song={props.song} />
            <Controls isPlaying={false} />
            <p>Next up: <span>{props.nextSong.title} by {props.nextSong.artist}</span></p>
        </div>
    )
}

export default Player
