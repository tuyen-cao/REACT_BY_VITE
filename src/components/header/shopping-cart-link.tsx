
import { getTotal, numOfProducts } from '@/features/products/slice';
import { formatCurrency } from '@/ultilities';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function ShoppingCartLink() {
    const totalItems = useSelector(numOfProducts)
    const total = useSelector(getTotal)

    return (
        <>
            <Link to='/shops/shopping-cart'>
                <img src="/img/icon/cart.png" alt="" />
                {totalItems > 0 && <span className="badge rounded-pill bg-danger text-white">{totalItems}</span>}
            </Link>
            {totalItems > 0 && <div className="price">{formatCurrency.format(total)}</div>}
        </>
    );
}
