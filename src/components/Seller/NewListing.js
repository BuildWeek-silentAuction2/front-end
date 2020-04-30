import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {newListing} from "../../actions/sellerActions/newListing";

import Button from '@material-ui/core/Button';

const NewListing = props => {
    const [newItem, setNewItem] = useState({
        name: "",
        image_url: "",
        description: "",
        starting_price: ""
    });
    // console.log("New Listing props: ", props)

    useEffect(() => {
        props.newListing();
        // console.log("Submitting New Listing: ", props.newListing)
    }, [])

    const handleChange = e => {
        e.persist();
      };

      const submitForm = e => {
        setNewItem({...newItem, [e.target.name]: e.target.name, [e.target.image_url]: e.target.image_url, [e.target.description]: e.target.description, [e.target.starting_price]: e.target.starting_price})
        props.newListing(newItem)
        console.log("New Item: ", newItem)
      };

    return (
        <div className="add-item">
            <form onSubmit={submitForm}>
                <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={props.listing.name}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="image_url"
                placeholder="Image URL"
                value={props.listing.image}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="description"
                placeholder="Item Description"
                value={props.listing.description}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="starting_price"
                placeholder="Starting Price"
                value={props.listing.starting_price}
                onChange={handleChange}
                />
            </form>
            <Button type="submit" onSubmit={submitForm} variant="contained" color="secondary">Add Item</Button>
            <br/>
            <br/>
            <Link to="/seller-page">
                <Button variant="contained" color="secondary">Home</Button>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("New Listing State to Props: ", state);
    return {
        listing: state.sellerReducer.data,
        isFetching: state.sellerReducer.isFetching,
        error: state.sellerReducer.error
    };
};

export default connect(mapStateToProps, {newListing})(NewListing)