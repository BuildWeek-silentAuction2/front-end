import React, {useEffect} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

const NewItem = props => {
    useEffect(() => {
        props.newItem();
    }, [])

    const addingItem = props => {
        return (
        props.isFetching && (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        //timeout={3000} //optional end
        />
        ))}

    return (
        <div className="add-auction">
            <form onSubmit={newItem()}>
                <input 
                type="text"
                name="name"
                value={auction.name}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="image_url"
                value={auction.image}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="description"
                value={auction.description}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="starting_price"
                value={auction.starting_price}
                onChange={handleChange}
                />
            </form>
            <button type="submit" onSubmit={addingItem}>Add Auction</button>
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

export default connect(mapStateToProps, {newItem}(NewItem))