import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAuthState } from '@/models'

const initialState: IAuthState = {
    isUser: false
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state: IAuthState, action: PayloadAction<boolean>) => {
            state.isUser = action.payload
        }
    },
})

const { actions, reducer } = slice
export const { setUser } = actions
export default reducer

