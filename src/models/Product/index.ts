
export interface Rating {
    rate: number,
    count: number
}

export interface ProductItemType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating,
    type: string,
    quantity?: number
}

export interface BasketItem {
    id: number,
    quantity: number
    price: number,
    title: string
}

export interface PromoCodeProps {
    id: number,
    value: number
    code: string
}
export interface PromoCodeFormErrors {
    promoCode?: string;
}
export interface PaymentMethodFormErrors {
    paymentMethod?: string;
}



export interface ProductsState {
    products: BasketItem[],
    discount: number
}

export interface PromoCodeProps {
    hasRef?: boolean
}


export interface CheckoutPayload {
    firstName: string,
    lastName: string,
    country: string,
    address: string,
    addressapartment: string,
    city: string,
    state: string,
    zipcode: string,
    phone: string,
    email: string,
    acc: string,
    diffAcc: string
}