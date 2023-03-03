import { InputFieldProps } from '@/models';
import { useRef, useEffect } from 'react'
import parse from "html-react-parser";


export function CheckboxField({ name, label, placeholder, isFocus, ...rest }: InputFieldProps) {
    const textInput = useRef(null);
    useEffect(() => {
        if (isFocus) textInput.current?.focus()
    }, [])
    return (<>
        {label !== undefined &&
            <label htmlFor={name}>{parse(label)}
                <input
                    name={name} id={name}
                    type="checkbox"
                />
                <span className="checkmark"></span></label>}
    </>
    )
}
