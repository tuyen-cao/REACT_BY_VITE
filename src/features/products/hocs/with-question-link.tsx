import { ComponentType, useState } from 'react'

export function WithQuestionLink<T>(Component: ComponentType<T>) {
    // eslint-disable-next-line react/display-name
    const fnc = (hocProps: T) => {
        const [isShowPromoCode, setShowPromoCode] = useState(false)

        const handleClick = () => {
            setShowPromoCode((isShowPromoCode) => !isShowPromoCode)
        }
        return (
            <>
                {isShowPromoCode && <Component {...hocProps as T} />}
                {!isShowPromoCode && <h6 className="coupon__code" >
                    <span className="icon_tag_alt" /> Have a coupon?{" "}
                    <button className='btn btn-link' onClick={handleClick}>Click here</button> to enter your code
                </h6>}
            </>
        )
    }
    return fnc
}