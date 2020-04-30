import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getAuction } from "../../actions/sellerActions/getAuction";

import Button from "@material-ui/core/Button";
import SpinningLoader from "../Design Components/SpinningLoader";

const AuctionPage = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.getAuction(id);
    console.log("Get Auction: ", props.getAuction(id));
  }, []);

  return (
    <div className="auction-list">
      <h2>Selected Auction Information</h2>
      {props.isFetching && (
        <div className="spinner-box">
          <SpinningLoader />
        </div>
      )}
      {props.error && <p className="error">{props.error}</p>}
      {console.log("Data passing into the map function: ", props.data)}
      {props.data &&
        props.data.map((item) => (
          <div className="auction-card" key={item.id}>
            <h3>{item.name}</h3>
            <h4>End Time: {item.end_time}</h4>
            <Link to={`/view-auction/${id}/all-listings`}>
              <Button variant="contained" color="secondary">
                View Bids
              </Button>
            </Link>
            <br />
            <br />
            <Link to={`/view-auction/${id}/update`}>
              <Button variant="contained" color="secondary">
                Update Auction
              </Button>
            </Link>
            <br/>
            <br/>
            <Link to={`/view-auction/${id}/delete`}>
              <Button variant="contained" color="secondary">
                Delete Auction
              </Button>
            </Link>
            <br />
            <br />
          </div>
        ))}
      <Link to="/seller-page">
        <Button variant="contained" color="secondary">
          Home
        </Button>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("Seller Auctions State to Props: ", state);
  return {
    data: state.sellerReducer.data,
    isFetching: state.sellerReducer.isFetching,
    error: state.sellerReducer.error,
  };
};

export default connect(mapStateToProps, { getAuction })(AuctionPage);
