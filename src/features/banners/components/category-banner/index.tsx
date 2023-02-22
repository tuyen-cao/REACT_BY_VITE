
import CategoryItem from './banner-item';



const bannerList = [
    {
        id: 1,
        categoryName: "Collection 1",
        thumbnail: "/img/banner/banner-1.jpg",

    },
    {
        id: 2,
        categoryName: "Collection 2",
        thumbnail: "/img/banner/banner-2.jpg",
    },
    {
        id: 3,
        categoryName: "Collection 3",
        thumbnail: "/img/banner/banner-3.jpg",

    }
]
export function CategoryBanner() {
    console.log(bannerList);
    return (
        <>
            {bannerList.length &&
                <section className="spad">
                    <div className="container">
                        <div className="row">
                            {bannerList.map((item, i) => {
                                return (<CategoryItem key={`cat-banner-${item.id}`} catItem={item} pos={i} />)
                            })}
                        </div>
                    </div>
                </section>
            }
        </>
    );
}
