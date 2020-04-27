import React, {useEffect} from "react";
import {connect} from "react-redux";

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
                value={auction.name}
                onChange={handleChange}
                />
                <input 
                type="date"
                name="start_time"
                value={auction.start}
                onChange={handleChange}
                />
            </form>
            <button type="submit">Add Auction</button>
        </div>

    )
}

const mapStateToProps = state => {
    // console.log("State to Props: ", state);
    return {
        auction: state.sellerReducer.data,
        error: state.dataReducer.error
    };
};

export default connect(mapStateToProps, {newAuction}(NewAuction))