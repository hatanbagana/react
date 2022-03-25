import React from 'react'

export default function SearchForm() {
  return (
    <form  className='search-form'>
    <label htmlFor="search" className='is-hidden'>Search</label>
        <input name='search' type="search" placeholder='Search...'/> 
    <button type='submit' id='submit' className='search-button'>
        <i className='material-icons icon-search'></i>
    </button>

    </form>
  )
}
