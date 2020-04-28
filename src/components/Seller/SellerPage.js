import React, {useState} from "react";

import SellerCurrentAuctions from "./SellerCurrentAuctions";

import StyledButton from "../Design Components/StyledButton";

const SellerPage = () => {
    const [auctionList, setAuctionList] = useState([]);

    return (
        <div>
            <h1>Welcome to the Auction</h1>
            <h3>View current auctions below, or start a new one</h3>
            <SellerCurrentAuctions auctions={auctionList} addAuctions={setAuctionList}/>
            <StyledButton>Create New Auction</StyledButton>
        </div>
    )
}

export default SellerPage;