export interface IAuthState {
    isUser: boolean,
    setting: IUserInFo | null
}

export interface IUserInFo {
    accessToken: string,
    user: UserType
}


export interface LoginPayload {
    loginName: string,
    loginPassword: string,
    loginCheck: boolean
}

export interface LoginFormProps {
    onSubmit: (payload: LoginPayload) => void
}
export interface RegisterPayload {
    registerName: string,
    registerUsername: string,
    registerEmail: string,
    registerPassword: string,
    registerRepeatPassword: string,
    registerCheck: boolean,
}

export interface RegisterFormProps {
    onSubmit: (payload: RegisterPayload) => void
}
export interface UserType {
    email?: string,
    username?: string,
    password: string,
    displayName?: string,
    id?: number
}