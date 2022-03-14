import React from 'react'
import Header from './components/Header'
import Player from './components/Player'
import Addplayer from './components/Addplayer';
import './App.css';

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
      { name: "Sufail", score: 1, id: 1 },
      { name: "Sanjaa", score: 0, id: 2 },
      { name: "Sanchir", score: 10, id: 3 },
      { name: "Sumail", score: 0, id: 4 },
    ],
  };

  // addPlayer = () =>{
  //     this.setState((prevState) =>{
  //         return{
  //             player: prevState.player.push('aa')
  //         }
  //     })
  // }



  incrementScore = (id) => {

    this.setState(prevState =>{
      const updatedPlayer = [...prevState.player];
      const newPlayer = {...updatedPlayer[id]};
      console.log('ho');

      console.log(updatedPlayer);
      console.log(newPlayer);


      updatedPlayer[id].score =  newPlayer.score +=1
      return{
        player: updatedPlayer
      }

    })
    };

  dicrementScore = (id) => {
    this.setState(prevState =>{
      const updatedPlayer = [...prevState.player];
      const newPlayer = {...updatedPlayer[id]};
      console.log('ho');

      console.log(updatedPlayer);
      console.log(newPlayer);


      updatedPlayer[id].score =  newPlayer.score -=1
      return{
        player: updatedPlayer
      }

    })
  };


  addPlayer = (e) =>{
    let a = this.state.player.length;
    let b = this.state.player[a-1].id + 1
    e.preventDefault()
    let namee = document.getElementById("sdashunre").value
    this.setState((prevState) =>{
        let sda = Math.random()
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
        <Header title="scoreboard" totalPlayer={this.state.player.length}
        players ={this.state.player}
      />
        {this.state.player.map((player, i) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            id={player.id}
            index = {i}
            removePlayer={this.removePlayer}
            incrementScore = {this.incrementScore}
            dicrementScore = {this.dicrementScore}

          />
        ))}

          <Addplayer  function = {this.addPlayer}/>

        
      </div>
    );
  }
}




export default App;
