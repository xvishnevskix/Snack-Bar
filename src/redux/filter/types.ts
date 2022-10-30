
export type Sort = {
    name: string,
    sortType: 'rating'
}

export interface FilterSliceState {
    searchValue: string,
    currentPage: number,
    category: number,
    selectedSort: Sort
}