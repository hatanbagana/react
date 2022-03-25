import React, { useState } from 'react'

function Test() {
  const[count, setCount]= useState(0);
console.log(count);

  return (<>
    <div>{count}</div>
    <button onClick={()=>setCount(count + 1)}>+</button>
    </>
  )
}

export default Test