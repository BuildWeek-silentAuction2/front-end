import React, {useEffect} from "react";
import {connect} from "react-redux";

import {newBid} from "../../actions/bidderActions/newBid";

import SpinningLoader from "../Design Components/SpinningLoader"
import StyledButton from "../Design Components/StyledButton";

const AddBid = props => {
    useEffect(() => {
        props.newBid();
    }, [props])

    const handleChange = e => {
        e.persist();
      };

    const addingBid = props => {
        return (
        props.isFetching && (
        <div className="spinner-box">
            <SpinningLoader />
        </div>
        ))}

    return (
        <div className="add-bid">
            <form onSubmit={newBid()}>
                <input 
                type="text"
                name="bid"
                value={props.auction.amount}
                onChange={handleChange}
                />

            </form>
            <StyledButton type="submit" onSubmit={addingBid} variant="contained" color="primary">Add Bid</StyledButton>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log("State to Props: ", state);
    return {
        auction: state.bidderReducer.data,
        isFetching: state.bidderReducer.isFetching,
        error: state.bidderReducer.error
    };
};

export default connect(mapStateToProps, {newBid})(AddBid)