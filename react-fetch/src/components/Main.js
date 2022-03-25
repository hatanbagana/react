import React from 'react'
import Giflist from './Giflist'

export default function Main(props) {

  return (
    <div className="main-content">
        <Giflist data ={props.data}/>
    </div>
  )
}
