import { Link } from "react-router-dom";


const TotalDonation = ({card}) => {
    const { id, details_picture, title, category, category_bg, card_bg, text_button_bg, text_color, price } = card;
    return (
        <div>
            <div style={{backgroundColor: card_bg}} className="flex flex-col items-center rounded-lg shadow lg:flex-row  ">
                <img className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src={details_picture} alt="" />
                    <div className="flex flex-col  p-4 leading-normal">
                    <p style={{backgroundColor: text_button_bg, color: text_color}} className=" px-3 py-2 text-sm font-medium rounded-lg">
                        {category}
                    </p>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                        <p style={{color: text_color }} className="mb-3 font-medium text-gray-700 dark:text-gray-400">{price}</p>
                        <Link to={`/card/${id}`}><button style={{backgroundColor: category_bg, }} className="text-white px-4 py-2 rounded-md">View Details</button></Link>
                    </div>
            </div>
        </div>
    );
};

export default TotalDonation;