let Players = [
    {
        name : 'Hatnaa',
        score : 100,
        id : 1
    },
    {
        name : 'Hatnaa',
        score : 100,
        id : 2
    },
    {
        name : 'Hatnaa',
        score : 100,
        id : 3
    },
    {
        name : 'Hatnaa',
        score : 100,
        id : 4
    },
    {
        name : 'Hatnaa',
        score : 100,
        id : 5
    },
    {
        name : 'Hatnaa',
        score : 100,
        id : 6
    },
    {
        name : 'Hatnaa',
        score : 100,
        id : 7
    },
]


const root = document.getElementById("root")
const scoreboard = document.createElement("div")
const player = document.createElement("div")
const header = document.createElement("header")
player.setAttribute("id", "player")
scoreboard.setAttribute("class", "scoreboard")

function generateHTML(){
    Players.forEach(e => {
        
    });
    
}


root.appendChild(scoreboard)