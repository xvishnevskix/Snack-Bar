import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentPage: 1,
    category: 0,
    selectedSort: {name: 'популярности', sortType: 'rating'}
}

const filterSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setCategoryId(state,action) {
            state.category = action.payload
        },
        setSelectedSort(state,action) {
            state.selectedSort = action.payload
        },
        setCurrentPage(state,action) {
            state.currentPage= action.payload
        }
    }
})

export const {setCategoryId, setSelectedSort,setCurrentPage} = filterSlice.actions
export default filterSlice.reducer