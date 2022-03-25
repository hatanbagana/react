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
      search: "",
    }
  }

  search = (name) =>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${name}}&api_key=chskHp6aqKnDXIgz6KlaDIkg51LayRa1`).then(data => this.setState({gifs: data.data.data}))
    
  }




  render(){

    // console.log(this.state.gifs);

    // console.log(this.state);

    return (
      <div className="App">
        <Header search = {this.search}/>
        <Main data={this.state.gifs} />
      </div>
    );
  }
}

export default App;
