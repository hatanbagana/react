import React from 'react'
import Counter from './Counter'
import Crown from './Crown';


class  Player  extends React.Component{

  state = {
    name: this.props.name,
    boolen: false
  }
  

  
  show = () =>{

    this.setState(prevState=>{
      if(this.state.boolen){
        return {
          boolen: false
        }
      }
      else{
        return {
          boolen: true
        }
      }
    })
  }


    changeName = (e) =>{

    if(this.state.boolen){


      e.preventDefault()
 
      this.setState((prevState)=>{
        return{
          name: e.target.value,

        }
      })

    }



  }

  func_submit = () =>{


    this.setState(prevState=>{
     return{
       boolen: false
     }
    })
    this.props.changeName(this.state.name, this.props.id)
  }
  
  render(){

  const aa =
  <form id='formshuu' onSubmit={this.func_submit} >
    <input autoComplete='off' onSubmit={this.func_submit} onChange={this.changeName} id='sdashunree' type="text"  />
  </form>
  
  const bb = <span onClick={this.show} id={this.props.index}>{this.state.name}</span>

  // console.log(this.state.boolen);


  return (
    <div className="player">
      <div className="player-name">
        <button
          onClick={() => this.props.removePlayer(this.props.id)}
          className="remove-player"
        >
          ✖
        </button>
        <Crown 
      index = {this.props.index}
      id={this.props.id}
      ishighscore = {this.props.ishighscore}
      />
      {/* <span onClick={this.show} id={this.props.index}>{this.props.name}</span> */}
      {this.state.boolen? aa : bb}
      
      </div>
      <Counter 
      score={this.props.score}
      id={this.props.id}
      index = {this.props.index}
      incrementScore = {this.props.incrementScore} 
      dicrementScore = {this.props.dicrementScore}
      // crown = {this.props.crown} 
      />
    </div>
  );

}


  }
  

  export default Player