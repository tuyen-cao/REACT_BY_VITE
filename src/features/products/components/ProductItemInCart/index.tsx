import { BasketItem, ProductItemType } from '@/models';
import { formatCurrency } from '@/utilities';
import { useEffect, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';

export interface ProductItemInCartProps {
    product: BasketItem;
    productInfor: ProductItemType | undefined;
    handleDelete?: (id: number) => void;
    handleChangeQuantity?: (basketItem: BasketItem) => void;
}

export default function ProductItemInCart({
    product,
    productInfor,
    handleDelete,
    handleChangeQuantity,
}: ProductItemInCartProps) {
    const [quantity, setQuantity] = useState(0);

    const handleClick = useCallback(() => {
        handleDelete?.(product.id);
    }, [handleDelete, product.id]);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setQuantity(() => Number(e.target.value));
            handleChangeQuantity?.({
                ...product,
                quantity: Number(e.target.value),
            });
        },
        [handleChangeQuantity, product]
    );
    useEffect(() => {
        setQuantity(product.quantity);
    }, [product.quantity]);
    return (
        <TableRowStyled>
            <td className="product__cart__item">
                <div className="product__cart__item__pic">
                    <img src={productInfor?.image} alt="" />
                </div>
                <div className="product__cart__item__text">
                    <h6>{productInfor?.title}</h6>
                    <h5>{formatCurrency.format(product.price)}</h5>
                </div>
            </td>

            <td className="quantity__item">
                <div className="quantity">
                    <div className="pro-qty-2">
                        <input
                            type="number"
                            defaultValue={product.quantity}
                            onChange={handleChange}
                            min="1"
                            max="100"
                        />
                    </div>
                </div>
            </td>
            <td className="cart__price">
                {formatCurrency.format(product.price * quantity)}
            </td>
            <td className="cart__close">
                <button
                    className="bg-transparent border-0"
                    onClick={handleClick}
                >
                    <i className="fa fa-close" />
                </button>
            </td>
        </TableRowStyled>
    );
}

const TableRowStyled = styled.tr`
    .product__cart__item__pic {
        max-width: 90px;
    }
`;
