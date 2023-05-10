import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductDetail from './Pages/productDetailPage';
import Category from './Pages/categoryPage';
import {
  createBrowserRouter,
  RouterProvider,
  route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetail/>,
  },
  {
    path: "/category/:category",
    element: <Category/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);

