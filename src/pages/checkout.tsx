import { CartTotal, PromoCode } from "@/features/products/components";
import { getAllProductsInCart } from "@/features/products/slice";
import { useSelector } from "react-redux";
import { WithQuestionLink } from "@/features/products/hocs";
import BlackButton from "@/components/form-controls/black-button";
import { CheckoutPayload } from "@/models";
import { useState, useEffect } from 'react'
import { CheckoutForm, PaymentMethodForm } from "@/features/products/components/forms";
import { PAYMENT_METHOD } from "@/constants";
import PaypalButton from "@/features/products/components/forms/paypal-button";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback, myErrorHandler } from "@/utilities";

const PromoCodeWithLink = WithQuestionLink(PromoCode)

export default function Checkout() {
    const basketItems = useSelector(getAllProductsInCart)
    const [submitedCount, setSubmited] = useState(0)
    const [checkoutInfo, setCheckoutInfo] = useState<CheckoutPayload>({})
    const [paymentMethod, setPaymentMethod] = useState('')

    const handleFormSubmit = (payload: CheckoutPayload) => {
        setCheckoutInfo(payload)
        setSubmited(0)
    }
    const handlePaymentFormSubmit = (method: string) => {
        setPaymentMethod(method)
        // add payment method

        setSubmited(0)
    }
    const handleCheckout = () => {
        setSubmited((submitedCount) => submitedCount + 1)
    }
    useEffect(() => {
        if (paymentMethod !== "" && Object.values(checkoutInfo).length > 0) {
            console.log({ ...checkoutInfo, paymentMethod: paymentMethod })
            // store user infor + product info + total 

        }

    }, [checkoutInfo, paymentMethod])

    return (
        < section className="spad" >
            <div className="container">
                <div className="checkout__form">
                    <div className="row">
                        <div className="col-lg-8 col-md-6" >
                            <PromoCodeWithLink hasRef />
                            <CheckoutForm isSubmited={submitedCount} handleFormSubmit={handleFormSubmit} />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkout__order">
                                <h4 className="order__title">Your order</h4>
                                <div className="checkout-order__products">
                                    Product <span>Total</span>
                                </div>

                                {basketItems &&
                                    <ul className="checkout-order__total-products">
                                        {basketItems.map((p, index) => {
                                            const formattedNumber = (index + 1).toLocaleString('en-US', {
                                                minimumIntegerDigits: 2,
                                                useGrouping: false
                                            })
                                            return <>
                                                <li key={"product-ordered-" + p.id}>
                                                    <span>{formattedNumber}.</span>
                                                    <span>{p.title} <strong>({p.quantity})</strong></span>
                                                    <span>$ {(p.quantity * p.price).toFixed(2)}</span>
                                                </li>
                                            </>
                                        })}

                                    </ul>
                                }
                                <div className="checkout-order__total-all"><CartTotal /></div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <PaymentMethodForm isSubmited={submitedCount} handleFormSubmit={handlePaymentFormSubmit} />
                                <ErrorBoundary FallbackComponent={ErrorFallback}
                                    onError={myErrorHandler} >

                                    {paymentMethod !== PAYMENT_METHOD.PAYPAL
                                        && <BlackButton type="submit" cssClass='site-btn' handleClick={handleCheckout}>
                                            <>PLACE ORDER</>
                                        </BlackButton>
                                    }

                                    {paymentMethod === PAYMENT_METHOD.PAYPAL
                                        && Object.values(checkoutInfo).length > 0
                                        && <PaypalButton />}

                                    {paymentMethod === PAYMENT_METHOD.PAYPAL
                                        && Object.values(checkoutInfo).length === 0
                                        && <BlackButton type="submit" cssClass='site-btn' handleClick={handleCheckout}>
                                            <>PLACE ORDER</>
                                        </BlackButton>}

                                </ErrorBoundary>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section >
    )
}
