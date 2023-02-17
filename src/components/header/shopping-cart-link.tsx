
import { getSubtotal, numOfProducts } from '@/features/products/slice';
import { formatCurrency } from '@/ultilities';


import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export interface ShoppingCartLinkProps {
}

export default function ShoppingCartLink(props: ShoppingCartLinkProps) {
    const totalItems = useSelector(numOfProducts)
    const subTotal = useSelector(getSubtotal)

    return (
        <>
            <Link to='/shops/shopping-cart'>
                <img src="/img/icon/cart.png" alt="" />
                {totalItems > 0 && <span className="badge rounded-pill bg-danger text-white">{totalItems}</span>}
            </Link>
            {totalItems > 0 && <div className="price">{subTotal}</div>}
        </>
    );
}
