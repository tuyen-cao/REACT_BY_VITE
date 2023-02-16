
import { numOfProducts, subtotal } from '@/features/products/slice';
import { formatCurrency } from '@/ultilities';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export interface ShoppingCartLinkProps {
}

export default function ShoppingCartLink(props: ShoppingCartLinkProps) {
    const totalItems = useSelector(numOfProducts)
    const subTotal = useSelector(subtotal)

    return (
        <>
            <Link to='shopping-cart'>
                <img src="/img/icon/cart.png" alt="" />
                <span className="badge rounded-pill bg-danger text-white">{totalItems}</span>
            </Link>
            <div className="price">{formatCurrency.format(subTotal)}</div>
        </>
    );
}
