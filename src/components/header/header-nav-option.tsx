import * as React from 'react';
import SearchSwitch from './search-switch';
import ShoppingCartLink from './shopping-cart-link';


export default function HeaderNavOption() {
    return (
        <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
                <SearchSwitch />
                <a href="#">
                    <img src="/img/icon/heart.png" alt="" />
                </a>
                <ShoppingCartLink />
            </div>
        </div>
    );
}
