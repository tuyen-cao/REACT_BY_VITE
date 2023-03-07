
import App from '@/App';
import { ErrorBoundaryRouter } from '@/components/common';
import { shopLoader, shoppingCartLoader } from '@/features/products/loaders';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import LazyLoadRoutes from './lazy-load-routes';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route
                index
                element={LazyLoadRoutes('home')}
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='shops'
                errorElement={<ErrorBoundaryRouter />}
            >
                <Route
                    index
                    element={LazyLoadRoutes('shops')}
                    loader={
                        () => {
                            return shopLoader()
                        }
                    }
                />
                <Route
                    path='shop-details'
                    element={LazyLoadRoutes('shop-detail')} />
                <Route
                    path='shopping-cart'
                    element={LazyLoadRoutes('shopping-cart')}
                    loader={
                        () => {
                            return shoppingCartLoader()
                        }
                    } />
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
        </Route>
    ))
