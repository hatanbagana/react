import React from 'react'

function List(props){
    // document.querySelector(".list").addEventListener("click", ()=>{
    //     console.log('hi');
    // })
    let i = 0;
    let too = props.counter
    

    function textDecoration(){
        if(i == 0){
    
          document.getElementById(props.id).style.textDecoration = 'line-through'
          
          i++
          too--
      }
      else{
          document.getElementById(props.id).style.textDecoration = 'none'
          i--
          too++
    
      }
      console.log(too);

      }






    return (
        <div className='list' >
            <div>
            
            <input type={"radio"} value={props.name} onClick={textDecoration}/>
            <label className='ms-2' id={props.id}>{props.name}</label>
            </div>
            <button onClick={()=>props.func(props.index)}>edit</button>
            
            
        </div>
    )
}

export default List;