import React from 'react';
import ReactDOM from 'react-dom';

let players = [
    {
        name: "Hatnaa",
        score: 12,
        id: 1
    },
    {
        name: "Hatnaa",
        score: 12,
        id: 2
    },
    {
        name: "Hatnaa",
        score: 12,
        id: 3
    },
    {
        name: "Hatnaa",
        score: 12,
        id: 4
    },
    {
        name: "Hatnaa",
        score: 12,
        id: 5
    },
    {
        name: "Hatnaa",
        score: 12,
        id: 6
    },
]



const Player = () =>{

}
const Counter = () =>{

}
const Header = () =>{

}
    
const App = (props) =>{
    return(
        <div className="scoreboard">
            hi

        </div>

    )
}

console.log('hi');




ReactDOM.render(<App gamePlayers  = {players} />, document.getElementById("root"));