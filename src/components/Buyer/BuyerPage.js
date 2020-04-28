import React, {useState} from "react";

import BuyerCurrentAuctions from "../Bidder/BuyerCurrentAuctions";

const BuyerPage = () => {
    const [auctionList, setAuctionList] = useState([]);

    return (
        <div>
            <h1>Welcome to the Silent Auction</h1>
            <h3>View available auctions below!</h3>
            <BuyerCurrentAuctions auctions={auctionList} addAuctions={setAuctionList}/>
        </div>
    )
}

export default BuyerPage;