import { ProductItemProps } from '@/components/products';
import { ProductSection } from '@/features/products/components';
import { ProductListQuery, shopLoader } from '@/features/products/loaders';
import { ProductItemType } from '@/models';
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';

export default function Shops() {
    const initialData = useLoaderData() as Awaited<
        ReturnType<ReturnType<typeof shopLoader>>
    >;

    const { data } = useQuery({
        ...ProductListQuery(),
        initialData: initialData,
    });
    const productList = data as ProductItemType[];
    return (
        <>
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop__sidebar">Sidebar</div>
                        </div>
                        <div className="col-lg-9">
                            {productList && (
                                <ProductSection productList={productList} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
