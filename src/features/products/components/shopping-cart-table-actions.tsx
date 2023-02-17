import BlackButton from '@/components/form-controls/black-button';
import { BasketItem } from '@/models';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { updateCart } from '../slice';

export interface ShoppingCartTableActionsProps {
    basketItems: BasketItem[],
    handleUpdateCart?: (basketItems: BasketItem[]) => void
}

export function ShoppingCartTableActions({ basketItems }: ShoppingCartTableActionsProps) {
    const dispatch = useDispatch()
    const handleClickUpdateCart = () => {
        dispatch(updateCart(basketItems))
    }
    return (
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="continue__btn">
                    <Link to='/shops'>Continue Shopping</Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="continue__btn update__btn">
                    <BlackButton type={'submit'} handleClick={handleClickUpdateCart} >
                        <><i className="fa fa-spinner" /> Update cart</>
                    </BlackButton>
                </div>
            </div>
        </div>
    );
}
