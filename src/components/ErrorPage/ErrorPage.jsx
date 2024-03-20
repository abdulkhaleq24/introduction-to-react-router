import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h2>Error occur</h2>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;