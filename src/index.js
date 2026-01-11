import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Task-1/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Task-1/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/profile" element={<Profile/> }/>
      </Routes>
      </BrowserRouter>
      

  </>
);

