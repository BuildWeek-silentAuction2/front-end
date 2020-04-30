import React, {useState} from "react";
import {connect} from "react-redux";
import {useHistory, Link} from "react-router-dom";

import {addNewAuction} from "../../actions/sellerActions/addNewAuction"

import Button from '@material-ui/core/Button';

const NewAuction = props => {
    const { push } = useHistory()
    const [newAuction, setNewAuction] = useState({
        id: "",
        name: "",
        end_time: "",
        seller_id: ""
    });
    console.log("New Auction state: ", props.newAuction)

      const handleChange = e => {
        setNewAuction({...newAuction, [e.target.name]: e.target.name, [e.target.end_time]: e.target.end_time})
      };

      const submitForm = e => {
        console.log("Form Submit: ", props.addNewAuction(newAuction))
        props.addNewAuction(newAuction)
        push(`/seller-page`);
      };

    return (
        <div className="add-auction">
            <h2>Create New Auction</h2>
            <form onSubmit={submitForm}>
                <h4>Name of Auction</h4>
                <input
                type="text"
                name="name"
                placeholder="Auction Name"
                value={props.auction.name}
                onChange={handleChange}
                />
                <h4>Set desired end time</h4>
                <input 
                type="date"
                name="end_date"
                value={props.auction.end_time}
                onChange={handleChange}
                />
                {/* <input 
                type="time"
                name="end_time"
                value={props.auction.endTime}
                onChange={formatter}
                /> */}
            </form>
            <Button type="submit" onClick={submitForm} variant="contained" color="secondary">Add Auction</Button>
            <br/>
            <br/>
            <Link to="/seller-page">
                <Button variant="contained" color="secondary">Home</Button>
            </Link>
        </div>

    )
}

const mapStateToProps = state => {
    console.log("New Auction State to Props: ", state);
    return {
        auction: state.sellerReducer.data.data,
        error: state.sellerReducer.error
    };
};

export default connect(mapStateToProps, {addNewAuction})(NewAuction)

    //   const formatter = () => {
    //     let formattedTime = `${props.auction.endDate} ${props.auction.endTime}`;
    //     return formattedTime;
    //   }