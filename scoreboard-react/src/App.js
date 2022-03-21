import React from 'react'
import Header from './components/Header'
import Player from './components/Player'
import Addplayer from './components/Addplayer';
import Playerlist from './components/Playerlist';
import './App.css';
import { Provider } from './components/context';

// const player = [
//   { name: "Sufail", score: 12, id: 1 },
//   { name: "Sanjaa", score: 22, id: 2 },  
//   { name: "Sanchir", score: 34, id: 3 },
//   { name: "Sumail", score: 12, id: 4 },
// ];

// incrementScore = (id) => {
//   this.setState((prevState) => ({
//     player : [...prevState.player, prevState.player[id]['score']++]
//   }));
// };




class App extends React.Component {

  state = {
    player: [
      { name: "Sufail", score: 0, id: 1, bool: false},
      { name: "Sanjaa", score: 0, id: 2, bool: false },
      { name: "Sanchir", score: 0, id: 3, bool: false },
      { name: "Sumail", score: 0, id: 4, bool: false },
    ],
    maxScore: 0,
    id1: 0,
    id2: 0,

  };

  // Crown = () => {

  //   let a = this.state.player.map((e)=>{
    
  //     return Math.max(e.score)
  //   })
  //   let Max = Math.max(...a)

  //   this.setState((prevState) => {
  //     return { maxScore: true };
  //   });
    
  //   // console.log(Math.max(...a));


  //   this.state.player.map(e=>{
  //     if(Max == e.score && e.score !== 0){
  //       document.getElementById(`${e.id}a`).setAttribute('class', 'is-high-score')

  //       console.log(e.id);
  //   //     this.setState(prevState =>{
  //   //   const updatedPlayer = [...prevState.player];
  //   //   const newPlayer = {...updatedPlayer[id]};


  //   //   // console.log(updatedPlayer);
  //   //   // console.log(newPlayer);


  //   //   updatedPlayer[id].score =  newPlayer.score +=1
  //   //   return{
  //   //     player: updatedPlayer
  //   //   }

  //   // })
  //     }else{
  //       this.setState((prevState) => {
  //         return { id1: false };
  //       });
  //       document.getElementById(`${e.id}a`).setAttribute('class', '')
  //     }

  //   })
  //   // console.log(Max);



  //   // this.setState(prevState=>{
  //   //   return {id1: this.state.id[0].id}
  //   // })









  // }

  highscore = () =>{

      const score = this.state.player.map(p => p.score)
      const highscore = Math.max(...score)
      if(highscore > 0){
        return highscore
      }
      else{

        return null
      }



    
  }


  incrementScore = (id) => {

    
    
    this.setState(prevState =>{
      const updatedPlayer = [...prevState.player];
      const newPlayer = {...updatedPlayer[id]};
      
      
      // console.log(updatedPlayer);
      // console.log(newPlayer);
      
      
      updatedPlayer[id].score =  newPlayer.score +=1
      return{
        player: updatedPlayer,
      }
      
    })

    let a = this.state.player.map((e)=>{
    
      return Math.max(e.score)
    })
    let Max = Math.max(...a)


    };

  dicrementScore = (id) => {
    this.setState(prevState =>{
      const updatedPlayer = [...prevState.player];
      const newPlayer = {...updatedPlayer[id]};
      
      
      // console.log(updatedPlayer);
      // console.log(newPlayer);
      
      
      updatedPlayer[id].score =  newPlayer.score -=1
      return{
        player: updatedPlayer
      }
      
    })
    // this.Crown()
  };


  addPlayer = (e) =>{
    let a = this.state.player.length;
    let b = this.state.player[a-1].id + 1
    e.preventDefault()
    let namee = document.getElementById("sdashunre").value
    this.setState((prevState) =>{

          return{
              player : [...prevState.player, {name: namee, score: 0, id: b}]
              // player: [...prevState.player.score, '1'],
              // player: [...prevState.player.id, 10]

          }
       });

       document.getElementById("sdashunre").value = ''

  }

  removePlayer = (id) => {

    this.setState((prevState) => {
      return { player: prevState.player.filter((p) => p.id !== id) };
    });
  };

  


  render() {



    return (

      <div className="scoreboard">
      <Provider 
      value={this.state.player}>

        <Header title="scoreboard" totalPlayer={this.state.player.length}
        players ={this.state.player}
      />
        {/* {this.state.player.map((player, i) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            id={player.id}
            index = {i}
            removePlayer={this.removePlayer}
            incrementScore = {this.incrementScore}
            dicrementScore = {this.dicrementScore}
            ishighscore = {(this.highscore() == player.score)}
            // crown = {this.Crown}
            // bool = {this.state.id1? 'is-high-score' : null}
          />
          
        ))} */}
        <Playerlist 
        index={this.state.player.length} 
        removePlayer = {this.removePlayer}
        incrementScore = {this.incrementScore}
        dicrementScore = {this.dicrementScore}
        ishighscore = {this.highscore}
         />

          <Addplayer  function = {this.addPlayer}/>

      </Provider>

        
      </div>
    );

  }
}




export default App;
