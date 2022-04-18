import React from "react";
import { useState, useEffect } from "react";

function Stopwatch() {
  const [isRunning, setIs] = useState(false);

  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSecond(second + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, second]);

  const handleStopwatch = () => {
    setIs(!isRunning);
    setSecond(second);
  };

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="stopwatch-time">{second}</div>
      <button id="stopwatch-start" onClick={handleStopwatch}>
        {isRunning ? "STOP" : "START"}
      </button>
      <button
        onClick={() => {
          setSecond(0);
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default Stopwatch;
