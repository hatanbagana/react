import React from 'react'


const Counter =(props) => {
    // state = {
    //   score: this.props.score,
    //   incrementScore : this.props.incrementScore,
    //   dicrementScore : this.props.dicrementScore
    // };
    // render() {
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
    // }
  }

  export default Counter