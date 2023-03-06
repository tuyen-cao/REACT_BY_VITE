import { InputFieldProps } from '@/models';
import parse from "html-react-parser";


export function RadioField({ name, label, id, ...rest }: InputFieldProps) {

    return (<>
        {label !== undefined &&
            <label>{parse(label)}
                <input
                    name={name} id={id}
                    type="radio"
                    {...rest}
                />
                <span className="checkmark"></span></label>}
    </>
    )
}
