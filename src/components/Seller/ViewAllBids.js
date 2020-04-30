import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import Bid from "./Bid";

function ViewAllBids() {
  const [bids, setBids] = useState();

  const url = "https://api-silent-auction.herokuapp.com/api/bid/";

  // Fetch bid info from API
  useEffect(() => {
    axiosWithAuth()
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="view-bids-container">
      <h2>All Bids</h2>
      {bids.map((bid) => {
        return <Bid key={bid.id} details={bid} />;
      })}
    </div>
  );
}

export default ViewAllBids;
