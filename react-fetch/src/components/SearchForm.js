import React from 'react'

export default class SearchForm extends React.Component {
    state = {
        search: '',
    }
 changehandle = (e)=>{
    this.setState({search: e.target.value})

}
handesubmit = (e) =>{
    e.preventDefault()
    this.props.search(this.state.search)

}

render(){

    return (
      <form  className='search-form' onSubmit={this.handesubmit}>
      <label htmlFor="search" className='is-hidden'>Search</label>
          <input onChange={this.changehandle} name='search' type="search" placeholder='Search...'/> 
      <button type='submit' id='submit' className='search-button'>
          <i className='material-icons icon-search'></i>
      </button>
  
      </form>
    )
}
}
