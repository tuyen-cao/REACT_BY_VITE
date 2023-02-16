import { ProductItem } from '@/components/products';
import { BasketItem, ProductItemType } from '@/models';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/products/slice'
import { useCallback } from 'react';
import { number } from 'prop-types';

export interface ProductSectionProps {
    productList: ProductItemType[]
}

export default function ProductSection({ productList }: ProductSectionProps) {
    const dispath = useDispatch()
    const handleAddToCart = useCallback((id: number) => {

        dispath(addToCart({
            id: id,
            quantity: 1,
            price: productList.filter(p => p.id === id)[0].price
        }))
    }, [])

    return (<>

        {productList.length &&
            <div className="row" >
                {productList.map(item => {
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <ProductItem key={`product-${item.id}`} product={item} addToCart={handleAddToCart} />
                        </div>
                    )
                })}

            </div>}
    </>
    );
}
