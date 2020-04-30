import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {useHistory, Link} from "react-router-dom";

import {newBid} from "../../actions/buyerActions/newBid";

import Button from '@material-ui/core/Button';

const AddBid = props => {
    const [newBidderBid, setNewBidderBid] = useState();
    // console.log("New Bid props: ", props)

    // useEffect(() => {
    //     props.newBid();
    // }, [])

    const handleChange = e => {
        setNewBidderBid({...newBidderBid, [e.target.amount]: e.target.value})
      };

    const submitBid = e => {
        setNewBidderBid({...newBidderBid, [e.target.amount]: e.target.value})
    }

    return (
        <div className="add-bid">
            <form>
                <h1>Add a Bid</h1>
                <input 
                type="text"
                name="bid"
                placeholder="Bid"
                value={props.newBid.amount}
                onChange={handleChange}
                />
                </form>
            <Button type="submit" onClick={submitBid} variant="contained" color="secondary">Add Bid</Button>
            <br/>
            <br/>
            <Link to="/buyer-page">
                <Button variant="contained" color="secondary">Home</Button>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("Adding Bid State to Props: ", state);
    return {
        data: state.buyerReducer.data.data,
        isFetching: state.buyerReducer.isFetching,
        error: state.buyerReducer.error
    };
};

export default connect(mapStateToProps, {newBid})(AddBid)