import React, {useEffect} from "react";
import {connect} from "react-redux";

import {fetchAuctions} from "../../actions/fetchAuctions";

import SpinningLoader from "../Design Components/SpinningLoader"
import StyledButton from "../Design Components/StyledButton";

const BuyerCurrentAuctions = props => {
    useEffect(() => {
        props.fetchAuctions();
    }, [props])

    return (
        <div className="auction-list">
            <h2>Current Running Auctions:</h2>
            <div className="spinner-box">
                <SpinningLoader />
            </div>
            {props.error && <p className="error">{props.error}</p>}
            {props.data && props.data.map(item => (
                <div className="auction-card">
                    <h4>{item.name}</h4>
                    <p>{item.start_time}</p>
                    <p>{item.end_time}</p>
                    <p>Anonymous Bidding: {item.anonymous_bidders}</p>
                    <StyledButton>Bid Now</StyledButton>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    // console.log("State to Props: ", state);
    return {
        data: state.bidderReducer.data,
        isFetching: state.bidderReducer.isFetching,
        error: state.bidderReducer.error
    };
};

export default connect(mapStateToProps, {fetchAuctions})(BuyerCurrentAuctions);