import React, {useState} from "react";
import {connect} from "react-redux";
import {Link, useParams, useHistory} from "react-router-dom";

import {deleteAuction} from "../../actions/sellerActions/deleteAuction";

import Button from '@material-ui/core/Button';

const DeleteAuction = props => {
    const { id } = useParams();
    const { push } = useHistory()

    const deleteThisAuction = e => {
        e.preventDefault()
        props.deleteAuction(id)
        push(`/seller-page`)
    }
    return (
        <div>
            <h2>Are you sure you want to delete this auction?</h2>
            <Button onClick={deleteThisAuction} variant="contained" color="secondary">Delete</Button>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log("Delete Auction State to Props: ", state);
    return {
        auction: state.sellerReducer.data,
        isFetching: state.sellerReducer.isFetching,
        error: state.sellerReducer.error,
    };
  };
  
  export default connect(mapStateToProps, { deleteAuction })(DeleteAuction);