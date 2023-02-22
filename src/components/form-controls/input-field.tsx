import * as React from 'react';

export interface InputFieldProps {
    name: string,
    label?: string,
    placeholder?: string

}

export function InputField({ name, label, placeholder }: InputFieldProps) {
    return (<>
        {label !== undefined &&
            <label htmlFor={name}>{label}</label>}
        <input name={name} placeholder={placeholder} />
    </>
    )
}
