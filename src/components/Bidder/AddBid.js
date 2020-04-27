import React, {useEffect} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

import {newBid} from "../../actions/bidderActions/newBid";

const AddBid = props => {
    useEffect(() => {
        props.newBid();
    }, [])

    const addingBid = props => {
        return (
        props.isFetching && (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        //timeout={3000} //optional end
        />
        ))}

    return (
        <div className="add-auction">
            <form onSubmit={newBid()}>
                <input 
                type="text"
                name="bid"
                value={auction.amount}
                onChange={handleChange}
                />

            </form>
            <button type="submit" onSubmit={addingBid}>Add Auction</button>
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

export default connect(mapStateToProps, {newBid}(AddBid))