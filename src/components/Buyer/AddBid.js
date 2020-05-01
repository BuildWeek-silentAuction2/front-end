import React, {useState} from "react";
import {connect} from "react-redux";
import {useHistory, useParams, Link} from "react-router-dom";
import jwt_decode from "jwt-decode";

import {newBid} from "../../actions/buyerActions/newBid";

import Button from '@material-ui/core/Button';

const AddBid = props => {
    const { id } = useParams();
    const { push } = useHistory()
    const [newBidderBid, setNewBidderBid] = useState({
        amount: "",
        time: "",
        listing_id: id
    });
    const token = localStorage.getItem("token");
        const decoded = jwt_decode(token)
        const bidderId = decoded.subject

    const handleChange = e => {
        setNewBidderBid({...newBidderBid, [e.target.name]: e.target.value})
        {console.log("Data passing into the setNewBidderBid: ", newBidderBid)}
      };

    const submitBid = e => {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+'T14 '+time;
        console.log("dateTime: ", dateTime)
        e.preventDefault()
        const newBidSubmit = {
            amount: newBidderBid.amount,
            time: dateTime,
            bidder_id: bidderId,
            listing_id: id
        }
        console.log("Form Submit: ", newBidSubmit)
        props.newBid(newBidSubmit)
        window.setTimeout(() => push("/buyer-page"), 2000);
      };

    return (
        <div className="add-bid">
            <form>
                <h1>Add a Bid</h1>
                <input 
                type="text"
                name="amount"
                placeholder="Bid"
                value={newBidderBid.amount}
                onChange={handleChange}
                />
                </form>
            <Button type="submit" onClick={submitBid} variant="contained" color="primary">Add Bid</Button>
            <br/>
            <br/>
            <Link to="/buyer-page">
                <Button variant="contained" color="primary">Home</Button>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("Adding Bid State to Props: ", state);
    return {
        auctionData: state.buyerReducer.data.data,
        isFetching: state.buyerReducer.isFetching,
        error: state.buyerReducer.error
    };
};

export default connect(mapStateToProps, {newBid})(AddBid)