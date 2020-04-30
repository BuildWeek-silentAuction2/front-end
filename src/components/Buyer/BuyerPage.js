import React, {useState} from "react";

import BuyerCurrentAuctions from "../Buyer/BuyerCurrentAuctions";

const BuyerPage = () => {
    return (
        <div>
            <h1>Welcome to the Silent Auction</h1>
            <h3>View available auctions below!</h3>
            <BuyerCurrentAuctions />
        </div>
    )
}

export default BuyerPage;