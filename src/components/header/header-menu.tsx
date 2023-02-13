import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export interface HeaderMenuProps {
}

export default function HeaderMenu(props: HeaderMenuProps) {
    return (
        <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
                <ul>
                    <li className="active">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shops">Shop</NavLink>
                    </li>
                    <li>
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/shops/shop-details">Shop Details</Link>
                            </li>
                            <li>
                                <Link to="/shopping-cart">Shopping Cart</Link>
                            </li>
                            <li>
                                <Link to="/checkout">Check Out</Link>
                            </li>
                            <li>
                                <Link to="/blog-details">Blog Details</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/blogs">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
