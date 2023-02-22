import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { BasketItem, ProductsState } from '@/models'
import { RootState } from '@/redux/store'
import { formatCurrency } from '@/ultilities'



const initialState: ProductsState = {
    products: []
}

const slice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addToCart: (state: ProductsState, action: PayloadAction<BasketItem>) => {
            const product = state.products.find((product) => product.id === action.payload.id)
            if (product) {
                product.quantity = product.quantity + action.payload.quantity
            } else {
                state.products.push(action.payload)
            }
        },
        removeItem: (state: ProductsState, action: PayloadAction<number>) => {
            state.products = state.products.filter(p => p.id !== action.payload)
        },
        updateCart: (state: ProductsState, action: PayloadAction<BasketItem[]>) => {
            action.payload.map(item => {
                const product = state.products.find(p => p.id === item.id)
                if (product) product.quantity = item.quantity
            })
        }
    },
})

const { actions, reducer } = slice
export const { addToCart, removeItem, updateCart } = actions
export default reducer


export const numOfProducts = createSelector(
    (state: RootState) => state.product.products,
    (products) => {
        return products.reduce((preValue: number, product: BasketItem) => preValue + product.quantity, 0)
    }
)
export const getSubtotal = createSelector(
    (state: RootState) => state.product.products,
    (products) => formatCurrency.format(products.reduce(
        (preValue: number, prod: BasketItem) => preValue + prod.quantity * prod.price, 0))
)

export const productIdsAsString = createSelector(
    (state: RootState) => state.product.products,
    (products) => {
        let ids = ''
        products.map(p => ids += `id=${p.id}&`)
        return ids.slice(0, -1)
    }
)

export const getAllProductsInCart = (state: RootState) => {
    return state.product.products
};