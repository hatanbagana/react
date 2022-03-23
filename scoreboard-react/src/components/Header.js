import React from 'react'
import Stopwatch from './Stopwatch';
import Stats from './Stats';
function Header(props) {
  // console.log(props.player);
  let players = props.players;

  // let c = 0
  let totalScore =  players.reduce((a, players) => a + players.score, 0)

  // console.log(c);



    return (
      <header>
        <Stats totalPlayer = {props.totalPlayer}
        totalScore = {totalScore}/>
        {/* <div className="stats">

        <span > Total players: {props.totalPlayer}</span>
        <span > Total score: {props.totalScore()}</span>
        </div> */}
        <h1>{props.title}</h1>
        <Stopwatch />
        
      </header>
    );
  }

export default Header