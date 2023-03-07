
import App from '@/App';
import { ErrorBoundaryRouter } from '@/components/common';
import { shopLoader, shoppingCartLoader } from '@/features/products/loaders';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import LazyLoadRoutes from '../LazyLoadRouters';

const homePage = "../../pages/Home/index.tsx";
const shopsPage = "../../pages/Shops/index.tsx";
const shopDetailPage = "../../pages/ShopDetail/index.tsx";
const shoppingCartPage = "../../pages/ShoppingCart/index.tsx";
const contactPage = "../../pages/Contact/index.tsx";
const checkoutPage = "../../pages/Checkout/index.tsx";
const blogsPage = "../../pages/Blogs/index.tsx";
const blogDetailPage = "../../pages/BlogDetail/index.tsx";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route
                index
                element={LazyLoadRoutes(homePage)}
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='shops'
                errorElement={<ErrorBoundaryRouter />}
            >
                <Route
                    index
                    element={LazyLoadRoutes(shopsPage)}
                    loader={
                        () => {
                            return shopLoader()
                        }
                    }
                />
                <Route
                    path='shop-details'
                    element={LazyLoadRoutes(shopDetailPage)} />
                <Route
                    path='shopping-cart'
                    element={LazyLoadRoutes(shoppingCartPage)}
                    loader={
                        () => {
                            return shoppingCartLoader()
                        }
                    } />
            </Route>
            <Route
                path='contact'
                element={LazyLoadRoutes(contactPage)}
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='checkout'
                element={LazyLoadRoutes(checkoutPage)}
                errorElement={<ErrorBoundaryRouter />} />
            <Route
                path='blogs'
                errorElement={<ErrorBoundaryRouter />} >
                <Route
                    index
                    element={LazyLoadRoutes(blogsPage)} />
                <Route
                    path='blog-details'
                    element={LazyLoadRoutes(blogDetailPage)} />
            </Route>
        </Route>
    ))
