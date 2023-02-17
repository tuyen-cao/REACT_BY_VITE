
import { ErrorBoundary } from '@/components/common';
import { Route, Routes } from 'react-router-dom';
import LazyLoadRoutes from './LazyLoadRoutes';


export const PageRouters = () => {
    return (
        <Routes >
            <Route
                index
                element={LazyLoadRoutes('home')}
                errorElement={<ErrorBoundary />} />
            <Route
                path='shops'
                errorElement={<ErrorBoundary />}>
                <Route
                    index
                    element={LazyLoadRoutes('shops')} />
                <Route
                    path='shop-details'
                    element={LazyLoadRoutes('shop-detail')} />
                <Route
                    path='shopping-cart'
                    element={LazyLoadRoutes('shopping-cart')} />
            </Route>
            <Route
                path='contact'
                element={LazyLoadRoutes('contact')}
                errorElement={<ErrorBoundary />} />
            <Route
                path='checkout'
                element={LazyLoadRoutes('checkout')}
                errorElement={<ErrorBoundary />} />
            <Route
                path='blogs'
                errorElement={<ErrorBoundary />} >
                <Route
                    index
                    element={LazyLoadRoutes('blogs')} />
                <Route
                    path='blog-details'
                    element={LazyLoadRoutes('blog-detail')} />
            </Route>
        </Routes>
    )
}

