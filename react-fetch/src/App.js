import { render } from "@testing-library/react";
import React, {Component, useEffect, useState} from "react";
import Header from "./components/Header";
import './App.css'
import Main from "./components/Main";
import Gif from "./components/Gif";
import axios from "axios";




function App() {

  const [gifs, setGifs] = useState([]);
  const [sda, setSda] = useState([]);
  const [name1 , setName] = useState('')
  const [bool, setBool] = useState(true)
  // const [searchh, setSearch] = useState('')


  useEffect(() => {
    setBool(true)

    const fetchData = async () => {

      const data = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${name1}}&api_key=chskHp6aqKnDXIgz6KlaDIkg51LayRa1`)

  

      setGifs(data.data.data);

    }
  

    fetchData().then(console.log("Done.")).finally(()=>setTimeout(() =>  setBool(false), 1000)).then(console.log(bool))

      .catch(console.error);;
  }, [name1])

  const search = (name) =>{
      setName(name)
      // console.log(name1);
      
  }

  useEffect(()=>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=loading}&api_key=chskHp6aqKnDXIgz6KlaDIkg51LayRa1`)
    .then(data => setGifs(data.data.data))
  }, [])

  const handleHeader = () =>{
    setSda(1) 
    console.log('asdas');
  }



    // console.log(this.state.gifs);

    // console.log(this.state);

    return (
      <div className="App">
        {bool?  <img id="solosda" src={`https://media3.giphy.com/media/xTkcEQACH24SMPxIQg/200.gif?cid=aafa5636o4w42za6wgqpjgdbzwdcra7tm3h4qpwp4ivqdwmr&rid=200.gif&ct=g`} alt="sda" />: <Main data={gifs} /> }
        <Header search = {search} sda={handleHeader}/>
        {/* <Main data={gifs} /> */}
      </div>
    );
  
}

export default App;
