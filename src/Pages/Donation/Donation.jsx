import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationStoredAmount } from "../../Components/Utility/LocalStorage";
import TotalDonation from "../TotalDonaion/TotalDonation";


const Donation = () => {
    const cards = useLoaderData();
    const [totalDonation, setTotalDonation] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedCardsIds = getDonationStoredAmount();
        if (cards.length > 0) {
            const totalDonation = cards.filter(card => storedCardsIds.includes(card.id));
            setTotalDonation(totalDonation);
        }

    }, [cards])
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:container md:mx-auto">
                {
                    totalDonation.slice(0, dataLength).map(card => <TotalDonation key={totalDonation.id} card={card}></TotalDonation>)
                }

            </div>
            <div className={dataLength === cards.length ? 'hidden' : ''}>
                {totalDonation.length > 4 && (
                    <div className="flex justify-center items-center my-3">
                        <button
                            onClick={() => setDataLength(cards.length)}
                            className="btn btn-accent"
                        >
                            See All
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Donation;