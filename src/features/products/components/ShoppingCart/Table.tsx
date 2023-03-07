import { BasketItem } from "@/models";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { getAllProductsInCart } from "../../slice";
import { ShoppingCartProductsTable } from "./ProductsTable";
import { ShoppingCartTableActions } from "./TableActions";

export function ShoppingCartTable() {
    const basketItems = useSelector(getAllProductsInCart)
    const drafBasketList: BasketItem[] = useMemo(() => [], [])

    const updateQuantity = useCallback((basketItem: BasketItem) => {
        const product = drafBasketList.find(item => item.id === basketItem.id)
        if (!product) drafBasketList.push(basketItem)
        else {
            product.quantity = basketItem.quantity
        }
    }, [drafBasketList])

    return (
        <>
            <ShoppingCartProductsTable products={basketItems} updateQuantity={updateQuantity} />
            <ShoppingCartTableActions basketItems={drafBasketList} />
        </>
    );
}
