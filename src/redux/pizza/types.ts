export type Pizza = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    count: number,
    sizes: number[],
    types: number[],
    category: number[],
    rating: number
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface PizzaSliceState {
    items: Pizza[],
    status: Status,

}
