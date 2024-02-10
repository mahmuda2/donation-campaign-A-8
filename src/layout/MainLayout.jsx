import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div>
            <div>
                <div className="container mx-auto">
                    <NavBar></NavBar>
                </div>
            </div>

            <Outlet></Outlet>


        </div>
    );
};

export default MainLayout;

