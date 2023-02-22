import { ProductItem } from '@/components/products';
import { ProductItemType } from '@/models';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/products/slice'
import { useCallback } from 'react';


export interface ProductSectionProps {
    productList: ProductItemType[]
}

export function ProductSection({ productList }: ProductSectionProps) {
    const dispath = useDispatch()
    const handleAddToCart = useCallback((id: number) => {
        const product = productList.find(p => p.id === id);
        const price = product ? product.price : 0;
        dispath(addToCart({
            id: id,
            quantity: 1,
            price: price
        }))
    }, [dispath, productList])

    return (<>

        {productList.length &&
            <div className="row" >
                {productList.map(item => {
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={`product-${item.id}`}>
                            <ProductItem product={item} addToCart={handleAddToCart} />
                        </div>
                    )
                })}

            </div>}
    </>
    );
}
