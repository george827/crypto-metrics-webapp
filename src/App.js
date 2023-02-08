import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { CryptoContainer } from './components/CryptoContainer';
import { DetailsContainer } from './components/DetailsContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoContainer />} />
        <Route path="/detail/:id" element={<DetailsContainer />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
