import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { saveMovieSearch } from '../../features/movieSlice';
import { Link } from 'react-router-dom';
import { getMovieData } from '../../helpers';

const MovieDetails: React.FC = () => {

    const { id } = useParams<{ id: string | undefined }>();
    const savedMovies = useSelector((state: RootState) => state.savedMovies.movies);
    const movieById = savedMovies.find((movie) => movie.imdbID === id);
    const [movie, setMovie] = useState(movieById ? movieById : null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            try {
                if (!movie && id) {
                    const movieData = await getMovieData('i', id);
                    setMovie(movieData);
                    dispatch(saveMovieSearch(movieData));
                } else if (movieById) {
                    dispatch(saveMovieSearch(movieById));
                } else {
                    throw new Error('Failed To Load Data');
                }
            } catch (error: any) {
                console.error('Failed to fetch movie data', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [movie]);

    return (
        <main className='container p-6 mx-auto'>
            {loading && <span>Loading...</span>}
            {error && <span>{error}</span>}
            {movie &&
                <>
                    <div className='movie-information flex w-full'>
                        <div className='movie-information__poster w-80 shrink-0	'>
                            <img src={movie.Poster} alt={`Poster of the ${movie.Title} movie`} />
                        </div>
                        <div className='movie_information__details ps-4 pe-4' style={{ width: 'calc(100% - 20rem)' }}>
                            {Object.entries(movie).filter((data) => data[1] !== 'N/A' && typeof data[1] === 'string').map((key, index) => {
                                return (
                                    <div className='movie-information__data-row' data-name={key[0]} key={index} style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        <span className='font-bold'>{key[0]}: </span>
                                        <span>{key[1]}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='movie_information__back'>
                        <Link to={'/'} className='border rounded p-3 bg-emerald-300'>Back To Search</Link>
                    </div>
                </>
            }
        </main>
    )
}

export default MovieDetails;