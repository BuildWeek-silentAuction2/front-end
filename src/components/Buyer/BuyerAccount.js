import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { updateAccountBuyer } from "../../actions/buyerActions/updateAccountBuyer";
import { deleteAccountBuyer } from "../../actions/buyerActions/deleteAccountBuyer";

// import SpinningLoader from "../Design Components/SpinningLoader"
import Button from "@material-ui/core/Button";

const BuyerAccount = (props) => {
  const { push } = useHistory();
  const [newAccountData, setNewAccountData] = useState({
    username: "",
    password: "",
  });

  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiMmQwZjdjNGMtZmQyYS00NWJmLThmY2EtMDM1ODkwODY2OTk2IiwidXNlcm5hbWUiOiJ0ZXN0c2VsbGVyIiwiaWF0IjoxNTg4MjYzNjkwLCJleHAiOjE1ODgyNjcyOTB9.WyjM5WjgX1ZOC-ItS9toqjV-e3QWfkiu_bmoY2ravjo"

  const decoded = jwt_decode(token)
  // console.log("Decoded Token", decoded)

  const buyerId = decoded.subject;
  // console.log(buyerId);

  const submitForm = (e) => {
    // console.log("Form Submit: ", props.updateAccountBuyer(newAccountData));
    props.updateAccountBuyer(buyerId, newAccountData);
    push(`/buyer-page`);
  };

  const handleChange = (e) => {
    setNewAccountData({
      ...newAccountData,
      [e.target.name]: e.target.value
    });
  };

  const deleteAccount = (e) => {
    e.preventDefault();
    props.deleteAccountBuyer(buyerId);
    push(`/`)
  };

  return (
    <div>
      <h2>Update Account Details</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="username"
          placeholder="New Username"
          // value={props.auction.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="New Password"
          // value={props.auction.password}
          onChange={handleChange}
        />
      </form>
        <Link to="/buyer-page">
        <Button
          type="submit"
          onClick={submitForm}
          variant="contained"
          color="primary"
        >
          Update Account
        </Button>
        </Link>
        <br/>
        <br/>
        <Link to="/">
        <Button
          type="submit"
          onClick={deleteAccount}
          variant="contained"
          color="primary"
        >
          Delete Account
        </Button>
        </Link>
      <br/>
      <br/>
      <Link to="/buyer-page">
        <Button
          variant="contained"
          color="primary"
        >
          Home
        </Button>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("New Account Data State to Props: ", state);
  return {
    auction: state.sellerReducer.data.data,
    error: state.sellerReducer.error,
  };
};

export default connect(mapStateToProps, { updateAccountBuyer, deleteAccountBuyer })(
  BuyerAccount
);