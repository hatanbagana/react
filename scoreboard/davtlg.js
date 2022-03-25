
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



const Player = (props) =>{
return(
    <Counter />
)
}
const Counter = (props) =>{

}
const Header = (props) =>{

}
    
const App = (props) =>{
    return(
        <div className="scoreboard">
            <Header />
            <Player />

        </div>

    )
}





ReactDOM.render(<App gamePlayers  = {players} />, document.getElementById("root"));