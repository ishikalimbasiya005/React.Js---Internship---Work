import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Task-1_2/Profile';
import Body from './Task-1_2/Body';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/profile" element={<Profile/> }/>
      </Routes>
      </BrowserRouter>
      

  </>
);

