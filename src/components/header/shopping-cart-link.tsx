import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ShoppingCartLinkProps {
}

export default function ShoppingCartLink(props: ShoppingCartLinkProps) {

    return (
        <>
            <Link to='shop/shopping-cart'>
                <img src="/img/icon/cart.png" alt="" />
                {/* <span className="badge rounded-pill bg-danger"></span> */}
            </Link>
            {/* <div className="price">aaa</div> */}
        </>
    );
}
