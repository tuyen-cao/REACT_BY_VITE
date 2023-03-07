import * as React from 'react';
import HeaderLogo from './Logo';
import HeaderMenu from './Menu';
import HeaderNavOption from './NavOptions';
import HeaderTop from './Top';



export default function Header() {
    return (
        <header className="header">
            <HeaderTop />
            <div className="container">
                <div className="row">
                    <HeaderLogo />
                    <HeaderMenu />
                    <HeaderNavOption />
                </div>
                <div className="canvas__open">
                    <i className="fa fa-bars" />
                </div>
            </div>
        </header>
    );
}
