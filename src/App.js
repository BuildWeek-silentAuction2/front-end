import React from "react";
import Header from "./Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
      </Router>
    </div>
  );
};

export default App;

// Imports and components for SellerPage and BuyerPage

// import SellerPage from "./components/Seller/SellerPage";
// import AuctionPage from "./components/Seller/AuctionPage";
// import NewListing from "./components/Seller/NewListing";
// import NewAuction from "./components/Seller/NewAuction";

/* <Route exact path="/" component={SellerPage}/>
<Route exact path="/view-auction/:id" component={AuctionPage}/>
<Route exact path="/new-listing" component={NewListing} />
<Route exact path="/new-auction" component={NewAuction}/> */

// import BuyerPage from "./components/Buyer/BuyerPage";
// import AddBid from "./components/Buyer/AddBid";

/* <Route exact path="/" component={BuyerPage}/>
<Route exact path="/view-auction/:id" component={AddBid} /> */
