import React from 'react'
import Gif from './Gif'

export default function Giflist(props) {
   

  return (
    <ul className='gif-list'>
      
        {props.data.map(e=> <Gif data={props.data} url={e.images.fixed_height.url}/>   )} </ul>
  )
}
