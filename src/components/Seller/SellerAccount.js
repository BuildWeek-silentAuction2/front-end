import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {useHistory, Link} from "react-router-dom";

import {updateAccount} from "../../actions/sellerActions/updateAccount";
import {deleteAccount} from "../../actions/sellerActions/deleteAccount";

// import SpinningLoader from "../Design Components/SpinningLoader"
import Button from '@material-ui/core/Button';

const SellerAccount = props => {
    const { push } = useHistory()
    const [newAccountData, setNewAccountData] = useState({
        username: "",
        password: ""
    });

    const submitForm = e => {
        console.log("Form Submit: ", props.updateAccount(newAccountData))
        props.updateAccount(newAccountData)
        push(`/seller-page`);
      };

    const handleChange = e => {
        setNewAccountData({...newAccountData, [e.target.username]: e.target.username, [e.target.password]: e.target.password})
      };

    const deleteAccount = e => {
        e.preventDefault()
        deleteAccount(id)
    }

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
            <Link to="/update-seller-account">
                <Button type="submit" onClick={submitForm} variant="contained" color="secondary">Update Account</Button>
            </Link>
            <Link to="/seller-page">
                <Button type="submit" onClick={deleteAccount} variant="contained" color="secondary">Update Account</Button>
            </Link>
        </div>
    )
}
const mapStateToProps = state => {
    console.log("New Account Data State to Props: ", state);
    return {
        auction: state.sellerReducer.data.data,
        error: state.sellerReducer.error
    };
};

export default connect(mapStateToProps, {updateAccount, deleteAccount})(SellerAccount)