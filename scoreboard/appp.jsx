// const title = React.createElement(
//     "h1",
//     {
//       id: "sda",
//     },
//     "this is my first react element"
//   );
//   console.log(title);
  
//   const desc = React.createElement(
//     "h1",
//     {
//       id: "titleID",
//     },
//     "this is my first rea"
//   );
  
//   const header = React.createElement("header", null, title, desc);
  

//   const ha = <h1>sad</h1>

const players = [
    {
        name : 'hatnaa',
        score : 100,
        id: 1
    },
    {
        name : 'Anujin',
        score : 50,
        id: 2
    },
    {
        name : 'Naraa',
        score : 10,
        id: 3
    },
    {
        name : 'Tuvshuu',
        score : 70,
        id: 4
    },
    {
        name : 'Lhagvaa',
        score : 70,
        id: 5
    },
    {
        name : 'Bumaa',
        score : 100,
        id: 6
    },
]

const  Header = ()=>{
    return(


        <header>
              <h1>Scoreboard</h1>
              <p>Player 1</p>
          </header>
            

      )
}
    
const Counter = (props)=>{

    let score = props.scoree;

    // function func_score (){
    //     return score++
    // }
    // function func1_score (){
    //     return score--
    // }
    
    return(
    <div className="counter">
        <div className="counter-action decrement" onClick={(e=>{
            score++
            console.log(score);
        })}>+</div>
        <div className="counter-score">{score}</div>
        <div className="counter-action increment" onClick={(e=>{
            return score--
        })}>-</div>
    </div>


    )
}

const Player = (props) =>{
    return(

        <div className="player">
            <div className="player-name">{props.name}</div>

            <Counter scoree = {props.score}/>

        </div>
    )
}
    
const App = (props) =>{
        return(
            <div className="scoreboard">

                <Header />
                {props.gamePlayers.map(e=>{
                    return <Player
                     name={e.name} 
                     score={e.score} 
                     key = {e.id}
                     />
                })}


            </div>

        )
}




ReactDOM.render(<App gamePlayers = {players} />, document.getElementById("root"));
