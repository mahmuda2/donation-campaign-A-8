import { useEffect, useState } from "react";
import Card from "../Card/Card";




const Cards = ({value}) => {
    const [cards, setCards] = useState([]);
    const [filterDonation, SetFilterDonation] = useState([]);

    useEffect(() => {
        const newDonation = cards.filter((item) => item.category.includes(value))
        SetFilterDonation(newDonation);
    }, [value])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {setCards(data), SetFilterDonation(data)});
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6 my-24 ">
            {
                filterDonation?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;