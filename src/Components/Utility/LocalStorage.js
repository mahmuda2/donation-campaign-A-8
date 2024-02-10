const getDonationStoredAmount = () => {
    const storedDonationAmount = localStorage.getItem('Stored-amount');
    if(storedDonationAmount ){
        return JSON.parse(storedDonationAmount);
    }
    return [];

}


const saveStoredAmount = id => {
    const storedDonationAmounts = getDonationStoredAmount ();
    const exits = storedDonationAmounts.find(cardID => cardID === id);
    if(!exits){
        storedDonationAmounts.push(id);
        localStorage.setItem('Stored-amount', JSON.stringify(storedDonationAmounts))
    }
}

export {getDonationStoredAmount , saveStoredAmount}