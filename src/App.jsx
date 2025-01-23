import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserGrid from './components/UserGrid';
import UserDetail from './components/UserDetail';


const App = () => {

  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<UserGrid />}/>
        <Route path="/:userId/schedule" element={<UserDetail />}/>
      </Routes>
      
    </div>
  );
};

export default App;
