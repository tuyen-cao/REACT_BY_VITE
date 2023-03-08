import { PagePreloder } from '@/components/common';
import { lazy, Suspense } from 'react';

export default function LazyLoadComponent(componentUrl: string) {
    const LazyElement = lazy(
        () =>
            import(
                /* @vite-ignore */ `${
                    import.meta.env.VITE_REACT_APP_BASE_URL
                }src${componentUrl}`
            )
    );

    // Wrapping around the suspense component is mandatory
    return (
        <Suspense fallback={<PagePreloder />}>
            <LazyElement />
        </Suspense>
    );
}
