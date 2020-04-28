import React, {useEffect} from "react";
import {connect} from "react-redux";

import {fetchAuctions} from "../../actions/fetchAuctions";

import SpinningLoader from "../Design Components/SpinningLoader"
  
const SellerCurrentAuctions = props => {

    useEffect(() => {
        props.fetchAuctions();
        //console.log("Fetch Auctions: ", props.fetchAuctions())
    }, [])

    return (
        <div className="auction-list">
            <h2>Current Running Auctions:</h2>
            {props.isFetching && (
            <div className="spinner-box">
                <SpinningLoader />
            </div>
            )}
            {props.error && <p className="error">{props.error}</p>}
            {props.data && props.data.map(item => (
                <div className="auction-card">
                    <h4>Name:{item.name}</h4>
                    <p>Start Time:{item.start_time}</p>
                    <p>End Time:{item.end_time}</p>
                    <p>Anonymous Bidding: {item.anonymous_bidders}</p>
                </div>
            ))}
        </div>
    )
};

const mapStateToProps = state => {
    console.log("State to Props: ", state);
    return {
        data: state.sellerReducer.data.data,
        isFetching: state.sellerReducer.isFetching,
        error: state.sellerReducer.error
    };
};

export default connect(mapStateToProps, {fetchAuctions})(SellerCurrentAuctions)