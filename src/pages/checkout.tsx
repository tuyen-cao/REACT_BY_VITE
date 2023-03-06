import { CartTotal, CheckoutForm, PromoCode } from "@/features/products/components";
import { getAllProductsInCart } from "@/features/products/slice";
import { useSelector } from "react-redux";
import { WithQuestionLink } from "@/features/products/hocs";
import BlackButton from "@/components/form-controls/black-button";
import { CheckoutPayload } from "@/models";
import { useForm } from 'react-hook-form';
import { PaymentMethodForm } from "@/features/products/components/payment-method-form";
import { useState } from 'react'

const PromoCodeWithLink = WithQuestionLink(PromoCode)

export default function Checkout() {
    const basketItems = useSelector(getAllProductsInCart)
    const [submitedCount, setSubmited] = useState(0)
    const handleFormSubmit = (payload: CheckoutPayload) => {
        console.log(payload)
        setSubmited(0)
    }
    const handleCheckout = () => {
        setSubmited((submitedCount) => submitedCount + 1)
    }
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
                                {/* <CartTotal wrapperClassName="checkout-order__total-all" />
 */}
                                <div className="checkout-order__total-all"><CartTotal /></div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <PaymentMethodForm isSubmited={submitedCount} />
                                <BlackButton type="submit" cssClass='site-btn' handleClick={handleCheckout}>
                                    <>PLACE ORDER</>
                                </BlackButton>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section >
    )
}
