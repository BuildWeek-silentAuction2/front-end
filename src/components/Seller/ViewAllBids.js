import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";

import Button from '@material-ui/core/Button';
// import axios from 'axios';
import Bid from "./Bid";

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

  // Fetch bid info from API
  // useEffect(() => {
  //     axios.get('https://api-silent-auction.herokuapp.com/api/bid/')
  //     .then(res => {
  //         console.log(res)
  //     })
  //     .catch(err => {
  //         console.log(err)
  //     })
  // }, [])

  return (
    <div className="view-bids-container">
      <h2>All Bids</h2>
      {bids.map((bid) => {
        return <Bid key={bid.id} details={bid} />;
      })}
      <Link to="/seller-page">
      <Button variant="contained" color="secondary">Home</Button>
      </Link>
      <br/>
      <br/>
    </div>
  );
};

export default ViewAllBids;
