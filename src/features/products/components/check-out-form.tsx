import { CheckboxField, InputField } from '@/components/form-controls';
import BlackButton from '@/components/form-controls/black-button';
import { EMAIL, EMPTY_STRING, ERROR_ADDRESS, ERROR_CITY, ERROR_COUNTRY, ERROR_FIRST_NAME, ERROR_LAST_NAME, ERROR_REQUIRED, ERROR_STATE, PHONE_NUMBER } from '@/constants';
import { CheckoutPayload } from '@/models';
import { useEffect, useRef } from 'react';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';


interface CheckoutFormProps {
    handleFormSubmit: (payload: CheckoutPayload) => void,
    isSubmited: number
}

export const CheckoutForm = ({ isSubmited, handleFormSubmit }: CheckoutFormProps) => {
    const formRef = useRef<HTMLFormElement>()
    const { control, formState: { errors }, handleSubmit } = useForm<CheckoutPayload>({
        reValidateMode: "onSubmit",
        shouldUseNativeValidation: true,
        defaultValues: {
            firstName: "string",
            lastName: "string",
            country: "string",
            address: "string",
            addressapartment: "string",
            city: "string",
            state: "string",
            zipcode: "string",
            phone: "string",
            email: "string",
            acc: "string",
            diffAcc: "string"
        }
    })
    useEffect(() => {

        if (isSubmited > 0 && formRef.current) {
            formRef.current.requestSubmit();
        }
    }, [isSubmited])

    const onSubmit = (payload: CheckoutPayload) => {
        handleFormSubmit?.(payload)
    }
    return (
        <>

            <form ref={formRef} name="frmCheckout" className="was-validated" onSubmit={handleSubmit(onSubmit)} >
                {/*  <button type='submit' >SUBMIT</button> */}

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
                                        message: ERROR_FIRST_NAME
                                    },
                                    pattern: {
                                        value: EMPTY_STRING,
                                        message: ERROR_FIRST_NAME
                                    }
                                }}
                                render={({ field: { onChange, onBlur, ref, value } }) => (
                                    <InputField
                                        label='Fist Name <span>*</span>'
                                        placeholder='First Name'
                                        name="firstName"

                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                        value={value}
                                    />
                                )}
                            />
                            <div className="invalid-feedback">{errors?.firstName?.message}</div>
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
                                        message: ERROR_LAST_NAME
                                    },
                                    pattern: {
                                        value: EMPTY_STRING,
                                        message: ERROR_LAST_NAME
                                    }
                                }}
                                render={({ field: { onChange, onBlur, ref } }) => (
                                    <InputField
                                        label='Last Name <span>*</span>'
                                        placeholder='Last Name'
                                        name="lastName"

                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                    />
                                )}
                            />
                            <div className='invalid-feedback'>{errors?.lastName?.message}</div>
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
                                message: ERROR_COUNTRY
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_COUNTRY
                            }
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label='Country <span>*</span>'
                                placeholder='Country'
                                name="country"

                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                            />
                        )}
                    />
                    <div className='invalid-feedback'>{errors?.country?.message}</div>
                </div>
                <div className="checkout__input">
                    <Controller
                        control={control}
                        name="address"
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_ADDRESS
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_ADDRESS
                            }
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label='Street Address <span>*</span>'
                                placeholder='Street Address'
                                name="address"

                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                            />
                        )}
                    />
                    <div className='invalid-feedback'>{errors?.address?.message}</div>
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
                                message: ERROR_CITY
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_CITY
                            }
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label='Town/City <span>*</span>'
                                placeholder='Town/City'
                                name="city"

                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                            />
                        )}
                    />
                    <div className='invalid-feedback'>{errors?.city?.message}</div>
                </div>
                <div className="checkout__input">
                    <Controller
                        control={control}
                        name="state"
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_STATE
                            },
                            pattern: {
                                value: EMPTY_STRING,
                                message: ERROR_STATE
                            }
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label='Country/State <span>*</span>'
                                placeholder='Country/State'
                                name="state"

                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                            />
                        )}
                    />
                    <div className='invalid-feedback'>{errors?.state?.message}</div>
                </div>
                <div className="checkout__input">
                    <Controller
                        control={control}
                        name="zipcode"
                        rules={{
                            required: {
                                value: true,
                                message: ERROR_REQUIRED
                            },
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Must be only digits'
                            },
                            minLength: {
                                value: 5,
                                message: 'Must be exactly 5 digits'
                            },
                            maxLength: {
                                value: 5,
                                message: 'Must be exactly 5 digits'
                            }
                        }}
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <InputField
                                label='Postcode / ZIP <span>*</span>'
                                placeholder='Postcode / ZIP'
                                name="zipcode"

                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                            />
                        )}
                    />
                    <div className='invalid-feedback'>{errors?.zipcode?.message}</div>
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
                                        message: "Please enter the Phone number"
                                    },
                                    pattern: {
                                        value: PHONE_NUMBER,
                                        message: 'Phone number is not valid'
                                    }
                                }}
                                render={({ field: { onChange, onBlur, ref } }) => (
                                    <InputField
                                        label='Phone <span>*</span>'
                                        placeholder='Phone'
                                        name="phone"

                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                    />
                                )}
                            />
                            <div className='invalid-feedback'>{errors?.phone?.message}</div>
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
                                        message: "Please enter the email"
                                    },
                                    pattern: {
                                        value: EMAIL,
                                        message: 'The email is not valid'
                                    }
                                }}
                                render={({ field: { onChange, onBlur, ref } }) => (
                                    <InputField
                                        label='Email <span>*</span>'
                                        placeholder='Email'
                                        name="email"
                                        type='email'

                                        onBlur={onBlur} // notify when input is touched
                                        onChange={onChange} // send value to hook form
                                        inputRef={ref}
                                    />
                                )}
                            />
                            <div className='invalid-feedback'>{errors?.email?.message}</div>
                        </div>
                    </div>
                </div>
                <div className="checkout__input-checkbox">
                    <Controller
                        control={control}
                        name="acc"
                        render={({ field: { onChange, onBlur, ref } }) => (
                            <CheckboxField
                                label='Create an account?'
                                name="acc"

                                onBlur={onBlur} // notify when input is touched
                                onChange={onChange} // send value to hook form
                                inputRef={ref}
                            />
                        )}
                    />
                    <p>
                        Create an account by entering the information below. If you
                        are a returning customer please login at the top of the page
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
                                label='Note about your order, e.g, special noe for delivery'
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
}
