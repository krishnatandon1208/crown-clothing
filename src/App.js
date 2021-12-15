import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Hats here</h1>
      <button onClick={() => navigate('/')}>HOME</button>
    </div>
  );
}

const JacketsPage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Jackets here</h1>
      <button onClick={() => navigate('/')}>HOME</button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/crown-clothing' element={<Homepage />} />
      <Route path='/shop/hats' element={<HatsPage />} />
      <Route path='/shop/jackets' element={<JacketsPage />} />
    </Routes>
  );
}

export default App;
