
import React from 'react'


class Stopwatch extends React.Component{

    state = {
        isRunning : false,
        elapsedTime : 0,
        previousTime: 0

    }

    componentDidMount(){

        this.intervalID = setInterval(() => 
            this.tick()
        , 100);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    tick= () =>{
        if(this.state.isRunning){
            const now = Date.now()
            this.setState(prevState =>({
                previousTime: now,
                elapsedTime : prevState.elapsedTime + (now - prevState.previousTime)
            }))
        }
    }

    handleStopwatch = () =>{
        this.setState(prevState=>{
            return {isRunning : !prevState.isRunning}
        })
        if (!this.state.isRunning) {
            this.setState(prevState=>({
                previousTime: Date.now()
            }))
        }
        console.log(this.state.isRunning);
    }

 


    



   
    // function btnReset(sda){

    //     clearInterval(sda)

    // }
    render(){
        const a = Math.floor(this.state.elapsedTime/100)

        return(
        <div className="stopwatch">
                <h2 onClick={this.date}>Stopwatch</h2>
                <div className="stopwatch-time">{a}</div>
                <button id='stopwatch-start' onClick={this.handleStopwatch}>{this.state.isRunning? "STOP":"START"}</button>
                <button onClick={()=>{
                    this.setState(()=>{
                        return{
                            elapsedTime: 0
                        }
                    })
                }}>RESET</button>
        </div>
        )
    }
}


export default Stopwatch