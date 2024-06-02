import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/header/Header.Component';
import MovieDetails from '../../components/movieDetails/MovieDetails.Component';

const Movie: React.FC = () => {
    return (
        <>
            <Header text='🎬 Movie page' />
            <MovieDetails />
        </>
    )
}

export default Movie; 