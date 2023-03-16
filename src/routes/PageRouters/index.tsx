import App from '@/App';
import { ErrorBoundaryRouter, lazyWithRetries } from '@/components/common';
import { shopLoader, shoppingCartLoader } from '@/features/products/loaders';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

const LazyHome = lazyWithRetries(() => import('../../pages/Home'));
const LazyShopsPage = lazyWithRetries(() => import('../../pages/Shops'));
const LazyShopDetailPage = lazyWithRetries(
    () => import('../../pages/ShopDetail')
);
const LazyShoppingCartPage = lazyWithRetries(
    () => import('../../pages/ShoppingCart')
);
const LazyContactPage = lazyWithRetries(() => import('../../pages/Contact'));
const LazyCheckoutPage = lazyWithRetries(() => import('../../pages/Checkout'));
const LazyBlogsPage = lazyWithRetries(() => import('../../pages/Blogs'));
const LazyeBlogDetailPage = lazyWithRetries(
    () => import('../../pages/BlogDetail')
);

const LazySignInPage = lazyWithRetries(() => import('../../pages/SignIn'));
const LazyRegisterPage = lazyWithRetries(() => import('../../pages/Register'));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<App />}
            errorElement={<ErrorBoundaryRouter />}
        >
            <Route index element={<LazyHome />} />
            <Route path="shops" errorElement={<ErrorBoundaryRouter />}>
                <Route
                    index
                    element={<LazyShopsPage />}
                    loader={() => {
                        return shopLoader();
                    }}
                />
                <Route path="shop-details" element={<LazyShopDetailPage />} />
                <Route
                    path="shopping-cart"
                    element={<LazyShoppingCartPage />}
                    loader={() => {
                        return shoppingCartLoader();
                    }}
                />
            </Route>
            <Route
                path="contact"
                element={<LazyContactPage />}
                errorElement={<ErrorBoundaryRouter />}
            />
            <Route
                path="checkout"
                element={<LazyCheckoutPage />}
                errorElement={<ErrorBoundaryRouter />}
            />
            <Route path="blogs" errorElement={<ErrorBoundaryRouter />}>
                <Route index element={<LazyBlogsPage />} />
                <Route path="blog-details" element={<LazyeBlogDetailPage />} />
            </Route>
            <Route path="signin" element={<LazySignInPage />}></Route>
            <Route path="register" element={<LazyRegisterPage />}></Route>
        </Route>
    )
);
