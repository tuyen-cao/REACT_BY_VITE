import { InputFieldProps } from '@/models';
import { useRef, useEffect } from 'react';
import parse from 'html-react-parser';

export function InputField({
    name,
    label,
    placeholder,
    isFocus = false,
    errorMessage,
    ...rest
}: InputFieldProps) {
    const textInput = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (isFocus) textInput.current?.focus();
    }, [isFocus]);
    return (
        <>
            {label !== undefined && (
                <label htmlFor={name} className="form-label">
                    {parse(label)}
                </label>
            )}
            <input
                className="form-control"
                name={name}
                id={name}
                placeholder={placeholder}
                {...rest}
                ref={textInput}
            />

            <div className="invalid-feedback">{errorMessage}</div>
        </>
    );
}
