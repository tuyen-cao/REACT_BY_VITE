import { isLogin } from '@/features/auth/slice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function HeaderTop() {
    const isLogged = useSelector(isLogin);
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="header-top__left">
                            <p>
                                Free shipping, 30-day return or refund
                                guarantee.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="header-top__right">
                            <div className="header-top__links">
                                {!isLogged && (
                                    <>
                                        <Link to="/register">Sign up</Link> /{' '}
                                        <Link to="/signin">Sign in</Link>
                                    </>
                                )}
                                <a href="#">FAQs</a>
                            </div>
                            <div className="header-top__hover">
                                <span>
                                    Usd <i className="arrow_carrot-down" />
                                </span>
                                <ul>
                                    <li>USD</li>
                                    <li>EUR</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
