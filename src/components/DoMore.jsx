import React from 'react';
import './DoMore.css'; // If you need custom styles

const DoMore = () => {
  return (
    <section className="do-more">
      <video className="bg-video-three" autoPlay muted loop>
        <source src="/videos/198752-908438377.mp4" type="video/mp4" />
      </video>
      <div className="text-cont-dm">
        <h4>Do more with your money.</h4>
        <p>Manage your crypto wallet better and improve your return: receive investment reminders, get rid of hidden fees, get market insights, and discover ways to maximize tax benefits.</p>
      </div>
    </section>
  );
};

export default DoMore;
