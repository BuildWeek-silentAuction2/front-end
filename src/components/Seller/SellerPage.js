import React, {useState} from "react";

import SellerCurrentAuctions from "./SellerCurrentAuctions";

import Button from "@material-ui/core/Button";

const SellerPage = () => {
    const [auctionList, setAuctionList] = useState([]);

    return (
        <div>
            <h1>Welcome to the Auction</h1>
            <h3>View current auctions below, or start a new one</h3>
            <SellerCurrentAuctions auctions={auctionList} addAuctions={setAuctionList}/>
            <Button variant="contained" color="primary">Create New Auction</Button>
        </div>
    )
}

export default SellerPage;