import { BasketItem } from "@/models";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { getAllProductsInCart } from "../slice";
import { ShoppingCartProductsTable } from "./shopping-cart-products-table";
import { ShoppingCartTableActions } from "./shopping-cart-table-actions";


export interface ShoppingCartTableProps {
}

export function ShoppingCartTable(props: ShoppingCartTableProps) {
    const basketItems = useSelector(getAllProductsInCart)
    let drafBasketList: BasketItem[] = []

    const updateQuantity = useCallback((basketItem: BasketItem) => {
        const product = drafBasketList.find(item => item.id === basketItem.id)
        if (!product) drafBasketList.push(basketItem)
        else {
            product.quantity = basketItem.quantity
        }
    }, [])
    return (
        <>
            <ShoppingCartProductsTable products={basketItems} updateQuantity={updateQuantity} />
            <ShoppingCartTableActions basketItems={drafBasketList} />
        </>
    );
}
