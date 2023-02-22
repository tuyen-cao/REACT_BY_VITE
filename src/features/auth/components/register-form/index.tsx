
import { InputField, SubmitButton } from '@/components/form-controls';
import { LoginFormProps, LoginPayload } from '@/models';

import { useForm, Controller } from 'react-hook-form';

export default function RegisterForm({ onSubmit }: LoginFormProps) {

    const { control, handleSubmit } = useForm<LoginPayload>({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const loginSubmit = (payload: LoginPayload) => {
        onSubmit?.(payload)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(loginSubmit)}>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, ref } }) => (
                        <InputField
                            name="email"
                            label='Email'
                            placeholder='Email'

                            onBlur={onBlur} // notify when input is touched
                            onChange={onChange} // send value to hook form
                            inputRef={ref}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, ref } }) => (
                        <InputField
                            name="password"
                            label='password'
                            placeholder='password'

                            onBlur={onBlur} // notify when input is touched
                            onChange={onChange} // send value to hook form
                            inputRef={ref}
                        />
                    )}
                />



                <SubmitButton>Submit</SubmitButton>
            </form>
        </div>
    );
}
