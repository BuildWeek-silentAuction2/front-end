import React from "react";

import SellerCurrentAuctions from "./SellerCurrentAuctions";

import StyledButton from "../Design Components/StyledButton";

function SellerPage () {
    return (
        <div>
            <h1>Welcome to the Auction</h1>
            <h3>View current auctions below, or start a new one</h3>
            <SellerCurrentAuctions />
            <StyledButton>Create New Auction</StyledButton>
        </div>
    )
}

export default SellerPage;