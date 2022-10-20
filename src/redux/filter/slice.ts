import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { FilterSliceState, Sort } from "../filter/types";
import {RootState} from "../store";



const initialState: FilterSliceState = {
    searchValue: '',
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
        setSearchValue(state,action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSelectedSort(state,action: PayloadAction<Sort>) {
            state.selectedSort = action.payload
        },
        setCurrentPage(state,action: PayloadAction<number>) {
            state.currentPage= action.payload
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            if (Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage);
                state.category = Number(action.payload.category);
                state.selectedSort = action.payload.selectedSort;
            } else {
                state.currentPage = 1;
                state.category = 0;
                state.selectedSort = {
                    name: 'популярности',
                    sortType: 'rating',
                };
            }
        }
    }
})

export const {setCategoryId, setSelectedSort,setCurrentPage, setFilters, setSearchValue} = filterSlice.actions
export default filterSlice.reducer