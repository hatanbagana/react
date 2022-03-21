import React from 'react'
import propTypes from 'prop-types'


const Counter =(props) => {
      return (
        <div className="counter"> 
        <button
        className="counter-action increment"
        onClick={() => props.incrementScore(props.index)}
        


      >
        +
      </button>
         
          <span className="counter-score">{props.score}</span>
          <button
            className="counter-action decrement"
            onClick={() => props.dicrementScore(props.index)}

          >
            -
          </button>
        </div>
      );

  }
  // Counter.propTypes = {
  //   index : propTypes.number,
  //   score : propTypes.number,
  //   incrementScore : propTypes.func,
  //   dicrementScore : propTypes.func
  // }

  export default Counter