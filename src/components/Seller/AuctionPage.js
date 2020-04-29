import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";

import {getAuction} from "../../actions/sellerActions/getAuction";

import Button from '@material-ui/core/Button';
import SpinningLoader from "../Design Components/SpinningLoader";

const AuctionPage = props => {

    const {id} = useParams()

    useEffect(() => {
        props.getAuction(id);
        //console.log("Fetch Auctions: ", props.fetchAuctions())
    }, [])
    

    return(
        <div className="auction-list">
            <h2>Selected Auction Information</h2>
            {props.isFetching && (
            <div className="spinner-box">
                <SpinningLoader />
            </div>
            )}
            {props.error && <p className="error">{props.error}</p>}
            {props.data && props.data.map(item => (
                <div className="auction-card" key={item.id}>
                    <h3>{item.name}</h3>
                    <h4>End Time: {item.end_time}</h4>
                    <Link to="/new-listing">
                        <Button variant="contained" color="secondary">Add Listing</Button>
                    </Link>
                    <br/>
                    <br/>
                </div>
            ))}
            <Link to="/">
                <Button variant="contained" color="secondary">Home</Button>
            </Link>
        </div>
    )
}
const mapStateToProps = state => {
    // console.log("Seller Auctions State to Props: ", state);
    return {
        data: state.sellerReducer.data.data,
        isFetching: state.sellerReducer.isFetching,
        error: state.sellerReducer.error
    };
};

export default connect(mapStateToProps, {getAuction})(AuctionPage)