import { CheckboxField, InputField } from '@/components/form-controls';
import {
    DIGITS_ONLY,
    EMAIL,
    EMPTY_STRING,
    ERROR_ADDRESS,
    ERROR_CITY,
    ERROR_COUNTRY,
    ERROR_EMAIL,
    ERROR_EMAIL_INVALID,
    ERROR_FIRST_NAME,
    ERROR_LAST_NAME,
    ERROR_PHONE,
    ERROR_PHONE_INVALID,
    ERROR_REQUIRED,
    ERROR_STATE,
    ERROR_ZIPCODE_DIGITS_ONLY,
    ERROR_ZIPCODE_LENGTH,
    PHONE_NUMBER,
} from '@/constants';
import { CheckoutPayload } from '@/models';
import { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface CheckoutFormProps {
    handleFormSubmit: (payload: CheckoutPayload) => void;
    isSubmited: number;
}

export const CheckoutForm = ({
    isSubmited,
    handleFormSubmit,
}: CheckoutFormProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [validated, setValidated] = useState('');
    const {
        control,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm<CheckoutPayload>({
        reValidateMode: 'onSubmit',
        shouldUseNativeValidation: true,
        defaultValues: {
            firstName: 'string',
            lastName: 'string',
            country: 'string',
            address: 'string',
            addressapartment: 'string',
            city: 'string',
            state: 'string',
            zipcode: 'string',
            phone: 'string',
            email: 'string',
            acc: 'string',
            diffAcc: 'string',
        },
    });
    useEffect(() => {
        if ((isSubmited > 0 && formRef.current) || isValid) {
            formRef.current?.requestSubmit();
        }
        if (Object.keys(errors).length > 0) setValidated('was-validated');
    }, [errors, isSubmited, isValid]);

    const onSubmit = (payload: CheckoutPayload) => {
        handleFormSubmit?.(payload);
    };
    return (
        <>
            <form
                ref={formRef}
                name="frmCheckout"
                className={validated}
                onSubmit={handleSubmit(onSubmit)}
            >
                <h6 className="checkout__title">Billing Details</h6>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="checkout__input">
                            <Controller
                                control={control}
                                name="firstName"
                                defaultValue={''}
                                rules={{
                                    required: {
                                        value: true,
                                        message: ERROR_FIRST_NAME,
                                    },
                                    pattern: {
                                        value: EMPTY_STRING,
                                        message: ERROR_FIRST_NAME,
                                    },
                                }}
                                render={({
                                    field: { onChange, onBlur, ref, value },
                                }) => (
                                    <InputField
                                        label="Fist Name <span>*</span>"
                                        placeholder="First Name"
                                        name="firstName"
                                        required
                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                        value={value}
                                        errorMessage={
                                            errors?.firstName?.message
                                        }
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="checkout__input">
                            <Controller
                                control={control}
                                name="lastName"
                                rules={{
                                    required: {
                                        value: true,
                                        message: ERROR_LAST_NAME,
                                    },
                                    pattern: {
                                        value: EMPTY_STRING,
                                        message: ERROR_LAST_NAME,
                                    },
                                }}
                                render={({
                                    field: { onChange, onBlur, ref },
                                }) => (
                                    <InputField
                                        label="Last Name <span>*</span>"
                                        placeholder="Last Name"
                                        name="lastName"
                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                        isFocus={false}
                                        errorMessage={errors?.lastName?.message}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="checkout__input">
                    <Controller
                        control={control}
                        name="country"
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_COUNTRY,
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_COUNTRY,
                            },
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label="Country <span>*</span>"
                                placeholder="Country"
                                name="country"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                isFocus={false}
                                errorMessage={errors?.country?.message}
                            />
                        )}
                    />
                </div>
                <div className="checkout__input">
                    <Controller
                        control={control}
                        name="address"
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_ADDRESS,
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_ADDRESS,
                            },
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label="Street Address <span>*</span>"
                                placeholder="Street Address"
                                name="address"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                isFocus={false}
                                errorMessage={errors?.address?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="addressapartment"
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                placeholder="Apartment, suite, unite ect (optinal)"
                                name="addressapartment"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                isFocus={false}
                            />
                        )}
                    />
                </div>
                <div className="checkout__input">
                    <Controller
                        control={control}
                        name="city"
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_CITY,
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_CITY,
                            },
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label="Town/City <span>*</span>"
                                placeholder="Town/City"
                                name="city"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                isFocus={false}
                                errorMessage={errors?.city?.message}
                            />
                        )}
                    />
                </div>
                <div className="checkout__input">
                    <Controller
                        control={control}
                        name="state"
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_STATE,
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_STATE,
                            },
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label="Country/State <span>*</span>"
                                placeholder="Country/State"
                                name="state"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                isFocus={false}
                                errorMessage={errors?.state?.message}
                            />
                        )}
                    />
                </div>
                <div className="checkout__input">
                    <Controller
                        control={control}
                        name="zipcode"
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_REQUIRED,
                            },
                            pattern: {
                                value: DIGITS_ONLY,
                                message: ERROR_ZIPCODE_DIGITS_ONLY,
                            },
                            minLength: {
                                value: 5,
                                message: ERROR_ZIPCODE_LENGTH,
                            },
                            maxLength: {
                                value: 5,
                                message: ERROR_ZIPCODE_LENGTH,
                            },
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label="Postcode / ZIP <span>*</span>"
                                placeholder="Postcode / ZIP"
                                name="zipcode"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                                isFocus={false}
                                errorMessage={errors?.zipcode?.message}
                            />
                        )}
                    />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="checkout__input">
                            <Controller
                                control={control}
                                name="phone"
                                rules={{
                                    required: {
                                        value: true,
                                        message: ERROR_PHONE,
                                    },
                                    pattern: {
                                        value: PHONE_NUMBER,
                                        message: ERROR_PHONE_INVALID,
                                    },
                                }}
                                render={({
                                    field: { onChange, onBlur, ref },
                                }) => (
                                    <InputField
                                        label="Phone <span>*</span>"
                                        placeholder="Phone"
                                        name="phone"
                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                        isFocus={false}
                                        errorMessage={errors?.phone?.message}
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="checkout__input">
                            <Controller
                                control={control}
                                name="email"
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
                                    field: { onChange, onBlur, ref },
                                }) => (
                                    <InputField
                                        label="Email <span>*</span>"
                                        placeholder="Email"
                                        name="email"
                                        type="email"
                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                        isFocus={false}
                                        errorMessage={errors?.email?.message}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="checkout__input-checkbox">
                    <Controller
                        control={control}
                        name="acc"
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <CheckboxField
                                label="Create an account?"
                                name="acc"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                            />
                        )}
                    />
                    <p>
                        Create an account by entering the information below. If
                        you are a returning customer please login at the top of
                        the page
                    </p>
                </div>
                {/* {formik.values.acc
                                    ?
                                    <div className="checkout__input">
                                        <label>
                                            Account Password<span>*</span>
                                        </label>
                                        <input type="password"
                                            placeholder="Account Password"
                                            required
                                            name="password"
                                            value={formik.values.password}

                                            onChange={formik.handleChange} />
                                        {formik.errors.password && formik.touched.password && (
                                            <div className='invalid-feedback'>{formik.errors.password}</div>
                                        )}

                                    </div>
                                    : null
                                } */}

                <div className="checkout__input-checkbox">
                    <Controller
                        control={control}
                        name="diffAcc"
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <CheckboxField
                                label="Note about your order, e.g, special noe for delivery"
                                name="diffAcc"
                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                            />
                        )}
                    />
                </div>
                {/*   {formik.values.diffAcc
                                    ? <div className="checkout__input">
                                        <label>
                                            Order notes<span>*</span>
                                        </label>
                                        <input type="text"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                            required
                                            name="orderNote"
                                            value={formik.values.orderNote}

                                            onChange={formik.handleChange} />
                                        {formik.errors.orderNote && formik.touched.orderNote && (
                                            <div className='invalid-feedback'>{formik.errors.orderNote}</div>
                                        )}

                                    </div>
                                    : null
                                } */}
            </form>
        </>
    );
};
