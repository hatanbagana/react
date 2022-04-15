import React, { useState } from 'react'
import Counter from './Counter'
import Crown from './Crown';


function  Player(props){

  
  const[name, setName] = useState(props.name)
  const[boolen, setBoolen] = useState(false)
  
  const show = (e) =>{

    if(boolen){
      setBoolen(false)
    }
    else{
      setBoolen(true)
    }


    e.target.focus()
  }


    const changeName = (e) =>{

      if (boolen) {
        e.preventDefault()
        setName(e.target.value)
      }


    e.target.focus()
  }

  const func_submit = (e) =>{


    setBoolen(false)
    props.changeName(name, props.id)
    e.target.focus()
  }
  


  const aa =
  <form id='formshuu' onSubmit={func_submit} >
    <input autoComplete='off' onChange={changeName} id='sdashunree' type="text"  />
  </form>
  
  const bb = <span onClick={show} id={props.index}>{name}</span>



  return (
    <div className="player">
      <div className="player-name">
        <button
          onClick={() => props.removePlayer(props.id)}
          className="remove-player"
        >
          ✖
        </button>
        <Crown 
      index = {props.index}
      id={props.id}
      ishighscore = {props.ishighscore}
      />
      {boolen? aa : bb}
      
      </div>
      <Counter 
      score={props.score}
      id={props.id}
      index = {props.index}
      incrementScore = {props.incrementScore} 
      dicrementScore = {props.dicrementScore}
      />
    </div>
  );

  }
  
  export default Player