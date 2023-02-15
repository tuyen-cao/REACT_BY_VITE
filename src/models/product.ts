
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
    type: string
}
