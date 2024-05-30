import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieState } from '../types';

const initialState: MovieState = {
    movies: [],
};

const movieSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        handleSearch: (state, action: PayloadAction<Object>) => {
            state.movies.push(action.payload);
        },
    },
});

export const { handleSearch } = movieSlice.actions;

export default movieSlice.reducer;