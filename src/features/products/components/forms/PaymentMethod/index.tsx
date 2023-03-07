import { RadioField } from "@/components/form-controls"
import { ERROR_PAYMENT_METHOD, PAYMENT_METHOD } from "@/constants"
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
    const frmRef = useRef<HTMLFormElement>(null)

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
        console.log(formik.values.paymentMethod)
        if (isSubmited > 0 && frmRef.current || formik.dirty) {
            frmRef.current?.requestSubmit();
        }
    }, [isSubmited, frmRef, formik.dirty, formik.values.paymentMethod]);

    return (<>
        <form ref={frmRef} name="frmPaymentMethod" className="was-validated"
            onSubmit={formik.handleSubmit}>
            <div className="checkout__input-checkbox">
                <RadioField
                    name="paymentMethod"
                    id='paymentmethodCredit'
                    label="Credit card"
                    value={PAYMENT_METHOD.CREDIT_CARD}

                    onChange={formik.handleChange}
                />
            </div>
            <div className="checkout__input-checkbox">
                <RadioField
                    name="paymentMethod"
                    id='paymentmethodPaypal'
                    label="Paypal"
                    value={PAYMENT_METHOD.PAYPAL}

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
