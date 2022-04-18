import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./Components/Item";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App1() {
  const [array1, setArray1] = useState([
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "0", "8"],
  ]);
  const [changed, setChanged] = useState(false);
  function shuffle(array) { 
    return array.sort(() => Math.random() - 0.5);
  }
  
  const [pos, setPos] = useState()

  useEffect(()=>{
    setArray1(array1.map(row=>shuffle(row)))
    setPos(findZeroClicked())
    // debugger
  },[])

  

  function handleChange(id,rowIndex,colIndex) {
    console.log(rowIndex,colIndex)
    if (validation(id,rowIndex,colIndex)) {
      // findPosClicked(id);
      // console.log(clicked)
      let temp = array1;
      let temp1 = temp[pos[0]][pos[1]];
      temp[pos[0]][pos[1]] = temp[rowIndex][colIndex];
      temp[rowIndex][colIndex] = temp1;

      setPos([rowIndex,colIndex])
      setArray1(temp);
      setChanged(!changed);
    }
  }


  function findZeroClicked() {
    let row = array1.length;
    let col = array1[0].length;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (array1[i][j] == "0") {
          return [i, j];
        }
      }
    }
  }

  function validation(id,row,col) {
    console.log("row = ", row)
    console.log("col = ", col)
    console.log('sdave');




    return true;
  }

  return (
    <div>

      <div className="board">
        {array1.map((row,rowIndex) =>
          row.map((col, i) => <Item key={i} data={col} rowIndex = {rowIndex} colIndex={i} func={handleChange} />)
        )}
      </div>
    </div>
  );
}
