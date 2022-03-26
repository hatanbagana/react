import { render } from "@testing-library/react";
import React, {Component, useEffect, useState} from "react";
import Header from "./components/Header";
import './App.css'
import Main from "./components/Main";
import Gif from "./components/Gif";
import axios from "axios";




function App() {

  const [gifs, setGifs] = useState([]);
  // const [searchh, setSearch] = useState('')


  const search = (name) =>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${name}}&api_key=chskHp6aqKnDXIgz6KlaDIkg51LayRa1`)
    .then(data => setGifs(data.data.data))
  }

  useEffect(()=>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=cat}&api_key=chskHp6aqKnDXIgz6KlaDIkg51LayRa1`)
    .then(data => setGifs(data.data.data))
  }, [])





    // console.log(this.state.gifs);

    // console.log(this.state);

    return (
      <div className="App">
        <Header search = {search}/>
        <Main data={gifs} />
      </div>
    );
  
}

export default App;
