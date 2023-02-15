import { ProductItem } from '@/components/products';
import { ProductItemType } from '@/models';

export interface ProductSectionProps {
    productList: ProductItemType[]
}

export default function ProductSection({ productList }: ProductSectionProps) {
    const handleAddToCart = (productId: number) => {
        console.log(productId + " added to cart");
    }
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
