import { PRODUCTTYPES } from '@/constants';
import { ProductItemType } from '@/models';
import { formatCurrency } from '@/utilities';
import styled from 'styled-components';
import { RatingBlock } from '../Rating';

export interface ProductItemProps {
    product: ProductItemType;
    addToCart?: (id: number) => void;
}
export function ProductItem({ product, addToCart }: ProductItemProps) {
    const handleClickAddToCart = () => {
        addToCart?.(product.id);
    };
    return (
        <ProductItemStyled className="product__item">
            <ThumbnailStyled className="product-item__pic set-bg">
                {' '}
                <Thumbnail alt={product.title} src={product.image} />
                {product.type !== PRODUCTTYPES.BEST_SELLERS ? (
                    <span className="label">{product.type}</span>
                ) : null}
                <ul className="product__hover">
                    <li>
                        <button>
                            <img src="img/icon/heart.png" alt="" />
                        </button>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/icon/compare.png" alt="" />{' '}
                            <span>Compare</span>
                        </a>
                    </li>
                </ul>
            </ThumbnailStyled>
            <div className="product-item__text">
                <h6>{product.title}</h6>
                <AddToCartStyled
                    className="add-cart"
                    onClick={handleClickAddToCart}
                >
                    + Add To Cart
                </AddToCartStyled>
                <RatingBlock rating={product.rating} />
                <h5>{formatCurrency.format(product.price)}</h5>
                <div className="product__color-select">
                    <label htmlFor="pc-1">
                        <input type="radio" id="pc-1" />
                    </label>
                    <label className="active black" htmlFor="pc-2">
                        <input type="radio" id="pc-2" />
                    </label>
                    <label className="grey" htmlFor="pc-3">
                        <input type="radio" id="pc-3" />
                    </label>
                </div>
            </div>
        </ProductItemStyled>
    );
}

const ThumbnailStyled = styled.div`
    background: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Thumbnail = styled.img`
    max-height: 180px;
    object-fit: cover;
    max-width: 80%;
`;

const ProductItemStyled = styled.div`
    &:hover {
        .add-cart {
            top: 22px;
            opacity: 1;
            visibility: visible;
        }
    }
    button {
        border: 0;
        outline: 0;
        padding: 0;
        margin: 0;
        background: none;
    }
`;

const AddToCartStyled = styled.button`
    font-size: 15px;
    color: #e53637;
    font-weight: 700;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
`;
