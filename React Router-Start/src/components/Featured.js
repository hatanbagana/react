import React from 'react';
import {useParams} from 'react-router-dom'

const Featured = () => {
  let param = useParams()
  console.log(param);

  return (
    <div className="main-content">
      <h2>Featured: </h2>
      <p>Introducing <strong>{param.name}</strong>, a teacher who loves teaching courses about <strong>{param.topic}</strong>!</p>
    </div>
  );
}

export default Featured;