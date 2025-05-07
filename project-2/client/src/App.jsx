import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from './components/Pay';
import Success from './components/Success';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Pay />}/>
            <Route path='/success' element={<Success />}/>
        </Routes>
    </Router>
  )
}

export default App;
