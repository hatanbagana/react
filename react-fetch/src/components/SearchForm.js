import React, {useEffect, useState} from 'react'

export default function SearchForm(props){
  

   const [search, setSearch] = useState()
 const changehandle = (e)=>{
    // this.setState({search: e.target.value})
    setSearch(e.target.value)

}
const handesubmit = (e) =>{
    e.preventDefault()
    props.search(search)

}



    return (
      <form  className='search-form' onSubmit={handesubmit}>
      <label htmlFor="search" className='is-hidden'>Search</label>
          <input onChange={changehandle} name='search' type="search" placeholder='Search...'/> 
      <button type='submit' id='submit' className='search-button'>
          <i className='material-icons icon-search'></i>
      </button>
  
      </form>
    )

}
