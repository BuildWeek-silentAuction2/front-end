import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import CurrentAuctions from "./CurrentAuctions";

const SellerPage = () => {
    const [auctionList, setAuctionList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
          .get("")
          .then(res => {
              console.log("Seller Page: ", res)
          })
          .catch(err => console.log(err))
      }, []);

    return (
        <div>
            <h1>Welcome to the Auction</h1>
            <h3>View your current auctions below, or start a new one</h3>
            <CurrentAuctions auctions={auctionList} addAuctions={setAuctionList}/>
            <button>Start Auction</button>
        </div>
    )
}

export default SellerPage;