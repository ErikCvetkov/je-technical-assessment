import React from 'react';

import { useDispatch } from 'react-redux';
import { handleSearch } from '../../features/searchSlice';

const Form: React.FC = () => {

    const dispatch = useDispatch();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(handleSearch(e.target.value));
    }

    return (
        <form>
            <div className='mb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
                    Search By Title
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Movie Title" onChange={(e) => handleInput(e)} />
            </div>
        </form>
    )
}

export default Form;