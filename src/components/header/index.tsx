import * as React from 'react';
import HeaderLogo from './header-logo';
import HeaderMenu from './header-menu';
import HeaderNavOption from './header-nav-option';
import HeaderTop from './header-top';


export interface HeaderProps {
}

export default function Header(props: HeaderProps) {
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
