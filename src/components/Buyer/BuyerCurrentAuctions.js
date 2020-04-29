import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {fetchAuctions} from "../../actions/fetchAuctions";

import SpinningLoader from "../Design Components/SpinningLoader"
import StyledButton from "../Design Components/StyledButton";

const BuyerCurrentAuctions = props => {

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
                <div className="auction-card" key={item.id}>
                    <h3>Auction {item.id}</h3>
                    <h4>End Time: {item.end_time}</h4>
                    <Link to="/view-auction/:id">
                        <StyledButton>Details</StyledButton>
                    </Link>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log("State to Props: ", state);
    return {
        data: state.buyerReducer.data.data,
        isFetching: state.buyerReducer.isFetching,
        error: state.buyerReducer.error
    };
};

export default connect(mapStateToProps, {fetchAuctions})(BuyerCurrentAuctions);