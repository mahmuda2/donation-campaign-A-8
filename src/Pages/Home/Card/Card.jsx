import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, text_color } = card;
    return (
        <div>
            <Link to={`/card/${id}`}>
            <div style={{backgroundColor: card_bg}} className="rounded-lg shadow">
                    <img className="w-full" src={picture} alt="" />
                
                <p style={{backgroundColor: text_button_bg, color: text_color}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg mt-4 ml-4 ">
                        {category}
                    </p>
                <div className="p-5">
                    <p>
                        <h5 style={{color: category_bg}}>{title}</h5>
                    </p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;


