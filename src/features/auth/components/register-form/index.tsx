
import { InputField, SubmitButton } from '@/components/form-controls';
import { LoginFormProps, LoginPayload } from '@/models';
import * as React from 'react';
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
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <InputField
                            name="email"
                            label='Email'
                            placeholder='Email'
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <InputField
                            name="password"
                            label='password'
                            placeholder='password'
                        />
                    )}
                />



                <SubmitButton>Submit</SubmitButton>
            </form>
        </div>
    );
}
