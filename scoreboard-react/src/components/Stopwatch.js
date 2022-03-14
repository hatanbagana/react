import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react'


function Stopwatch(){
    let counter = 0
    

    function stopwatcha(a){
        document.querySelector(".stopwatch-time").innerHTML = a

    }


    function btnStart(timer){
        if(timer){

            let aas = setInterval(() => {
            
                console.log(counter);
                stopwatcha(counter++)
        
        
            }, 30000);
            return aas
        }else{
            // console.log(aas);
            clearInterval()
        }

         
        // if(reset){
        //     btnReset(sda)
        // }
        
    }
    // function btnReset(sda){

    //     clearInterval(sda)

    // }

return(
<div className="stopwatch">
          <h2>Stopwatch</h2>
          <div className="stopwatch-time">0</div>
          <button onClick={()=>btnStart(true)}>START</button>
          <button onClick={()=>btnStart(false)}>RESET</button>
        </div>
)
}


export default Stopwatch