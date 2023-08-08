import { FC, Fragment } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "../page/Index";
import Home from "../page/home";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

const routes = [
    {
        /**
         *
         *  here are the initial routes that we'll need in our system.
         *  
         */
        path: "/", // show path for routing
        element: "", // show component for particular path
        errorElement: <ErrorBoundary />, // show error component for path is different
        children: [ // show children component for routing
            {
                path: "/",
                element: <Index />,
            },
            {
                path: "/home",
                element: <Home />,
            },
        ],
    }
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