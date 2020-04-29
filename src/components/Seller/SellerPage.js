import React from "react";
import {Link} from "react-router-dom";

import SellerCurrentAuctions from "./SellerCurrentAuctions";

import StyledButton from "../Design Components/StyledButton";

const SellerPage = () => {
    return (
        <div>
        <div>
            <h1>Welcome to the Auction</h1>
            <h3>View current auctions below, or start a new one</h3>
            <SellerCurrentAuctions />
            <br/>
            <br/>
        </div>
        <div>
            <Link to="/new-auction">
                <StyledButton>Create New Auction</StyledButton>
            </Link>
        </div>
        </div>
    )
}

export default SellerPage;

