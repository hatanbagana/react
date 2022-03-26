import React from 'react'
import Gif from './Gif'

export default function Giflist(props) {
   
// console.log(props.data);
  return (
    <ul className='gif-list'>
      {/* {props.data == 'zl2'? "Loading...": props.data.map(e=> <Gif data={props.data} url={e.images.fixed_height.url} key={e.id}/>   )} */}
        {props.data.map(e=> <Gif data={props.data} url={e.images.fixed_height.url} key={e.id}/>   )}
         </ul>
  )
}
