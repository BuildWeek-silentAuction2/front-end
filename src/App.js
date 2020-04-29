import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Header";
import SignupSeller from "./components/Signup/SignupSeller";
import SignupBuyer from "./components/Signup/SignupBuyer"
import SellerPage from "./components/Seller/SellerPage";
import AuctionPage from "./components/Seller/AuctionPage";
import NewListing from "./components/Seller/NewListing";
import NewAuction from "./components/Seller/NewAuction";
import BuyerPage from "./components/Buyer/BuyerPage";
import AddBid from "./components/Buyer/AddBid";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/signup-seller" component={SignupSeller} />
        <Route exact path="/" component={SignupBuyer} />
        <Route exact path="/seller-page" component={SellerPage}/>
        <Route exact path="/view-auction/:id" component={AuctionPage}/>
        <Route exact path="/new-listing" component={NewListing} />
        <Route exact path="/new-auction" component={NewAuction}/>
        <Route exact path="/buyer-page" component={BuyerPage}/>
        <Route exact path="/view-auction/:id" component={AddBid} />
      </Router>
    </div>
  );
};

export default App;

// Imports and components for SellerPage and BuyerPage




