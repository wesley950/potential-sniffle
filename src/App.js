import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Trending from './components/Trending';
import New from './components/New';
import ThreadDetail from './components/ThreadDetail';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/trending/" element={<Trending />} />
          <Route path="/new/" element={<New />} />
          <Route path="/thread/:threadID/" element={<ThreadDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
