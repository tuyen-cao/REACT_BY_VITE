import { InputFieldProps } from '@/models';
import parse from "html-react-parser";


export function CheckboxField({ name, label }: InputFieldProps) {

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
