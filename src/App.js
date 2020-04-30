import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Header from "./Header";
import SignupSeller from "./components/Signup/SignupSeller";
import SignupBuyer from "./components/Signup/SignupBuyer";
import SellerPage from "./components/Seller/SellerPage";
import AuctionPage from "./components/Seller/AuctionPage";
import NewListing from "./components/Seller/NewListing";
import NewAuction from "./components/Seller/NewAuction";
import BuyerPage from "./components/Buyer/BuyerPage";
import AddBid from "./components/Buyer/AddBid";
import BuyerLogin from "./components/Login/BuyerLogin";
import SellerLogin from "./components/Login/SellerLogin";
import ViewAllBids from "./components/Seller/ViewAllBids";

import "./App.css";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/signup-seller" component={SignupSeller} />
        <Route exact path="/" component={SignupBuyer} />
        <Route exact path="/login-buyer" component={BuyerLogin} />
        <Route exact path="/login-seller" component={SellerLogin} />
        <PrivateRoute exact path="/seller-page" component={SellerPage}/>
        <PrivateRoute exact path="/view-auction/:id/all-listings" component={ViewAllBids}/>
        <PrivateRoute exact path="/view-auction/:id" component={AuctionPage}/>
        <PrivateRoute exact path="/view-auction/:id/new-listing" component={NewListing} />
        <PrivateRoute exact path="/new-auction" component={NewAuction}/>
        <PrivateRoute exact path="/buyer-page" component={BuyerPage}/>
        <PrivateRoute exact path="/add-bit/" component={AddBid} />
      </Router>
    </div>
  );
};

export default App;