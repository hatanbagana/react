import { render } from "@testing-library/react";
import React, {Component} from "react";
import Header from "./components/Header";
import './App.css'
import Main from "./components/Main";
import Gif from "./components/Gif";
import axios from "axios";




class  App extends React.Component {


  constructor(){
    super();
    this.state = {
      gifs: [],
    }
  }

  componentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=chskHp6aqKnDXIgz6KlaDIkg51LayRa1')
    .then(response => response.json())
    .then((data) =>{

      this.setState({ gifs: data.data})
     

    }).catch((error)=>{
      console.log('error gfetching data and parsing data ', error);
    })
  }

  render(){

    // console.log(this.state.gifs);

    // console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Main data={this.state.gifs} />
      </div>
    );
  }
}

export default App;
