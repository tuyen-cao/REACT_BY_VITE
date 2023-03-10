import BlackButton from '@/components/form-controls/BlackButton';
import { LoginFormProps, LoginPayload } from '@/models';
import SocialLogin from '../SocialLogin';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    CheckboxField,
    InputField,
    SubmitButton,
} from '@/components/form-controls';
import {
    EMPTY_STRING,
    ERROR_AUTH_LOGIN_NAME,
    ERROR_AUTH_PASSWORD,
} from '@/constants';

export default function LoginForm({
    onSubmit,
    onRegisterClick,
}: LoginFormProps) {
    const [validated, setValidatied] = useState('');

    const handleClick = () => {
        onRegisterClick(false);
    };
    const {
        control,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm<LoginPayload>({
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
                name="frmLogin"
                className={`${validated}  d-flex flex-column justify-content-center`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <SocialLogin />

                {/*<p className="text-center">or:</p> */}

                <div className="form-outline mb-4">
                    <Controller
                        control={control}
                        name="loginName"
                        defaultValue={''}
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_AUTH_LOGIN_NAME,
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_AUTH_LOGIN_NAME,
                            },
                        }}
                        render={({
                            field: { onChange, onBlur, ref, value },
                        }) => (
                            <InputField
                                label="Email or username"
                                placeholder="Email or username"
                                name="loginName"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                value={value}
                                errorMessage={errors?.loginName?.message}
                            />
                        )}
                    />
                </div>

                <div className="form-outline mb-4">
                    <Controller
                        control={control}
                        name="loginPassword"
                        defaultValue=""
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
                                name="loginPassword"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                value={value}
                                errorMessage={errors?.loginPassword?.message}
                            />
                        )}
                    />
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="form-check mb-3 mb-md-0">
                            <div className="checkout__input-checkbox">
                                <Controller
                                    control={control}
                                    name="loginCheck"
                                    defaultValue={true}
                                    render={({
                                        field: { onChange, onBlur, ref, value },
                                    }) => (
                                        <CheckboxField
                                            label="Remember me"
                                            name="loginCheck"
                                            onBlur={onBlur} // notify when input is touched
                                            inputRef={ref}
                                            onChange={onChange}
                                            checked={value}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <SubmitButton cssClass="site-btn w-50 align-self-center">
                    <>Submit</>
                </SubmitButton>
                <div className="text-center">
                    <p>
                        Not a member?{' '}
                        <button className="btn btn-link" onClick={handleClick}>
                            Register
                        </button>
                    </p>
                </div>
            </form>
        </>
    );
}
