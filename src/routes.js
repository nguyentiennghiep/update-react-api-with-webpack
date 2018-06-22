import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ProductListPage from './Pages/ProductListPage/ProductListPage';
import ProductActionContainer from './Containers/ProductActionContainer';


const routes = [
    {
        path: '/',
        exact: true,
        main : () => <HomePage />
    },
    {
        path: '/Product-List',
        exact: true,
        main : () => <ProductListPage />
    },
    {   
        path: '/product/add',
        exact: false,
        main : ({match}) => <ProductActionContainer match = {match}/>
    },
    {   
        path: '/product/:id/edit',
        exact: false,
        main : ({match}) => <ProductActionContainer match = {match}/>
    },
    {
        path: '',
        exact: false,
        main : () => <NotFoundPage />
    }

];

export default routes;