import React from 'react'
import SearchForm from './SearchForm'




export default function Header(props) {
  return (


    <div className='main-header'>
        <div className='inner'>
            <h1 className='main-title'>Search App</h1>
            <SearchForm search={props.search}/>
        </div>

    </div>
    
  )
}
