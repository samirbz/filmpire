import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState: {
        genreIdOrCategoryName: '',
        page: 1,
        searchQuery: '',
    },
    reducers: {
        selectGenreIdOrCategory: (state, action) => {
            console.log(action.payload)
            state.genreIdOrCategoryName = action.payload;
        },
        searchMovie: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { selectGenreIdOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
