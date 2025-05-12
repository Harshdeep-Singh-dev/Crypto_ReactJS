import React from 'react';
import './FeelOdds.css'; // Import the CSS for styling

const FeelOdds = () => {
  return (
    <section className="feel-odds">
      <video className="bg-video-four" autoPlay muted loop>
        <source src="/videos/34616-402679736.mp4" type="video/mp4" />
      </video>
      <div className="feel-odds-fo">
        <h3>Feel the odds <br />fall <br />in your favour.</h3>
        <p>Unlock high returns, exclusive perks from selected purchases, special access to AI driven data analysis.</p>
      </div>
    </section>
  );
};

export default FeelOdds;
