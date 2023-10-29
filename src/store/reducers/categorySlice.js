import { createSlice } from "@reduxjs/toolkit";

export const categories = {
    All: 'ALL',
    Active: 'ACTIVE',
    Completed: 'COMPLETED',
}
const categorySlice = createSlice({
    name: 'categories',
    initialState: categories.All,
    reducers: {
        filterdBy(state, action) {
           return action.payload
        },
    }
})

export const { filterdBy } = categorySlice.actions;
export default categorySlice.reducer;