import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { Link } from 'react-router-dom';

const PreviousResults: React.FC = () => {
    const savedMovies = useSelector((state: RootState) => state.savedMovies.movies);
    return (
        <>
            <header className='text-gray-700 text-sm font-bold mb-2'>
                Previous results
            </header>
            <div className='container flex flex-col shadow appearance-none border rounded w-full py-2 px-3'>
                {savedMovies.length === 0 && <span>No previus results yet</span>}
                {savedMovies && savedMovies.map((movie, index) => (
                    <Link to={`movie/${movie.imdbID}`} key={index}>
                        {index + 1}. {movie.Title}
                    </Link>
                ))}
            </div>
        </>

    )
}

export default PreviousResults;