import React from 'react'
import Counter from './Counter'
import Crown from './Crown';


class  Player  extends React.Component{

  state = {
    boolen: false
  }
  

  
  show = () =>{
    this.setState(prevState=>{
      return{
        boolen: true
      }
    })
  }

  changeName = () =>{
    return this.props.name
  }
  
  render(){
  const aa = <input type="text" onChange={this.changeName} value={this.changeName} />

  console.log(this.state.boolen);

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
      <span onClick={this.show} id={this.props.index}>{this.state.boolen? aa : this.props.name}</span>
      
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