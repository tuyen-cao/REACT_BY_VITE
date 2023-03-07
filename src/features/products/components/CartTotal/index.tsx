import { formatCurrency } from '@/utilities';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { getDiscount, getSubtotal, getTotal } from '../../slice';
import { RootState } from '@/redux/Store'

export function CartTotal() {
    const subtotal = useSelector(getSubtotal)
    const total = useSelector(getTotal)
    const discount = useSelector(getDiscount)
    const discountPrecent = useSelector((state: RootState) => state.product.discount)

    return (
        <ul >
            <li>
                Subtotal <span>{formatCurrency.format(subtotal)}</span>
            </li>
            {discount > 0 &&
                <li>
                    Discount ({discountPrecent}%) <span>{formatCurrency.format(discount)}</span>
                </li>}
            <li>
                Total <span>{formatCurrency.format(total)}</span>
            </li>
        </ul >
    );
}
