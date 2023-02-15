import PagePreloder from "@/components/common/PagePreloder";
import React, { lazy, Suspense } from "react"


export default function LazyLoadRoutes(componentName: string) {
    const LazyElement = lazy(() => import(`../pages/${componentName}.tsx`));

    // Wrapping around the suspense component is mandatory
    return (
        <Suspense fallback={<PagePreloder />}>
            <LazyElement />
        </Suspense>
    );
}
