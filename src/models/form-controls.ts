
export interface ControlProps {
    type?: string,
    classname?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    value?: string,
    id?: string,
    inputRef?: (inputElement: HTMLElement) => void;
}

export interface InputFieldProps extends ControlProps {
    name: string,
    label?: string,
    placeholder?: string,
    isFocus?: boolean
}
