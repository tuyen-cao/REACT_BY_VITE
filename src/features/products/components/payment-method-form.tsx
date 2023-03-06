import { RadioField } from "@/components/form-controls"
import BlackButton from "@/components/form-controls/black-button"
import { useEffect, useRef, FormEvent, useState } from 'react'


interface PaymentMethodFormProps {
    isSubmited: number
}


export function PaymentMethodForm({ isSubmited = false }: PaymentMethodFormProps) {
    const frmRef = useRef<HTMLFormElement>()
    const [isSubmitedaaa, setSubmited] = useState(false)
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("aaaaa")
    }
    useEffect(() => {
        if (isSubmitedaaa && frmRef.current) {
            frmRef.current.requestSubmit();
        }
    }, [isSubmitedaaa, frmRef]);

    return (<>
        <form ref={frmRef} name="frmPaymentMethod" className="was-validated"
            onSubmit={handleSubmit}>
            <div className="checkout__input-checkbox">
                <RadioField
                    name="paymentmethod"
                    id='paymentmethodCredit'
                    label="Credit card"
                />
            </div>
            <div className="checkout__input-checkbox">
                <RadioField
                    name="paymentmethod"
                    id='paymentmethodPaypal'
                    label="Paypal"
                />
            </div>
            {/* {formikPaymentMethod.errors.paymentmethod && formikPaymentMethod.errors.paymentmethod && (
                                        <div className='invalid-feedback'>{formikPaymentMethod.errors.paymentmethod}</div>
                                    )} */}

        </form>
        <BlackButton type="submit" cssClass='site-btn' handleClick={() => { setSubmited(true) }}>
            <>PLACE ORDER sgdgdf</>
        </BlackButton>
    </>
    );
}
