import { useState } from "react";
import Banner from "../../Components/Header/Banner/Banner";
import Cards from "./cards/Cards";


const Home = () => {
    const [value, setValue] = useState('')

    return (
        <div>
            <div>
            <Banner setValue={setValue}></Banner>
            </div>
            <Cards value={value}></Cards>
        </div>
    );
};

export default Home;