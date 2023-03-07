import { CartTotal, PromoCode, ShoppingCartTable } from '@/features/products/components';
import { numOfProducts } from '@/features/products/slice';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

export default function Home() {
    const totalItems = useSelector(numOfProducts)

    return (
        <>
            <section className="spad">
                <div className="container">
                    <div className="row">
                        {totalItems > 0 && <>
                            <div className="col-lg-8">
                                <ShoppingCartTable />
                            </div>
                            <div className="col-lg-4">
                                <PromoCode />
                                <div className="cart__total">
                                    <h6>Cart total</h6>
                                    <CartTotal />
                                    <Link to="/checkout" className="primary-btn">
                                        Proceed to checkout
                                    </Link>
                                </div>
                            </div>
                        </>
                        }
                        {totalItems === 0 &&
                            <span><Link to='/shops' className="primary-btn">Shopping now!!!</Link></span>
                        }
                    </div>
                </div>
            </section>


        </>
    )
}
