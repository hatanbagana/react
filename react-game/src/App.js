
import { useEffect, useState } from 'react';
import './App.css';
import {Table} from 'react-bootstrap'


function App() {

  const [data , setData] = useState([])

  useEffect(()=>{

    fetch('http://localhost:3000')
    .then(res => res.json())
    .then(data => {
      setData(data.Data)
      // console.log(data.Data);
    })
  }, [])
  return (
    <div className="App">
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Ner</th>
      <th>Nas</th>
      <th>Huis</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {data.map((person, index)=>{
      return(

      <tr>
        <td>{index+1}</td>
        <td>{person.name}</td>
        <td>{person.Age}</td>
        <td>{person.gender}</td>
        <td>{person.status}</td>
      </tr>
      )
    })}
  </tbody>
</Table>

    </div>
  );
}

export default App;
