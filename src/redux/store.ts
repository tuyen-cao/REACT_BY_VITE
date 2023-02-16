import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '@/features/products/slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';


// Use `configureStore` function to create the store:
export const store = configureStore({
    reducer: {
        // Specify our reducer in the reducers object:
        product: productsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;