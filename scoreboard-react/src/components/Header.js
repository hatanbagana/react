import React from 'react'

function Header(props) {
    console.log(props);
    return (
      <header>
        <h1>{props.title}</h1>
        <span className="stats"> {props.totalPlayer}</span>
      </header>
    );
  }

  export default Header