import React from 'react'
import List from './components/List';
import './App.css';


class App extends React.Component{

  state = {
    player: [
      { name: "Sufail",  id:1, },
      { name: "Sanjaa",  id:2, },
      { name: "Sanchir", id:3, },
      { name: "Sumail",  id:4, },
    ],
  };




  counter  = (i)=>{
    
    let inp = document.getElementById("sdashunre")
    inp.setAttribute("placeholder", 'end bichne uu')
    let inp_val = inp.value

    console.log(i);

      this.setState((prevState) =>{
        const updatedName = [...prevState.player]
        const newName = {...updatedName[i]}

        console.log(updatedName);
        console.log(newName);

        updatedName[i].name = inp_val
        return{
          player: updatedName
        }
      })
    

      inp.value = ''
      inp.setAttribute("placeholder", 'Add your new todo')

  }
  
  addPlayer = () =>{
    console.log('hi');
    let namee = document.getElementById("sdashunre").value
    console.log(namee);
    this.setState((prevState) =>{
        let sda = Math.random()
          return{
              player : [...prevState.player, {name: namee,  id: sda}]
              // player: [...prevState.player.score, '1'],
              // player: [...prevState.player.id, 10]

          }
       });

       document.getElementById("sdashunre").value = ''

  }
  render(){

    return (
      <section>
        <h2>Todo App</h2>

        <form autocomplete="off">
            <input type="text" id='sdashunre' placeholder='Add your new todo' />
            <input type="button" value='+' id='inputbtn' onClick={this.addPlayer}/>
        </form>

        {this.state.player.map((e, i)=>{
          

        return  <List 
        name = {e.name}
        key={e.id} 
        id = {e.id}
        textDecoration = {this.textDecoration}
        counter = {this.state.player.length}
        index = {i}
        func = {this.counter}/>
        })}

      </section>
  
    )
  }
}

export default App;
