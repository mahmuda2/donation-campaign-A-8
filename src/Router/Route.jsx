
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../Pages/ErrorElement/ErrorPage';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import CardDetails from '../Pages/CardDetails/CardDetails';

const Route = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }, 
            {
                path: "/card/:id",
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default Route;