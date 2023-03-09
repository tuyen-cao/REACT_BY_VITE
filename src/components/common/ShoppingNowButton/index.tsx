import { Link } from 'react-router-dom';

export default function ShoppingNowButton() {
    return (
        <span>
            <Link to="/shops" className="primary-btn">
                Shopping now!!!
            </Link>
        </span>
    );
}
