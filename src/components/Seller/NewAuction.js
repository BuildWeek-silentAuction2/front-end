import React, {useEffect} from "react";
import {connect} from "react-redux";

import newAuction from "../../actions/sellerActions/newAuction"

import StyledButton from "../Design Components/StyledButton";

const NewAuction = props => {
    useEffect(() => {
        props.newAuction();
    }, [])

      const handleChange = e => {
        e.persist();
      };

    return (
        <div className="add-auction">
            <form onSubmit={newAuction()}>
                <input 
                type="text"
                name="title"
                value={props.auction.name}
                onChange={handleChange}
                />
                <input 
                type="date"
                name="start_time"
                value={props.auction.start_time}
                onChange={handleChange}
                />
                <input 
                type="date"
                name="end_time"
                value={props.auction.end_time}
                onChange={handleChange}
                />
            </form>
            <StyledButton type="submit" variant="contained" color="primary">Add Auction</StyledButton>
        </div>

    )
}

const mapStateToProps = state => {
    // console.log("State to Props: ", state);
    return {
        auction: state.sellerReducer.data,
        error: state.sellerReducer.error
    };
};

export default connect(mapStateToProps, {newAuction})(NewAuction)