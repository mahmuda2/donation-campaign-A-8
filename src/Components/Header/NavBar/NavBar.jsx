import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div>
                <nav className="md:flex justify-center md:justify-between items-center py-6 px-5">
                    <Link to="/">
                    <img src="https://i.ibb.co/RYGvjGK/Logo.png" alt="" /></Link>

                    <ul className="md:flex gap-5 smt-7">
                        <Link to="/">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                }
                            >
                                Home
                            </NavLink>

                        </li>
                        </Link>

                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                }
                            >
                                Donation
                            </NavLink>


                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                                }
                            >
                                Statistics
                            </NavLink>


                        </li>
                    </ul>

                </nav>
                
            </div>
        </div>
    );
};

export default NavBar;