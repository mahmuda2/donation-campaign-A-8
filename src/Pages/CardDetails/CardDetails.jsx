import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveStoredAmount } from "../../Components/Utility/LocalStorage";


const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    const notify = () => {
        toast("Thanks for helping poor by donating!");
        saveStoredAmount(idInt);
    }

    return (
        <div className="container mx-auto">
            
                
            
            <div className="relative flex justify-center items-center">
                <img className="w-72 md:w-[701px] md:h-[365px] lg:w-[1320px] lg:h-[700px] object-cover" src={card.details_tab_img} alt="" />   
                <div className="lg:w-[1320px] lg:h-[130px] lg:top-[570px] lg:rounded-b lg:absolute lg:inset-0 lg:bg-black lg:opacity-40 lg:left-[108px]"></div>

                    
            </div>
            <button style={{backgroundColor: card.text_color}} onClick={notify} className="left-20 top-[1047px] px-6 py-4 rounded-sm text-white font-medium text-lg absolute md:top-[800px] md:left-[294px] lg:top-[723px] lg:left-[346px] bg-[#FF444A]">Donate {card.price}</button>
            <ToastContainer></ToastContainer>
            <div className="lg:ml-28 lg:mt-10 md:ml-[34px] md:mt-5 md:pb-3 pb-28 ml-5 mr-3">
                <p className="font-bold text-4xl mb-4">{card.title}</p>
                <p className="font-normal text-base text-justify lg:w-[1320px]">{card.description}</p>
            </div>
            
        </div>
    );
};

export default CardDetails;