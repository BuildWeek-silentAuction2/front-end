import React, {useState} from "react";
import {connect} from "react-redux";
import {useHistory, Link} from "react-router-dom";
import jwt_decode from "jwt-decode";

import {addNewAuction} from "../../actions/sellerActions/addNewAuction"

import Button from '@material-ui/core/Button';

const NewAuction = props => {
    const { push } = useHistory()
    const [newAuctionForm, setNewAuctionForm] = useState({
        name: "",
        end_date: "",
        end_time: "",
    });
    console.log("New Auction state: ", props.newAuction)
    const token = localStorage.getItem("token");
        const decoded = jwt_decode(token)
        // console.log("Decoded Token", decoded)

        const sellerId = decoded.subject;
        // console.log(sellerId);

      const handleChange = e => {
        setNewAuctionForm({...newAuctionForm, [e.target.name]: e.target.value})
        // console.log("Create New Auction", newAuction);
      };

      const submitForm = e => {
          e.preventDefault()
        const auctionSubmit = {
            name: newAuctionForm.name,
            end_time: `${newAuctionForm.end_date} ${newAuctionForm.end_time}:00`,
            seller_id: sellerId
        }
        // console.log("Form Submit: ", props.addNewAuction(auctionSubmit))
        props.addNewAuction(auctionSubmit)
        window.setTimeout(() => push("/seller-page"), 2000);
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
                value={newAuctionForm.name}
                onChange={handleChange}
                />
                <h4>Set desired end time</h4>
                <input 
                type="date"
                name="end_date"
                value={newAuctionForm.end_date}
                onChange={handleChange}
                />
                <input 
                type="time"
                name="end_time"
                value={newAuctionForm.end_time}
                onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="secondary">Add Auction</Button>
                <br/>
                <br/>
            </form>
            
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
        isFetching: state.sellerReducer.isFetching,
        error: state.sellerReducer.error
    };
};

export default connect(mapStateToProps, {addNewAuction})(NewAuction)