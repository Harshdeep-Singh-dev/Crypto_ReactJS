import React, { useState } from 'react';
import './Footer.css'; // adjust path as needed

const footerData = [
  {
    title: 'UPGRADES',
    items: ['CRYPTO money', 'CRYPTO mint', 'CRYPTO garage', 'CRYPTO escapes'],
  },
  {
    title: 'COMPANY',
    items: ['about CRYPTO', 'careers'],
  },
  {
    title: 'INSIDER PERKS',
    items: ['upgrade to upi'],
  },
  {
    title: 'PAYMENTS',
    items: ['Scan & Pay', 'Pay anyone', 'Tap to Pay', 'Visa on UPI'],
  },
  {
    title: 'RESOURCES',
    items: ['Partner with us', 'Articles', 'Customer care', 'Payments Guide'],
  },
  {
    title: 'POLICY',
    items: ['Returns and Refunds', 'Security', 'Investor Relations', 'Other Disclosures'],
  },
  {
    title: 'DESIGN',
    items: ['NeoPOP', 'Manifesto'],
  },
];

const FooterSection = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`footer-section ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="footer-header">
        <h3>{title}</h3>
        <div className="toggle-icon">+</div> {/* Always show + */}
      </div>
      <div className={`footer-content ${open ? 'open' : ''}`}>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <img
        src="images/—Pngtree—editable text effect crypto with_7536642.png"
        alt="Crypto Logo"
      />
      {footerData.map((section, idx) => (
        <FooterSection key={idx} title={section.title} items={section.items} />
      ))}

      <div className="footer-text-cont">
        <h5>Complete security, no asterisks.</h5>
        <p>
          CRYPTO encrypts all data and transactions to ensure a completely secure experience
          for our members.
        </p>
      </div>

      <div className="copyright-info">
        <p>copyright @ 2020-24 Harshdeep Singh</p>
        <span>privacy policy &nbsp;&nbsp;|&nbsp;&nbsp; terms and condition</span>
      </div>
    </footer>
  );
};

export default Footer;
