import React from 'react';
import Signup from './pages/Signup';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={ <Signup/>}/>
        </Routes>
      </Router>
      </>
  )
}

export default App
