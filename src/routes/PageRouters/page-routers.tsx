
import { ErrorBoundaryRouter } from '@/components/common';
import { Route, Routes } from 'react-router-dom';
import LazyLoadRoutes from '../LazyLoadRouters';


export const PageRouters = () => {
    return (
        <Routes >
            <Route
                index
                element={LazyLoadRoutes('home')}
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='shops'
                errorElement={<ErrorBoundaryRouter />}>
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
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='checkout'
                element={LazyLoadRoutes('checkout')}
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='blogs'
                errorElement={<ErrorBoundaryRouter />} >
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

