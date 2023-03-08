
import App from '@/App';
import { ErrorBoundaryRouter } from '@/components/common';
import { shopLoader, shoppingCartLoader } from '@/features/products/loaders';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import LazyLoadComponent from '../../components/common/LazyLoadComponent';

const homePage = "/pages/Home/index.tsx";
const shopsPage = "/pages/Shops/index.tsx";
const shopDetailPage = "/pages/ShopDetail/index.tsx";
const shoppingCartPage = "/pages/ShoppingCart/index.tsx";
const contactPage = "/pages/Contact/index.tsx";
const checkoutPage = "/pages/Checkout/index.tsx";
const blogsPage = "/pages/Blogs/index.tsx";
const blogDetailPage = "/pages/BlogDetail/index.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route
                index
                element={LazyLoadComponent(homePage)}
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='shops'
                errorElement={<ErrorBoundaryRouter />}
            >
                <Route
                    index
                    element={LazyLoadComponent(shopsPage)}
                    loader={
                        () => {
                            return shopLoader()
                        }
                    }
                />
                <Route
                    path='shop-details'
                    element={LazyLoadComponent(shopDetailPage)} />
                <Route
                    path='shopping-cart'
                    element={LazyLoadComponent(shoppingCartPage)}
                    loader={
                        () => {
                            return shoppingCartLoader()
                        }
                    } />
            </Route>
            <Route
                path='contact'
                element={LazyLoadComponent(contactPage)}
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='checkout'
                element={LazyLoadComponent(checkoutPage)}
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='blogs'
                errorElement={<ErrorBoundaryRouter />} >
                <Route
                    index
                    element={LazyLoadComponent(blogsPage)} />
                <Route
                    path='blog-details'
                    element={LazyLoadComponent(blogDetailPage)} />
            </Route>
        </Route>
    ))
