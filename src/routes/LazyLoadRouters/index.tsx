
import { PagePreloder } from "@/components/common";
import React, { lazy, Suspense } from "react"


export default function LazyLoadRoutes(componentUrl: string) {
    const LazyElement = lazy(() => import(componentUrl));

    // Wrapping around the suspense component is mandatory
    return (
        <Suspense fallback={<PagePreloder />}>
            <LazyElement />
        </Suspense>
    );
}
