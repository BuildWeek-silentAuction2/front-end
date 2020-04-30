import React from "react";
import {Link} from "react-router-dom";

import SellerCurrentAuctions from "./SellerCurrentAuctions";

import Button from '@material-ui/core/Button';

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
                <Button variant="contained" color="secondary">Create New Auction</Button>
            </Link>
            <br/>
            <br/>
        </div>
            <Link to="/update-seller-account">
                <Button variant="contained" color="secondary">Update Account</Button>
            </Link>
        </div>
    )
}

export default SellerPage;

