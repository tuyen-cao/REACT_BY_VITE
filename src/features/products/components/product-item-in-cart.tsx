import { BasketItem } from '@/models';
import { formatCurrency } from '@/ultilities';
import { useEffect, useState, ChangeEvent } from 'react';
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components'
import { ProductByIdQuery, shoppingCartLoader } from '../loaders';
import { useCallback } from 'react';

export interface ProductItemInCartProps {
    product: BasketItem,
    handleDelete?: (id: number) => void
    handleChangeQuantity?: (basketItem: BasketItem) => void
}

export default function ProductItemInCart({ product, handleDelete, handleChangeQuantity }: ProductItemInCartProps) {

    const initialData = useLoaderData() as Awaited<
        ReturnType<ReturnType<typeof shoppingCartLoader>>
    >
    const { data: prodetail } = useQuery(
        { ...ProductByIdQuery(product.id.toString()), initialData: initialData }
    )

    const handleClick = useCallback(() => {
        handleDelete!(product.id)
    }, [])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(() => Number(e.target.value))
        handleChangeQuantity!({
            ...product, quantity: Number(e.target.value)
        })
    }, [])
    return (
        <TableRowStyled>
            <td className="product__cart__item">
                <div className="product__cart__item__pic">
                    <img src={prodetail.image} alt="" />
                </div>
                <div className="product__cart__item__text">
                    <h6>{prodetail.title}</h6>
                    <h5>{formatCurrency.format(product.price)}</h5>
                </div>
            </td>

            <td className="quantity__item">
                <div className="quantity">
                    <div className="pro-qty-2">
                        <input type="number"
                            defaultValue={product.quantity}
                            onChange={handleChange}
                            min="1" max="100" />
                    </div>
                </div>
            </td>
            <td className="cart__price">{formatCurrency.format(product.price * product.quantity)}</td>
            <td className="cart__close">
                <button className='bg-transparent border-0' onClick={handleClick}><i className="fa fa-close" /></button>
            </td>
        </TableRowStyled>
    );
}

const TableRowStyled = styled.tr`
    .product__cart__item__pic {
        max-width: 90px;
    }
`;
