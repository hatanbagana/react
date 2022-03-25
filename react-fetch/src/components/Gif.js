import React from 'react'

export default function Gif(props) {

console.log(props.url);
    return(
        <li className='gif-wrap'>

                <img src={props.url} alt="sda" />

        </li>
    )
}
