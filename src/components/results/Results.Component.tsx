import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';

import { SearchResult } from '../../types';
import { getMovieData } from '../../helpers';
import Message from '../message/Message.Component';

import { handleSearch } from '../../features/searchSlice';
import { useDispatch } from 'react-redux';

const Results: React.FC = () => {

    const title = useSelector((state: RootState) => state.search.value);
    const [result, setResult] = useState<SearchResult | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const movieData = await getMovieData('t', title);
                setResult(movieData);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (title) fetchData();
    }, [title]);

    const displayContent = () => {
        if (loading) return (<Message text='Loading...'/>);
        if (error) return (<Message text={error}/>);
        if (result && result.Response === 'False') return (<Message text={result.Error}/>);
        if (result) return (
            <div className='movie-preview flex'>
                {result.Poster !== 'N/A' && <img src={result.Poster} className='w-24' alt={`Poster of the ${result.Title} movie`} />}
                <div className='movie-info ps-4 pe-4 flex flex-col justify-between items-start'>
                    <div className='movie-info__title text-xl font-bold'>{result.Title}</div>
                    {result.Year !== 'N/A' && <div className='movie-info__year'>{result.Year}</div>}
                    {result.Actors !== 'N/A' && <div className='movie-info__actors'>{result.Actors}</div>}
                    <Link className='movie-info__link border rounded p-3 bg-emerald-300' to={`movie/${result.imdbID}`} onClick={() => dispatch(handleSearch(''))}>Read more</Link>
                </div>
            </div>
        )
    }

    return (
        <div className='search-result'>
            <h2 className='text-gray-700 text-sm font-bold mb-2'>Search results:</h2>
            <div className='border shadow rounded p-4 h-44'>
                {displayContent()}
            </div>
        </div>
    )
}

export default Results;