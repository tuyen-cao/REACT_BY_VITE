
export interface LoginPayload {
    email: string,
    password: string
}

export interface LoginFormProps {
    onSubmit: (payload: LoginPayload) => void
}