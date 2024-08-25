import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
            <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!!!</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Something went wrong!!!</h2>
            <h3 className="text-xl text-gray-600">
                {err.status} : {err.statusText}
            </h3>
            <p className="text-md text-gray-500 mt-4">Please try again later or contact support.</p>
        </div>
    );
};

export default Error;
