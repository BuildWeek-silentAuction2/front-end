import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";

import {getAuctionBuyer} from "../../actions/buyerActions/getAuctionBuyer";

import Button from "@material-ui/core/Button";
import SpinningLoader from "../Design Components/SpinningLoader";

const AuctionBids = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.getAuctionBuyer(id);
    console.log("Get Buyer Auction on Component: ", props.getAuctionBuyer(id));
  }, []);

  return (
    <div className="auction-list">
      <h2>Selected Auction Information</h2>
      {props.isFetching && (
        <div className="spinner-box">
          <SpinningLoader />
        </div>
      )}
      {/* {console.log("Data passing into the map function: ", props.data)} */}
      {props.data &&
        props.data.map((item) => (
          <div className="auction-card" key={item.id}>
            <h3>{item.name}</h3>
            <h4>End Time: {item.end_time}</h4>
            <Link to={`/view-auction-bid/${id}/all-listings`}>
            <Button variant="contained" color="primary">
              View Listings
            </Button>
            </Link>
            <br/>
            <br/>
            <Link to={`/auction-bidding/${item.id}`}>
              <Button variant="contained" color="primary">
                Add Bid
              </Button>
            </Link>
            <br />
            <br />
          </div>
        ))}
      <Link to="/buyer-page">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("Buyer Auctions State to Props: ", state);
  return {
    data: state.buyerReducer.data,
    isFetching: state.buyerReducer.isFetching,
    error: state.buyerReducer.error,
  };
};

export default connect(mapStateToProps, { getAuctionBuyer })(AuctionBids);