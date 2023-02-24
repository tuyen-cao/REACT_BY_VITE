
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
    price: number
}

export interface PromoCodeProps {
    id: number,
    value: number
    code: string
}
export interface PromoCodeFormErrors {
    promoCode?: string;
}



export interface ProductsState {
    products: BasketItem[],
    discount: number
}
