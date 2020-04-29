import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {useHistory, Link} from "react-router-dom";

import {fetchAuctions} from "../../actions/fetchAuctions";
import {newBid} from "../../actions/buyerActions/newBid";

import SpinningLoader from "../Design Components/SpinningLoader"
import Button from '@material-ui/core/Button';

const AddBid = props => {
    const [newBidderBid, setNewBidderBid] = useState();
    const { push } = useHistory()
    console.log("New Bid props: ", props)

    // useEffect(() => {
    //     props.fetchAuctions();
    // }, [])

    const handleChange = e => {
        setNewBidderBid({...newBidderBid, [e.target.amount]: e.target.value})
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
            <form onSubmit={addingBid}>
                <h1>Add a Bid</h1>
                <input 
                type="text"
                name="bid"
                placeholder="Bid"
                value={props.newBid.amount}
                onChange={handleChange}
                />
                </form>
            <Button type="submit" onSubmit={addingBid} variant="contained" color="secondary">Add Bid</Button>
            <br/>
            <br/>
            <Link to="/">
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

export default connect(mapStateToProps, {newBid, fetchAuctions})(AddBid)