import React, {useState, useEffect} from "react";

import sellerCurrentAuctions from "../Seller/sellerCurrentAuctions";

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
            <h3>View current auctions below, or start a new one</h3>
            <sellerCurrentAuctions auctions={auctionList} addAuctions={setAuctionList}/>
            <button>Create New Auction</button>
        </div>
    )
}

export default SellerPage;