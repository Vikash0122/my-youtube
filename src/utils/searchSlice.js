import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload) // merging the objects
        }
    }
});


export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;