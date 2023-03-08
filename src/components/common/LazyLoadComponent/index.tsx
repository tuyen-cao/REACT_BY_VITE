import { PagePreloder } from '@/components/common';
import { lazy, Suspense } from 'react';

export default function LazyLoadComponent(componentUrl: string) {
    const LazyElement = lazy(
        () => import(/* @vite-ignore */ `${componentUrl}`)
    );

    // Wrapping around the suspense component is mandatory
    return (
        <Suspense fallback={<PagePreloder />}>
            <LazyElement />
        </Suspense>
    );
}
