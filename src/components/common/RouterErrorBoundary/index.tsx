import { useRouteError } from 'react-router-dom';

export const ErrorBoundaryRouter = () => {
    const error: { status: string; message: string } = useRouteError() as {
        status: string;
        message: string;
    };

    return (
        <section className="spad">
            <div className="container">Error : {error.message}</div>
        </section>
    );
};
