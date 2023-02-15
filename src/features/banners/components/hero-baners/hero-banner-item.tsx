import { HeroBanner } from '@/models/banner';
import clsx from 'clsx';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HeroBannerItemProps {
    banner: HeroBanner,
    isActive?: boolean
}

export default function HeroBannerItem({ banner, isActive }: HeroBannerItemProps) {

    return (
        <>
            <div className={clsx("owl-item animated ", isActive && " owl-animated-in  active")}>
                <div className="hero__items set-bg" style={{ backgroundImage: `url(${banner.bannerImage})` }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-7 col-md-8">
                                <div className="hero__text">
                                    <h6>{banner.collectionType}</h6>
                                    <h2>{banner.collectionName}</h2>
                                    <p>{banner.collectionDescription}</p>
                                    <Link to='/shops' className="primary-btn">
                                        Shop now <span className="arrow_right"></span></Link>

                                    {banner.socials?.length &&
                                        <div className="hero__social">
                                            {banner.socials.map(item => {
                                                return (
                                                    <Link to={item.path}>
                                                        <i className={`fa fa-${item.name}`}></i></Link>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
