import { NUMBER_BANNER_ITEMS } from "@/constants";
import { CatBannerProps } from "@/models/Banner";
import { Link } from "react-router-dom";


export interface CategoryItemProps {
    catItem: CatBannerProps,
    pos?: number
}

export default function CategoryItem({ catItem, pos = 0 }: CategoryItemProps) {
    return (
        <>
            {pos % NUMBER_BANNER_ITEMS === 0 &&
                <div className="col-lg-7 offset-lg-4">
                    <div className="banner__item">
                        <Item catItem={catItem} />
                    </div>
                </div>
            }
            {pos % NUMBER_BANNER_ITEMS === 1 &&
                <div className="col-lg-5">
                    <div className="banner__item banner__item--middle">
                        <Item catItem={catItem} />
                    </div>
                </div>
            }
            {pos % NUMBER_BANNER_ITEMS === 2 &&
                <div className="col-lg-7">
                    <div className="banner__item banner__item--last">
                        <Item catItem={catItem} />
                    </div>
                </div>
            }
        </>
    );
}


export const Item = ({ catItem }: CategoryItemProps) => {

    return (
        <>
            <div className="banner-item__pic">
                <img src={catItem.thumbnail} alt="" />
            </div>
            <div className="banner-item__text">
                <h2>{catItem.categoryName}</h2>
                <Link to="/shops">Shop now</Link>
            </div>
        </>
    )
}