
import React from 'react'
import { useState, useEffect } from 'react';


function Stopwatch(){

    // state = {
    //     isRunning : false,
    //     elapsedTime : 0,
    //     previousTime: 0

    // }

    const [isRunning, setIs] = useState(false)
    // const [elapsedTime, setElapsedTime] = useState(0)
    // const [previousTime, setPreviousTime] = useState(0)
    const [second , setSecond] = useState(0)

  

        useEffect(()=>{
            if(isRunning){

                const interval = setInterval(() => {
                    setSecond(second+1)
                // //   setSecond(a)
                // //   console.log(a);
                //     // console.log(a);
                }, 1000);
        
                return ()=>clearInterval(interval)

            }
            // if (!isRunning) {
            //     // console.log(!isRunning);
            //     clearInterval(stopwatch)
            // }
        },[isRunning, second])
        

    // componentWillUnmount(){
    //     clearInterval(this.intervalID)
    // }

    // const tick = () =>{
    //     if(isRunning){
    //         setSecond(second + 1)
    //         // this.setState(prevState =>({
    //         //     previousTime: now,
    //         //     elapsedTime : prevState.elapsedTime + (now - prevState.previousTime)
    //         // }))
    //     }
    // }

    const handleStopwatch = () =>{
        setIs(!isRunning)
        setSecond(second)

      
        // console.log('gi');
        // this.setState(prevState=>{
        //     return {isRunning : !prevState.isRunning}
        // })
        // if (!isRunning) {
        //     setPreviousTime(Date.now())
        //     // this.setState(prevState=>({
        //     //     previousTime: Date.now()
        //     // }))
        // }
        // console.log(isRunning);
    }

 


    



   
    // function btnReset(sda){

    //     clearInterval(sda)

    // }

        // const a = Math.floor(elapsedTime/100)

        return(
        <div className="stopwatch">
                <h2 >Stopwatch</h2>
                <div className="stopwatch-time">{second}</div>
                <button id='stopwatch-start' onClick={handleStopwatch}>{isRunning? "STOP":"START"}</button>
                <button onClick={()=>{
                    
                    setSecond(0)
                }}>RESET</button>
        </div>
        )
    
}


export default Stopwatch