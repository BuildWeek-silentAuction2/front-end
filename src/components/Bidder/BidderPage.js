import React, {useState} from "react";

import BidderCurrentAuctions from "../Bidder/BidderCurrentAuctions";

const BidderPage = () => {
    const [auctionList, setAuctionList] = useState([]);

    return (
        <div>
            <h1>Welcome to the Silent Auction</h1>
            <h3>View available auctions below!</h3>
            <BidderCurrentAuctions auctions={auctionList} addAuctions={setAuctionList}/>
        </div>
    )
}

export default BidderPage;