import * as React from 'react';
import { useSelector } from 'react-redux';
import { getSubtotal } from '../slice';


export function CartTotal() {
    const subtotal = useSelector(getSubtotal)
    return (
        <ul >
            <li>
                Subtotal <span>{subtotal}</span>
            </li>
            <li>
                Total <span>{subtotal}</span>
            </li>
        </ul>
    );
}
