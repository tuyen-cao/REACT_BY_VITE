import { InputFieldProps } from '@/models';
import parse from 'html-react-parser';

export function CheckboxField({
    name,
    label,
    errorMessage,
    ...rest
}: InputFieldProps) {
    return (
        <>
            {label !== undefined && (
                <label htmlFor={name}>
                    {parse(label)}
                    <input name={name} id={name} type="checkbox" {...rest} />
                    <span className="checkmark"></span>
                </label>
            )}
            <div className="invalid-feedback">{errorMessage}</div>
        </>
    );
}
