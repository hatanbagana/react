import React from 'react'




export default function Header() {
  return (


    <div className='main-header'>
        <div className='inner'>
            <h1 className='main-title'>Search App</h1>
            <form  className='search-form'>
                <label htmlFor="search" className='is-hidden'>Search</label>
            <input type="search" placeholder='Search...'/> 
            {/* <img src="../icons8-search-24.png" alt="" /> */}
            </form>
        </div>

    </div>
    
  )
}
