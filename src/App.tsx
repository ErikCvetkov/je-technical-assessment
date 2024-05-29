import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home.Route';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
