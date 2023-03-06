import { InputFieldProps } from '@/models';
import { useRef, useEffect } from 'react'
import parse from "html-react-parser";


export function InputField({ name, label, placeholder, isFocus, ...rest }: InputFieldProps) {
    const textInput = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (isFocus) textInput.current?.focus()
    }, [isFocus])
    return (<>
        {label !== undefined &&
            <label htmlFor={name} >{parse(label)}</label>}
        <input name={name} id={name} placeholder={placeholder} {...rest} ref={textInput} />
    </>
    )
}
