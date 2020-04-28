import React from 'react';

import './App.css';

import BidderCurrentAuctions from "./components/Bidder/BidderCurrentAuctions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        Silent Auction
      </header>
      <BidderCurrentAuctions />
    </div>
  );
}

export default App;
