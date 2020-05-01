import React from "react";
import {useHistory, Link} from "react-router-dom";

import BuyerCurrentAuctions from "../Buyer/BuyerCurrentAuctions";

import Button from '@material-ui/core/Button';

const BuyerPage = () => {
    const { push } = useHistory()

    const logOut = () => {
        localStorage.removeItem("token")
        push(`/`)
    }

    return (
        <div>
            <h1>Welcome to the Silent Auction</h1>
            <h3>View available auctions below!</h3>
                <BuyerCurrentAuctions />
                <br/>
            <div>
                <Link to="/update-seller-account">
                    <Button variant="contained" color="primary">Update Account</Button>
                </Link>
                <br/>
                <br/>
            </div>
            <Button onClick={logOut} variant="contained" color="primary">Log Out</Button>
        </div>
    )
}

export default BuyerPage;