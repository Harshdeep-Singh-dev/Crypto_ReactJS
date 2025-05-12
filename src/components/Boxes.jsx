import React from 'react';
import './Boxes.css'; // Import the CSS for styling

const Boxes = () => {
  return (
    <section className="boxes">
      <h4>Invest your money BIT by BIT.</h4>
      <div className="container-for-boxes">
        <div className="box box1">
          <h5>Bitcoin</h5>
          <p id="value">$94776.29</p>
          <button>Buy Bitcoin &rarr;</button>
          <img src="/images/bitcoin.png" alt="Bitcoin" />
        </div>
        <div className="box box2">
          <h5>Ethereum</h5>
          <p id="value">$1820.65</p>
          <button>Buy Ethereum &rarr;</button>
          <img src="/images/Ethereum.png" alt="Ethereum" />
        </div>
        <div className="box box3">
          <h5>XRP</h5>
          <p id="value">$2.28</p>
          <button>Buy XRP &rarr;</button>
          <img src="/images/ripple.png" alt="XRP" />
        </div>
        <div className="box box4">
          <h5>Doge</h5>
          <p id="value">$0.1796</p>
          <button>Buy Dogecoin &rarr;</button>
          <img src="/images/dogecoin.png" alt="Doge" />
        </div>
        <div className="box box5">
          <h5>Binance Coin</h5>
          <p id="value">$610.12</p>
          <button>Buy Binance Coin &rarr;</button>
          <img src="/images/binance-coin.webp" alt="Binance Coin" />
        </div>
        <div className="box box6">
          <h5>Solana</h5>
          <p id="value">$148.86</p>
          <button>Buy Solana &rarr;</button>
          <img src="/images/solana.png" alt="Solana" />
        </div>
      </div>
    </section>
  );
};

export default Boxes;
