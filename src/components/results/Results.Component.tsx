import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface SearchResult {
    Title: string;
    Poster: string;
    Plot: string;
}

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

    return (
        <div className='search-result'>
            <h2 className='text-gray-700 text-sm font-bold mb-2'>Search results:</h2>
            <div className='border shadow rounded p-4'>
                {loading && <span>Loading...</span>}
                {error && <span>Error: {error}</span>}
                {result && !loading && !error &&
                    <div className='movie-preview flex'>
                        <img src={result.Poster} className='w-40' alt={`Poster of the ${result.Title} movie`} />
                        <div className='movie-info ps-4 pe-4'>
                            <h3 className='text-xl font-bold'>{result.Title}</h3>
                            {}
                            <button>Read more</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Results;