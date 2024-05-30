import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home.Route';
import Movie from './routes/movie/Movie.Route';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
