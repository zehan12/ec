import { FC, Fragment } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "../page/Index";
import Home from "../page/home";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import Layout from "../layout";
import About from "../page/About";
import ProductSlot from "../slot/ProductSlot";
import ProductNav from "../layout/product";

const routes = [
    {
        /**
         *
         *  here are the initial routes that we'll need in our system.
         *  
         */
        path: "/",
        element: <Layout />,
        errorElement: <ErrorBoundary />, 
        preload: <About />,
        children: [ 
            {
                path: "", 
                element: <Index />,
            },
            {
                path: "home", 
                element: <Home />,
            },
            {
                path: "product/:productId/",
                element: <ProductNav />,
                children: [
                    { path: "", element: <ProductSlot slotName="productOverview" /> },
                    { path: "details", element: <ProductSlot slotName="productDetails" /> },
                    { path: "related", element: <ProductSlot slotName="relatedProducts" /> },
                    { path: "reviews", element: <ProductSlot slotName="productReviews" /> },
                ],
            },
        ],
    },
];

const router = createBrowserRouter(routes, {
    basename: "/",
});

const ApplicationRoutes: FC = () => {
    return (
        <Fragment>
            <RouterProvider router={router} />
        </Fragment>
    );
};

export default ApplicationRoutes;