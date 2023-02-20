import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Card from './pages/Card';
import NotFoundError from './pages/NotFoundError';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Card />} />
          <Route path="*" element={<NotFoundError />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
