import { BasketItem } from "@/models";
import { useDispatch } from "react-redux";
import { removeItem } from "../slice";
import ProductItemInCart from "./product-item-in-cart";

export interface ShoppingCartProductsTableProps {
    products: BasketItem[],
    updateQuantity?: (basketItem: BasketItem) => void
}

export function ShoppingCartProductsTable({ products, updateQuantity }: ShoppingCartProductsTableProps) {
    const dispath = useDispatch()
    const handleClickDelete = (id: number) => {
        dispath(removeItem(id))
    }

    return (
        <div className="shopping-cart__table">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th />
                    </tr>
                </thead>
                <tbody>

                    {products?.map((product: BasketItem) => {
                        return <>
                            <ProductItemInCart
                                key={`basket-${product.id}`}
                                product={product}
                                handleDelete={handleClickDelete}
                                handleChangeQuantity={updateQuantity} />
                        </>
                    })}
                </tbody>
            </table>
        </div>
    );
}
