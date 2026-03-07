import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componets/frontend/home';
import About from './componets/frontend/about';

import './assets/css/style.css';


function App() {
  return (
    <>
  <BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>
  </BrowserRouter>
    </>
  );
}

export default App;