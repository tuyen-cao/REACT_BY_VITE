import { InputFieldProps } from '@/models';
import { useRef, useEffect } from 'react'



export function InputField({ name, label, placeholder, isFocus, ...rest }: InputFieldProps) {
    const textInput = useRef(null);
    useEffect(() => {
        if (isFocus) textInput.current?.focus()
    }, [])
    return (<>
        {label !== undefined &&
            <label htmlFor={name}>{label}</label>}
        <input name={name} placeholder={placeholder} {...rest} ref={textInput} />
    </>
    )
}
