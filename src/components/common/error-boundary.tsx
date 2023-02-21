import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <section className="spad">
        <div className="container">{error!.message}
        </div></section>
}
