import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return (
        <section className="spad">
            <div className="container">
                Error!!!

            </div>
        </section>
    )
}

