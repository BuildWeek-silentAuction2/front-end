import React from 'react';
import './App.css';

import SellerPage from "./components/Seller/SellerPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        Silent Auction
      </header>
      <SellerPage />
    </div>
  );
}

export default App;
