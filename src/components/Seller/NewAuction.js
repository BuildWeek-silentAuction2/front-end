import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {useHistory, Link} from "react-router-dom";
import jwt_decode from "jwt-decode";

import {addNewAuction} from "../../actions/sellerActions/addNewAuction"

import SpinningLoader from "../Design Components/SpinningLoader"
import Button from '@material-ui/core/Button';

const NewAuction = props => {
    const { push } = useHistory()
    const [newAuction, setNewAuction] = useState({
        name: "",
        end_date: "",
        end_time: "",
    });
    console.log("New Auction state: ", props.newAuction)

        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiMmQwZjdjNGMtZmQyYS00NWJmLThmY2EtMDM1ODkwODY2OTk2IiwidXNlcm5hbWUiOiJ0ZXN0c2VsbGVyIiwiaWF0IjoxNTg4MjYzNjkwLCJleHAiOjE1ODgyNjcyOTB9.WyjM5WjgX1ZOC-ItS9toqjV-e3QWfkiu_bmoY2ravjo"

        const decoded = jwt_decode(token)
        // console.log("Decoded Token", decoded)

        const sellerId = decoded.subject;
        // console.log(sellerId);

      const handleChange = e => {
        setNewAuction({...newAuction, [e.target.name]: e.target.value})
        // console.log("Create New Auction", newAuction);
      };

      const submitForm = e => {
          e.preventDefault()
        const auctionSubmit = {
            name: newAuction.name,
            end_time: `${newAuction.end_date} ${newAuction.end_time}:00`,
            seller_id: sellerId
        }
        // console.log("Form Submit: ", props.addNewAuction(auctionSubmit))
        props.addNewAuction(auctionSubmit)
        window.setTimeout(() => push("/seller-page"), 3000);
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
                value={props.auction.end_date}
                onChange={handleChange}
                />
                <input 
                type="time"
                name="end_time"
                value={props.auction.end_time}
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

    //   const formatter = () => {
    //     let formattedTime = `${props.auction.endDate} ${props.auction.endTime}`;
    //     return formattedTime;
    //   }