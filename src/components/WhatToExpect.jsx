import React from 'react';
import './WhatToExpect.css'; // If you need custom styles

const WhatToExpect = () => {
  return (
    <section className="what-to-expect">
      <video className="bg-video-two" autoPlay muted loop>
        <source src="/videos/77830-847111360.mp4" type="video/mp4" />
      </video>
      <div className="text-cont-wte">
        <h3>All that you deserve and more.</h3>
        <p>If you are a CRYPTO Investor, you're already a step ahead. Every experience you unlock takes you higher up the pedestal.</p>
      </div>
    </section>
  );
};

export default WhatToExpect;
