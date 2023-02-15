import { MainLayout } from '@/components/layout';
import { CategoryBanner, HeroBanners } from '@/features/banners/components';
import * as React from 'react';
import { Outlet } from 'react-router-dom';


export default function Home() {
    return (
        <MainLayout>
            <>
                <HeroBanners />
                <CategoryBanner />

            </>
        </MainLayout>
    )
}
