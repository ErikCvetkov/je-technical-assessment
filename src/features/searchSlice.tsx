import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    value: string;
}

const initialState: SearchState = {
    value: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        handleSearch: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { handleSearch } = searchSlice.actions;

export default searchSlice.reducer;