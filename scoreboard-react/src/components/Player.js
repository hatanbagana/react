import React from 'react'
import Counter from './Counter'

function Player(props) {
    return (
      <div className="player">
        <div className="player-namme">
          <button
            onClick={() => props.removePlayer(props.id)}
            className="remove-player"
          >
            ✖
          </button>
          {props.name}
        </div>
        <Counter 
        score={props.score}
        id={props.id}
        index = {props.index}
        incrementScore = {props.incrementScore} 
        dicrementScore = {props.dicrementScore} />
      </div>
    );
  }
  

  export default Player