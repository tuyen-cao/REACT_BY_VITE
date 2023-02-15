
export interface HeroBanner {
    id: number,
    collectionType: string,
    collectionName: string,
    collectionDescription: string,
    socials?: Social[],
    bannerImage?: string
}

export interface Social {
    path: string,
    name: string
}

export interface CatBannerProps {
    id: number,
    thumbnail: string,
    categoryName: string
}
