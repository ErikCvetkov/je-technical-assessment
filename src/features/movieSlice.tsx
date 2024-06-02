import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieState, SearchResult } from '../types';

const initialState: MovieState = {
    movies: [],
};

const movieSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        saveMovieSearch: (state, action: PayloadAction<SearchResult>) => {

            const id = action.payload.imdbID;
            const movieIndex = state.movies.findIndex(movie => movie.imdbID === id);

            if (movieIndex !== -1) {
                const movie = state.movies.splice(movieIndex, 1)[0];
                state.movies.unshift(movie);
            } else {
                state.movies.unshift(action.payload);
            }

            if (state.movies.length > 5) {
                state.movies.splice(5);
            }
        },
    },
});

export const { saveMovieSearch } = movieSlice.actions;

export default movieSlice.reducer;