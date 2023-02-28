import { CartTotal, PromoCode } from "@/features/products/components";
import { getAllProductsInCart } from "@/features/products/slice";
import { useSelector } from "react-redux";
import { WithQuestionLink } from "@/features/products/hocs";


const PromoCodeWithLink = WithQuestionLink(PromoCode)

export default function Checkout() {
    const basketItems = useSelector(getAllProductsInCart)
    return (
        < section className="spad" >
            <div className="container">
                <div className="checkout__form">
                    <div className="row">
                        <div className="col-lg-8 col-md-6" >
                            <PromoCodeWithLink hasRef />
                            <form name="frmCheckout" className="was-validated">
                                {/*    <FocusError formik={formik} /> */}
                                <h6 className="checkout__title">Billing Details</h6>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <label>
                                                Fist Name<span>*</span>
                                            </label>
                                            <input type="text"
                                                placeholder="First Name"
                                                required
                                                name="firstName"
                                                /* value={formik.values.firstName}

                                                onChange={formik.handleChange} */ />
                                            {/* {formik.errors.firstName && formik.touched.firstName && (
                                                <div className='invalid-feedback'>{formik.errors.firstName}</div>
                                            )} */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <label>
                                                Last Name<span>*</span>
                                            </label>
                                            <input type="text"
                                                placeholder="Last Name"
                                                required
                                                name="lastName"
                                               /*  value={formik.values.lastName}

                                                onChange={formik.handleChange} */ />
                                            {/* {formik.errors.lastName && formik.touched.lastName && (
                                                <div className='invalid-feedback'>{formik.errors.lastName}</div>
                                            )} */}
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__input">
                                    <label>
                                        Country<span>*</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Country"
                                        required
                                        name="country"
                                     /*    value={formik.values.country}

                                        onChange={formik.handleChange} */ />
                                    {/* {formik.errors.country && formik.touched.country && (
                                        <div className='invalid-feedback'>{formik.errors.country}</div>
                                    )} */}

                                </div>
                                <div className="checkout__input">
                                    <label>
                                        Street Address<span>*</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Street Address"
                                        required
                                        name="address"
                                      /*   value={formik.values.address}

                                        onChange={formik.handleChange} */ />
                                    {/* {formik.errors.address && formik.touched.address && (
                                        <div className='invalid-feedback'>{formik.errors.address}</div>
                                    )} */}
                                    <input type="text"
                                        placeholder="Apartment, suite, unite ect (optinal)"
                                        required
                                        name="addressapartment"
                                       /*  value={formik.values.addressapartment}

                                        onChange={formik.handleChange}  *//>

                                </div>
                                <div className="checkout__input">
                                    <label>
                                        Town/City<span>*</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Town/City"
                                        required
                                        name="city"
                                       /*  value={formik.values.city}

                                        onChange={formik.handleChange}  *//>
                                    {/*  {formik.errors.city && formik.touched.city && (
                                        <div className='invalid-feedback'>{formik.errors.city}</div>
                                    )} */}
                                </div>
                                <div className="checkout__input">
                                    <label>
                                        Country/State<span>*</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Country/State"
                                        required
                                        name="state"
                                      /*   value={formik.values.state}

                                        onChange={formik.handleChange} */ />
                                    {/* {formik.errors.state && formik.touched.state && (
                                        <div className='invalid-feedback'>{formik.errors.state}</div>
                                    )} */}
                                </div>
                                <div className="checkout__input">
                                    <label>
                                        Postcode / ZIP<span>*</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Postcode / ZIP"
                                        required
                                        name="zipcpde"
                                        /* value={formik.values.zipcpde}

                                        onChange={formik.handleChange} */ />
                                    {/* {formik.errors.zipcpde && formik.touched.zipcpde && (
                                        <div className='invalid-feedback'>{formik.errors.zipcpde}</div>
                                    )} */}

                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <label>
                                                Phone<span>*</span>
                                            </label>
                                            <input type="text"
                                                placeholder="Phone"
                                                required
                                                name="phone"
                                               /*  value={formik.values.phone}

                                                onChange={formik.handleChange}  *//>
                                            {/*  {formik.errors.phone && formik.touched.phone && (
                                                <div className='invalid-feedback'>{formik.errors.phone}</div>
                                            )} */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <label>
                                                Email<span>*</span>
                                            </label>
                                            <input type="email"
                                                placeholder="Email"
                                                required
                                                name="email"
                                                /* value={formik.values.email}

                                                onChange={formik.handleChange} */ />
                                            {/* {formik.errors.email && formik.touched.email && (
                                                <div className='invalid-feedback'>{formik.errors.email}</div>
                                            )} */}

                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__input-checkbox">
                                    <label>Create an account?
                                        <input
                                            name="acc"
                                            type="checkbox"
                                          /*   checked={formik.values.acc}
                                            onChange={formik.handleChange} */ />
                                        <span className="checkmark"></span></label>
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
                                    <label>Note about your order, e.g, special noe for delivery
                                        <input
                                            name="diffAcc"
                                            type="checkbox"
                                           /*  checked={formik.values.diffAcc}
                                            onChange={formik.handleChange} */ />
                                        <span className="checkmark"></span></label>
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
                                <form name="frmPaymentMethod" className="was-validated">
                                    <div className="checkout__input-checkbox">
                                        <label>Credit Card
                                            <input
                                                name="paymentmethod"
                                                type="radio"
                                                required
                                                id='paymentmethodCredit'
                                                value="Credit card"
                                               /*  onChange={formikPaymentMethod.handleChange}  */ />
                                            <span className="checkmark"></span></label>
                                    </div>
                                    <div className="checkout__input-checkbox">
                                        <label>Paypal
                                            <input
                                                name="paymentmethod"
                                                type="radio"
                                                required
                                                id='paymentmethodPaypal'
                                                value="Paypal"
                                                /* onChange={formikPaymentMethod.handleChange} */ />
                                            <span className="checkmark"></span></label>
                                    </div>
                                    {/* {formikPaymentMethod.errors.paymentmethod && formikPaymentMethod.errors.paymentmethod && (
                                        <div className='invalid-feedback'>{formikPaymentMethod.errors.paymentmethod}</div>
                                    )} */}
                                </form>

                                {/* {enablePayPalButton ? <>
                                    <PayPalScriptProvider
                                        options={paypalScriptOptions}
                                    >
                                        <PaypalButton
                                            currency={currency}
                                            showSpinner={false}
                                            handleClick={() => {

                                                localStorage.setItem("payment", JSON.stringify({ products, discount, billingInfo }))
                                                navigate("../completion")

                                            }}
                                        />
                                    </PayPalScriptProvider>
                                </> : <BlackButton type="submit" cssClass='site-btn' handleClick={handleCheckout}>
                                    <>PLACE ORDER</>
                                </BlackButton>} */}

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section >
    )
}
