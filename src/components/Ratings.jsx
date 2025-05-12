import React from "react";
import "./Ratings.css"; // Assuming you have a CSS file for styling

const Ratings = () => {
  return (
    <div className="ratings">
      <div className="text-ratings">
        <p>TRUSTED BY 15M INVESTORS</p>
        <h4>the proof writes itself</h4>
      </div>
      <div className="stars-ratings sr1">
        <img src="images/4.8-stars.webp" alt="App Store rating" />
        <div className="stars-in-num">
          4.8<span>/5</span>
        </div>
        <p>APP STORE</p>
      </div>
      <div className="stars-ratings sr2">
        <img src="images/4.8-stars.webp" alt="Play Store rating" />
        <div className="stars-in-num">
          4.8<span>/5</span>
        </div>
        <p>PLAY STORE</p>
      </div>
    </div>
  );
};

export default Ratings;
