import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderLogoProps {
}

export default function HeaderLogo(props: HeaderLogoProps) {
    return (
        <div className="col-lg-3 col-md-3">
            <div className="header__logo">
                <Link to={'./'}>
                    <img src="/img/logo.png" alt="" />
                </Link>
            </div>
        </div>
    );
}
