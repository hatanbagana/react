import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./Components/Item";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App1() {
  const [array1, setArray1] = useState([
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "0"],
  ]);
  const [id1, setId1] = useState(0)

  function handleChange(id){
    setId1(id)
  }
  useEffect(()=>{
    console.log(id1);
    let row = array1.length;
    let col = array1[0].length;
    for (let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++){
            if(array1[i][j] == id1){
                console.log(i, j);
                
                let arrays =  array1
                arrays[i][j] = '0'
                console.log(arrays);
                setArray1(arrays)
                // console.log(array1);
            }
        }
        
    }
  }, [id1])


  return (
    <div>
      <div className="board">
        {array1.map((e) => (
          <Item value={e} key={e} func={handleChange}/>
        ))}
      </div>
    </div>
  );
}
