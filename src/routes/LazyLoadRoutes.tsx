import PagePreloder from "@/components/common/PagePreloder";
import React, { lazy, Suspense } from "react"


export default function LazyLoadRoutes(componentName: string, url = '../pages/') {
    const LazyElement = lazy(() => import(`${url}${componentName}.tsx`));

    // Wrapping around the suspense component is mandatory
    return (
        <Suspense fallback={<PagePreloder />}>
            <LazyElement />
        </Suspense>
    );
}
