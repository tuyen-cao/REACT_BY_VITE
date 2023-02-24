import { InputFieldProps } from '@/models';



export function InputField({ name, label, placeholder, ...rest }: InputFieldProps) {
    return (<>
        {label !== undefined &&
            <label htmlFor={name}>{label}</label>}
        <input name={name} placeholder={placeholder} {...rest} />
    </>
    )
}
