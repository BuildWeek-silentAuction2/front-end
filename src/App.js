import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Header";
<<<<<<< HEAD
import SignupSeller from "./components/Signup/SignupSeller"
=======
import SignupSeller from "./components/Signup/SignupSeller";
>>>>>>> b52c9f47820aec9301d7a2774fe08c787f5bdc43
import SignupBuyer from "./components/Signup/SignupBuyer"
import SellerPage from "./components/Seller/SellerPage";
import AuctionPage from "./components/Seller/AuctionPage";
import NewListing from "./components/Seller/NewListing";
import NewAuction from "./components/Seller/NewAuction";
<<<<<<< HEAD
import "./App.css";
=======
>>>>>>> b52c9f47820aec9301d7a2774fe08c787f5bdc43

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
<<<<<<< HEAD
        <Route exact path="/signup-seller" component={SignupSeller}/>
        <Route exact path="/signup-buyer" component={SignupBuyer}/>
        <Route exact path="/seller-page" component={SellerPage}/>
        <Route exact path="/view-auction/:id" component={AuctionPage}/>
        <Route exact path="/new-listing" component={NewListing} />
        <Route exact path="/new-auction" component={NewAuction}/> 
=======
        <Route exact path="/signup-seller" component={SignupSeller} />
        <Route exact path="/" component={SignupBuyer} />
        <Route exact path="/seller-page" component={SellerPage}/>
        <Route exact path="/view-auction/:id" component={AuctionPage}/>
        <Route exact path="/new-listing" component={NewListing} />
        <Route exact path="/new-auction" component={NewAuction}/>
>>>>>>> b52c9f47820aec9301d7a2774fe08c787f5bdc43
      </Router>
    </div>
  );
};

export default App;

// Imports and components for SellerPage and BuyerPage

<<<<<<< HEAD




=======
>>>>>>> b52c9f47820aec9301d7a2774fe08c787f5bdc43
// import BuyerPage from "./components/Buyer/BuyerPage";
// import AddBid from "./components/Buyer/AddBid";

/* <Route exact path="/" component={BuyerPage}/>
<Route exact path="/view-auction/:id" component={AddBid} /> */
