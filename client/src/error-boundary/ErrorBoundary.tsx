import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

// Define the type for the error object
interface RouteError {
    message: string;
    // You can add more properties to the error object if needed
    // For example:
    // status: number;
    // stack: string;
}

function ErrorBoundary() {
    // Use the defined type for the error variable
    const error: RouteError | null = useRouteError();

    return (
        <Fragment>
            <section className="bg-red-800 w-full h-screen flex justify-center items-center overflow-hidden">
                <div className="hacking-animation bg-black h-screen flex justify-center items-center">
                    <pre className="hacking-animation__text font-mono text-base text-green-500"></pre>
                </div>
                <div className="w-1/3 h-max mx-auto z-10">
                    <div className="flex flex-col p-5 rounded-lg shadow bg-amber-50">
                        <div className="flex">
                            <div>
                                <svg
                                    className="w-6 h-6 fill-current text-red-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
                                </svg>
                            </div>

                            <div className="ml-3">
                                <h3 className="text-2xl text-red-800">
                                    Something went Wrong!!
                                </h3>
                                {/* Check if error exists before accessing its properties */}
                                {error && (
                                    <>
                                        <h2 className="font-semibold text-gray-800">
                                            {error.message}
                                        </h2>
                                    </>
                                )}
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                    In the past, JavaScript errors inside components used to
                                    corrupt React’s internal state and cause it to emit cryptic
                                    errors on next renders. These errors were always caused by an
                                    earlier error in the application code, but React did not
                                    provide a way to handle them gracefully in components, and
                                    could not recover from them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default ErrorBoundary;
