import { RadioField } from "@/components/form-controls"
import { ERROR_PAYMENT_METHOD } from "@/constants"
import { PaymentMethodFormErrors } from "@/models"
import { useFormik } from "formik"
import { useEffect, useRef } from 'react'


interface PaymentMethodFormProps {
    isSubmited: number,
    handleFormSubmit: (method: string) => void
}

const validate = (values: { paymentMethod: string }) => {
    const errors: PaymentMethodFormErrors = {};

    if (values.paymentMethod === "") {
        errors.paymentMethod = ERROR_PAYMENT_METHOD;
    }
    return errors;
};


export function PaymentMethodForm({ isSubmited, handleFormSubmit }: PaymentMethodFormProps) {
    const frmRef = useRef<HTMLFormElement>()

    const formik = useFormik({
        initialValues: {
            paymentMethod: ''
        },
        validate,
        onSubmit: values => {
            handleFormSubmit(values.paymentMethod)
        }
    });
    useEffect(() => {
        if (isSubmited > 0 && frmRef.current) {
            frmRef.current.requestSubmit();
        }
    }, [isSubmited, frmRef]);

    return (<>
        <form ref={frmRef} name="frmPaymentMethod" className="was-validated"
            onSubmit={formik.handleSubmit}>
            <div className="checkout__input-checkbox">
                <RadioField
                    name="paymentMethod"
                    id='paymentmethodCredit'
                    label="Credit card"
                    value="Credit"

                    onChange={formik.handleChange}
                />
            </div>
            <div className="checkout__input-checkbox">
                <RadioField
                    name="paymentMethod"
                    id='paymentmethodPaypal'
                    label="Paypal"
                    value="Paypal"

                    onChange={formik.handleChange}
                />
            </div>
            {formik.errors.paymentMethod &&
                <div className='invalid-feedback'>{formik.errors.paymentMethod}</div>
            }
        </form>
    </>
    );
}
