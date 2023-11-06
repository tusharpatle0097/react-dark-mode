// App.js
import React from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from '../src/components/Navbar';
import Content from '../src/components/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import About from './components/About';
import Login from './components/childComponents/Login';

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Content />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>

          </Routes>
        </BrowserRouter>

        {/* <Content /> */}
      </div>
    </DarkModeProvider>
  );
}

export default App;

