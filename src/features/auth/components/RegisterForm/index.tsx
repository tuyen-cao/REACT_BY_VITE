import {
    CheckboxField,
    InputField,
    SubmitButton,
} from '@/components/form-controls';
import { EMAIL, EMPTY_STRING } from '@/constants';
import { RegisterFormProps, RegisterPayload } from '@/models';
import { useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import SocialLogin from '../SocialLogin';

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
    const [validated, setValidatied] = useState('');
    const {
        control,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm<RegisterPayload>({
        mode: 'onChange',
        reValidateMode: 'onSubmit',
        shouldUseNativeValidation: false,
    });

    useEffect(() => {
        console.log(isValid);
        if (Object.keys(errors).length > 0 && !isValid)
            setValidatied('was-validated');
    }, [errors, isValid]);
    return (
        <>
            <form
                name="frmRegister"
                className={`${validated}  d-flex flex-column justify-content-center`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <SocialLogin />
                <p className="text-center">or:</p>
                <div className="form-outline mb-4">
                    <Controller
                        control={control}
                        name="registerName"
                        defaultValue={''}
                        rules={{
                            required: {
                                value: true,
                                message: ' registerName',
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: 'registerName',
                            },
                        }}
                        render={({
                            field: { onChange, onBlur, ref, value },
                        }) => (
                            <InputField
                                label="Display Name"
                                placeholder="Display Name"
                                name="registerName"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                value={value}
                                required
                                errorMessage={errors?.registerName?.message}
                            />
                        )}
                    />
                </div>

                <div className="form-outline mb-4">
                    <Controller
                        control={control}
                        name="registerUsername"
                        defaultValue={''}
                        rules={{
                            required: {
                                value: true,
                                message: ' registerUsername',
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: 'registerUsername',
                            },
                        }}
                        render={({
                            field: { onChange, onBlur, ref, value },
                        }) => (
                            <InputField
                                label="Username"
                                placeholder="Username"
                                name="registerUsername"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                value={value}
                                required
                                errorMessage={errors?.registerUsername?.message}
                            />
                        )}
                    />
                </div>

                <div className="form-outline mb-4">
                    <Controller
                        control={control}
                        name="registerEmail"
                        defaultValue={''}
                        rules={{
                            required: {
                                value: true,
                                message: 'Please enter the email',
                            },
                            pattern: {
                                value: EMAIL,
                                message: 'The email is not valid',
                            },
                        }}
                        render={({
                            field: { onChange, onBlur, ref, value },
                        }) => (
                            <InputField
                                label="Email"
                                placeholder="Email"
                                name="registerEmail"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                value={value}
                                required
                                type="email"
                                errorMessage={errors?.registerEmail?.message}
                            />
                        )}
                    />
                </div>

                <div className="form-outline mb-4">
                    <Controller
                        control={control}
                        name="registerPassword"
                        defaultValue={''}
                        rules={{
                            required: {
                                value: true,
                                message: ' Password',
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: 'Password',
                            },
                        }}
                        render={({
                            field: { onChange, onBlur, ref, value },
                        }) => (
                            <InputField
                                label="Password"
                                placeholder="Password"
                                name="registerPassword"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                value={value}
                                type="password"
                                required
                                errorMessage={errors?.registerPassword?.message}
                            />
                        )}
                    />
                </div>

                <div className="form-outline mb-4">
                    <Controller
                        control={control}
                        name="registerRepeatPassword"
                        defaultValue={''}
                        rules={{
                            required: {
                                value: true,
                                message: ' registerRepeatPassword',
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: 'registerRepeatPassword',
                            },
                        }}
                        render={({
                            field: { onChange, onBlur, ref, value },
                        }) => (
                            <InputField
                                label="Repeat password"
                                placeholder="Repeat password"
                                name="registerRepeatPassword"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                value={value}
                                type="password"
                                required
                                errorMessage={errors?.registerPassword?.message}
                            />
                        )}
                    />
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                    <div className="checkout__input-checkbox">
                        <Controller
                            control={control}
                            name="registerCheck"
                            rules={{
                                required: {
                                    value: true,
                                    message: ' registerCheck',
                                },
                            }}
                            defaultValue={false}
                            render={({
                                field: { onChange, onBlur, ref, value },
                            }) => (
                                <CheckboxField
                                    label="I have read and agree to the terms"
                                    name="registerCheck"
                                    onBlur={onBlur} // notify when input is touched
                                    inputRef={ref}
                                    errorMessage={
                                        errors?.registerCheck?.message
                                    }
                                    checked={value}
                                    required
                                    onChange={onChange}
                                />
                            )}
                        />
                    </div>
                </div>

                <SubmitButton cssClass="site-btn w-50 align-self-center">
                    <>Submit</>
                </SubmitButton>
            </form>
        </>
    );
}
