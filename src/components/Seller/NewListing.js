import React, {useEffect} from "react";
import {connect} from "react-redux";

import newListing from "../../actions/sellerActions/newListing";

import SpinningLoader from "../Design Components/SpinningLoader"
import Button from '@material-ui/core/Button'

const NewListing = props => {
    useEffect(() => {
        props.newItem();
    }, [props])

    const handleChange = e => {
        e.persist();
      };

    const addingItem = props => {
        return (
        props.isFetching && (
        <div className="spinner-box">
            <SpinningLoader />
        </div>
        ))}

    return (
        <div className="add-item">
            <form onSubmit={newItem()}>
                <input 
                type="text"
                name="name"
                value={props.auction.name}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="image_url"
                value={props.auction.image}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="description"
                value={props.auction.description}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="starting_price"
                value={props.auction.starting_price}
                onChange={handleChange}
                />
            </form>
            <Button type="submit" onSubmit={addingItem}>Add Item</Button>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log("State to Props: ", state);
    return {
        auction: state.sellerReducer.data,
        isFetching: state.sellerReducer.isFetching,
        error: state.dataReducer.error
    };
};

export default connect(mapStateToProps, {newListing})(NewListing)