import { createSelector, createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BasketItem, ProductsState } from '@/models'
import { RootState } from '@/redux/store'



const initialState: ProductsState = {
    products: []
}

const slice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addToCart: (state: ProductsState, action: PayloadAction<BasketItem>) => {
            state.products.push(action.payload)
        }
    },
})

const { actions, reducer } = slice
export const { addToCart } = actions
export default reducer


export const numOfProducts = createSelector(
    (state: RootState) => state.product.products,
    (products) => products.length

)
export const subtotal = createSelector(
    (state: RootState) => state.product.products,
    (products) => products.reduce(
        (preValue: number, prod: BasketItem) => preValue + prod.quantity * prod.price, 0)
)

export const getAllProductsInCart = (state: RootState) => {
    return state.product.products
};