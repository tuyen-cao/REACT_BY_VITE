import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAuthState, IUserInFo } from '@/models'
import { RootState } from '@/redux/Store'

const initialState: IAuthState = {
    isUser: false,
    setting: {
        accessToken: "",
        user: {
            email: "",
            username: "",
            password: "",
            displayName: "",
            id: 0
        }
    }
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state: IAuthState, action: PayloadAction<boolean>) => {
            state.isUser = action.payload
        },
        setUserLogin: (state: IAuthState, action: PayloadAction<IUserInFo>) => {
            state.setting = action.payload
        }
    },
})

const { actions, reducer } = slice
export const { setUser, setUserLogin } = actions
export default reducer

export const isLogin = (state: RootState) => {
    return Boolean(state.auth.setting.user.id)
};
