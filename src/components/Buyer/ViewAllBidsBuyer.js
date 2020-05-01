import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";

import Button from '@material-ui/core/Button';
// import axios from 'axios';
import BuyerBid from "./BuyerBid";

const ViewAllBids = () => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("api/bid/")
      .then((res) => {
        console.log(res.data);
        setBids(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="view-bids-container">
      <h2>All Bids</h2>
      {bids.map((bid) => {
        return <BuyerBid key={bid.id} details={bid} />;
      })}
      <Link to="/buyer-page">
      <Button variant="contained" color="primary">Home</Button>
      </Link>
      <br/>
      <br/>
    </div>
  );
};

export default ViewAllBids;
