
export interface LoginPayload {
    email: string,
    password: string
}

export interface LoginFormProps {
    onSubmit: (payload: LoginPayload) => void
    onRegisterClick: (value: boolean) => void
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
    email: string,
    username: string,
    password: string,
    displayName: string,
}