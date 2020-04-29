import React, {useState} from "react";
import {connect} from "react-redux";
import {useHistory, Link} from "react-router-dom";

import {addNewAuction} from "../../actions/sellerActions/addNewAuction"

import StyledButton from "../Design Components/StyledButton";

const NewAuction = props => {
    const [newAuction, setNewAuction] = useState();
    const { push } = useHistory()
    console.log("New Auction props: ", props)

      const handleChange = e => {
        setNewAuction({...newAuction, [e.target.end_time]: e.target.value})
      };

      const submitForm = e => {
        props.addNewAuction(newAuction)
        push(`/`);
      };

    return (
        <div className="add-auction">
            <h3>Create New Auction</h3>
            <form onSubmit={submitForm}>
                <h4>Set desired end time</h4>
                <input 
                type="date"
                name="end_date"
                value={props.auction.endDate}
                onChange={handleChange}
                />
                <input 
                type="time"
                name="end_time"
                value={props.auction.endTime}
                onChange={handleChange}
                />
            </form>
            <StyledButton type="submit" onClick={submitForm} variant="contained" color="secondary">Add Auction</StyledButton>
            <br/>
            <br/>
            <Link to="/">
                <StyledButton variant="contained" color="secondary">Home</StyledButton>
            </Link>
        </div>

    )
}

const mapStateToProps = state => {
    console.log("New Auction State to Props: ", state);
    return {
        auction: state.sellerReducer.data,
        error: state.sellerReducer.error
    };
};

export default connect(mapStateToProps, {addNewAuction})(NewAuction)