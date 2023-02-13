
import { useRoutes } from 'react-router-dom';
import LazyLoadRoutes from './LazyLoadRoutes';

export function RouterElement() {
    const routes = [
        {
            path: '/',
            name: 'Home',
            element: LazyLoadRoutes('home'),
        },
        {
            path: '/contact',
            name: 'Contact',
            element: LazyLoadRoutes('contact'),
        },
        {
            path: '/shops',
            name: 'Shops',
            element: LazyLoadRoutes('shops'),
            children: [
                {
                    path: 'shop-details',
                    name: 'Shop Details',
                    element: LazyLoadRoutes('shop-details'),
                },
            ],
        },
        {
            path: '/blogs',
            name: 'Blogs',
            element: LazyLoadRoutes('blogs'),
            children: [
                {
                    path: 'blog-details',
                    name: 'Blog Details',
                    element: LazyLoadRoutes('blog-details'),
                },
            ],
        },

    ];

    return useRoutes(routes);

}
