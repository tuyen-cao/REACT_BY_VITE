
import { BasketItem, ProductItemType } from "@/models";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { filterProductsQuery, shoppingCartLoader } from "../loaders";
import { productIdsAsString, removeItem } from "../slice";
import ProductItemInCart from "./product-item-in-cart";

export interface ShoppingCartProductsTableProps {
    products: BasketItem[],
    updateQuantity?: (basketItem: BasketItem) => void
}

export function ShoppingCartProductsTable({ products, updateQuantity }: ShoppingCartProductsTableProps) {
    const ids = useSelector(productIdsAsString);

    const initialData = useLoaderData() as Awaited<
        ReturnType<ReturnType<typeof shoppingCartLoader>>
    >
    const query = useQuery(
        {
            ...filterProductsQuery(ids),
            enabled: ids !== undefined,
            initialData: initialData
        }
    )

    const filterProducts = query.isFetched ? query.data : undefined


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
                        const productInfor = (filterProducts as ProductItemType[])?.find(p => p.id === product.id)
                        return <>
                            <ProductItemInCart
                                key={`basket-${product.id}`}
                                product={product}
                                productInfor={productInfor}
                                handleDelete={handleClickDelete}
                                handleChangeQuantity={updateQuantity} />
                        </>
                    })}
                </tbody>
            </table>
        </div>
    );
}
