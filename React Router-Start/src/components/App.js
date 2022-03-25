import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Switch } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import About from './About'
import Teachers from './Teachers'
import Courses from './Courses'
import NotFound from './NotFound';
import Featured from './Featured';
const App = () => {
  return(
    <BrowserRouter>
    
      <div className="container">
      <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/teachers' element={<Teachers />}></Route>
          <Route path='/teachers/:name/:topic' element={<Featured />}></Route>
          <Route path='/courses/*' element={<Courses />}></Route>
          <Route path='/courses' element={<Navigate to='/courses/html'></Navigate>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<NotFound />}></Route>

        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App;