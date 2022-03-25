import React from 'react'
import Text from './components/Text';
import './App.css';

class App extends React.Component {

  state = {

    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak',
    newText: []

  }



  test1 =( ) =>{
    this.setState({
      text: 'aa'
    })
    console.log(this.state.text);
  }
  

  test = ()=>{

    this.setState(()=>{
      let a = this.state.text
      const b = a.split(" ")
      
      
      

      return{
        newText : b
      }
      
    })
    
    console.log(this.state.newText);

  }

  check=()=>{

    let word = document.getElementById("text").value;
    console.log(word);

    for (let i = 0; i < this.state.newText.length;) {
      console.log(i);

      if(word == this.state.newText[i]){
        console.log('yes sda gj nre al yma');
        document.getElementById("text").value = '';
        i++
      }else{console.log('error...');}
      
    }
  } 

  render(){

    return(
      <div>
        <h1 onClick={()=>this.test()}>START</h1>
        
        {this.state.newText.map(e=>(
        <Text e = {e} />
        ))}
        <input type="text" id='text' onChange={this.check} />

      </div>

    )
  }
}

export default App;
