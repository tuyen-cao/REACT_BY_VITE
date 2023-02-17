import { BasketItem } from '@/models';
import { formatCurrency } from '@/ultilities';
import { useEffect, useState, ChangeEvent } from 'react';
import styled from 'styled-components'

export interface ProductItemInCartProps {
    product: BasketItem,
    handleDelete?: (id: number) => void
    handleChangeQuantity?: (basketItem: BasketItem) => void
}

export default function ProductItemInCart({ product, handleDelete, handleChangeQuantity }: ProductItemInCartProps) {
    const [quantity, setQuantity] = useState(0)
    const getProductById = () => {
        return {
            "id": `${product.id}`,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "category",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",

            "type": "new",
            "rating": {
                "rate": 2.1,
                "count": 430
            }
        }
    }
    const prodetail = getProductById()

    const handleClick = () => {
        handleDelete!(product.id)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(() => Number(e.target.value))
        handleChangeQuantity!({
            ...product, quantity: Number(e.target.value)
        })
    }
    useEffect(() => {
        setQuantity(product.quantity)
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
            <td className="cart__price">{formatCurrency.format(product.price * quantity)}</td>
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
