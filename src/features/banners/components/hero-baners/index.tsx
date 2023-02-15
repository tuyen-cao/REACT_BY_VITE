import React, { useEffect, useRef, useState } from 'react';
import HeroBannerItem from './hero-banner-item';

const bannerList = [
    {
        id: 1,
        collectionType: "Collection",
        collectionName: "Collection Name",
        collectionDescription: "Description",
        bannerImage: "/img/hero/hero-1.jpg",
        socials: [{
            path: "facebook.com",
            name: "facebook"
        }]
    },
    {
        id: 2,
        collectionType: "Collection 2",
        collectionName: "Collection Name 2",
        collectionDescription: "Description 2",
        bannerImage: "/img/hero/hero-2.jpg",
        socials: [
            {
                path: "facebook.com",
                name: "facebook"
            },
            {
                path: "instagram.com",
                name: "instagram"
            }
        ]
    }
]
export function HeroBanners() {
    const [activeBanner, setActive] = useState(0)
    const [stageStyle, setStageStyle] = useState({})

    const activeRef = useRef(0)

    useEffect(() => {
        setStageStyle({
            transform: `translate3d(${-activeBanner * 100}vw, 0px, 0px)`,
            transition: `all 0s ease 0s`,
            width: `${bannerList.length * 100}vw`
        })

        console.log(activeRef.current + " =========  " + activeBanner);
        const prevItem = document.querySelector(`.owl-item:nth-of-type(${activeRef.current + 1})`)
        const currentItem = document.querySelector(`.owl-item:nth-of-type(${activeBanner + 1})`)
        if (activeRef.current !== activeBanner) {
            prevItem?.classList.add('owl-animated-out')
            prevItem?.classList.add('fadeOut')
            setTimeout(() => {
                prevItem?.classList.remove('owl-animated-out')
                prevItem?.classList.remove('fadeOut')
            }, 1000)



            //currentItem?.classList.remove('owl-animated-out')
            //currentItem?.classList.remove('fadeOut')
            console.log(prevItem)
        }
    }, [activeBanner])

    const gotoItem = (index: number) => {
        let curIndex = index
        if (index >= bannerList.length) {
            curIndex = 0
        }
        if (index < 0) {
            curIndex = bannerList.length - 1
        }
        activeRef.current = activeBanner
        setActive(curIndex)
    }

    const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        gotoItem(activeBanner + 1)
    }
    const handlePrevious = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        gotoItem(activeBanner - 1)
    }

    return (
        <>
            {bannerList.length &&

                <section className="hero">
                    <div className="hero__slider owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={stageStyle}>
                                {
                                    bannerList.map((item, index) => {
                                        return (
                                            <HeroBannerItem
                                                key={item.id}
                                                banner={item}
                                                isActive={activeBanner === index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {bannerList.length > 1 && <>
                            <div className="owl-nav">
                                <button type="button" role="presentation" className="owl-prev" onClick={handlePrevious}>
                                    <span className="arrow_left"></span>
                                </button>
                                <button type="button" role="presentation" className="owl-next" onClick={handleNext}>
                                    <span className="arrow_right"></span>
                                </button>
                            </div>
                            <div className="owl-dots disabled"></div>
                        </>}

                    </div>
                </section>
            }
        </>
    );
}
