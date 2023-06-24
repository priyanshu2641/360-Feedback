import React from 'react';
import './App.css';
import Login from './Components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/signup';
import Main from './Components/main';



function App() {
  return (
    
    <div className="App">
    

      <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Main />} path="/main" />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
