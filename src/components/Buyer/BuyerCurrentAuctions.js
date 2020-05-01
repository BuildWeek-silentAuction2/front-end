import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {fetchAuctions} from "../../actions/fetchAuctions";

import SpinningLoader from "../Design Components/SpinningLoader"
import Button from '@material-ui/core/Button';

const BuyerCurrentAuctions = props => {
    const [auctionIdBuyer, setAuctionIdBuyer] = useState([])

    useEffect(() => {
        props.fetchAuctions();
        //console.log("Fetch Auctions: ", props.fetchAuctions())
    }, [])

    const submitIdBuyer = e => {
        setAuctionIdBuyer(...auctionIdBuyer, props.auctionData.id)
        // console.log("Auction Id: ", auctionId)
    };

    return (
        <div className="auction-list">
            <h2>Current Running Auctions:</h2>
            {props.isFetching && (
            <div className="spinner-box">
                <SpinningLoader />
            </div>
            )}
            {props.auctionData && props.auctionData.map(item => (
                <div className="auction-card" key={item.id}>
                    <h3>{item.name}</h3>
                    <h4>End Time: {item.end_time}</h4>
                    <Link to={`/view-auction-bid/${item.id}`}>
                        <Button onClick={submitIdBuyer} variant="contained" color="primary">Details</Button>
                    </Link>
                </div>
            ))}
        </div>
    )
};
const mapStateToProps = state => {
    // console.log("Bidder Auctions State to Props: ", state);
    return {
        auctionData: state.buyerReducer.data.data,
        isFetching: state.buyerReducer.isFetching,
        error: state.buyerReducer.error
    };
};

export default connect(mapStateToProps, {fetchAuctions})(BuyerCurrentAuctions);