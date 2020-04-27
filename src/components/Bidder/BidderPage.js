import React, {useState, useEffect} from "react";

import bidderCurrentAuctions from "../Bidder/bidderCurrentAuctions";

const BidderPage = () => {
    const [auctionList, setAuctionList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
          .get("")
          .then(res => {
              console.log("Bidder Page: ", res)
          })
          .catch(err => console.log(err))
      }, []);

    return (
        <div>
            <h1>Welcome to the Silent Auction</h1>
            <h3>View available auctions below!</h3>
            <bidderCurrentAuctions auctions={auctionList} addAuctions={setAuctionList}/>
        </div>
    )
}

export default BidderPage;