import React from 'react';

import './App.css';

import BuyerCurrentAuctions from "./components/Buyer/BuyerCurrentAuctions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        Silent Auction
      </header>
      <BuyerCurrentAuctions />
    </div>
  );
}

export default App;
