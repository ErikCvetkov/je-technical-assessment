import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';

import { SearchResult } from '../../types';

const Results: React.FC = () => {

    const title = useSelector((state: RootState) => state.search.value);
    const [result, setResult] = useState<SearchResult | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (title) fetchData();
    }, [title]);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=d51c3617&t=${title}}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResult(data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const displayContent = () => {
        if (loading) return (<span>Loading...</span>);
        if (error) return (<span>Error: {error}</span>);
        if (result && result.Response === 'False') return (<span>{result.Error}</span>);
        if (result) return (
            <div className='movie-preview flex'>
                {result.Poster !== 'N/A' && <img src={result.Poster} className='w-24' alt={`Poster of the ${result.Title} movie`} />}
                <div className='movie-info ps-4 pe-4 flex flex-col justify-between items-start'>
                    <div className='movie-info__title text-xl font-bold'>{result.Title}</div>
                    {result.Year !== 'N/A' && <div className='movie-info__year'>{result.Year}</div>}
                    {result.Actors !== 'N/A' && <div className='movie-info__actors'>{result.Actors}</div>}
                    <Link className='movie-info__link border rounded p-3 bg-emerald-300' to={`movie/${result.imdbID}`}>Read more</Link>
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