import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div>
            <h4 className="text-center font-bold mt-80">Ops... Error 404</h4>
            <Link className="flex items-center justify-center mt-6" to='/'><button className="bg-red-600 w-full py-3 text-3xl font-bold">Go home</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;