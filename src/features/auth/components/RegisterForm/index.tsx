import {
    CheckboxField,
    InputField,
    SubmitButton,
} from '@/components/form-controls';
import {
    EMAIL,
    EMPTY_STRING,
    ERROR_AUTH_CONFIRM_PASSWORD,
    ERROR_AUTH_DISPLAY_NAME,
    ERROR_AUTH_PASSWORD,
    ERROR_AUTH_USERNAME,
    ERROR_EMAIL,
    ERROR_EMAIL_INVALID,
} from '@/constants';
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
                <div className="form-outline mb-4">
                    <Controller
                        control={control}
                        name="registerName"
                        defaultValue={''}
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_AUTH_DISPLAY_NAME,
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_AUTH_DISPLAY_NAME,
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
                                message: ERROR_AUTH_USERNAME,
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_AUTH_USERNAME,
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
                                message: ERROR_EMAIL,
                            },
                            pattern: {
                                value: EMAIL,
                                message: ERROR_EMAIL_INVALID,
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
                                message: ERROR_AUTH_PASSWORD,
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_AUTH_PASSWORD,
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
                                message: ERROR_AUTH_CONFIRM_PASSWORD,
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_AUTH_CONFIRM_PASSWORD,
                            },
                            validate: {
                                messages: (value, formValues) =>
                                    value === formValues.registerPassword ||
                                    ERROR_AUTH_CONFIRM_PASSWORD,
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
                                errorMessage={
                                    errors?.registerRepeatPassword?.message
                                }
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
