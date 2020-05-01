import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

import {updateAuction} from "../../actions/sellerActions/updateAuction";

import Button from "@material-ui/core/Button";

const UpdateAuction = (props) => {
    const { id } = useParams();
    const { push } = useHistory()
    const [form, setForm] = useState({
        name: "",
        end_date: "",
        end_time: "",
    });
    console.log("PROPS", props)

    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token)
    // console.log("Decoded Token", decoded)

    const sellerId = decoded.subject;
    // console.log(sellerId);

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const submitForm = e => {
      e.preventDefault()
    const dataSubmit = {
        name: form.name,
        end_time: `${form.end_date} ${form.end_time}:00`,
        seller_id: sellerId
    }
    // console.log("Form Submit: ", props.updateAuction(dataSubmit))
    props.updateAuction(id, dataSubmit)
    window.setTimeout(() => push("/seller-page"), 2000);
  };

//   useEffect(() => {
//     props.updateAuction(id);
//     // console.log("Get Auction: ", props.updateAuction(id));
//   }, []);

    return (
        <div className="update-auction">
            <h2>Update Auction</h2>
            <form onSubmit={submitForm}>
                <h4>Name of Auction</h4>
                <input
                type="text"
                name="name"
                placeholder="Auction Name"
                value={form.name}
                onChange={handleChange}
                />
                <h4>Set desired end time</h4>
                <input 
                type="date"
                name="end_date"
                value={form.end_date}
                onChange={handleChange}
                />
                <input 
                type="time"
                name="end_time"
                value={form.end_time}
                onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="secondary">Update Auction</Button>
                <br/>
                <br/>
            </form>
            <Link to={`/view-auction/${id}`}>
                <Button variant="contained" color="secondary">Cancel</Button>
            </Link>
    </div>
    )
}

const mapStateToProps = (state) => {
    console.log("Update Auction State to Props: ", state);
    return {
        auction: state.sellerReducer.data,
        isFetching: state.sellerReducer.isFetching,
        error: state.sellerReducer.error,
    };
  };
  
  export default connect(mapStateToProps, { updateAuction })(UpdateAuction);