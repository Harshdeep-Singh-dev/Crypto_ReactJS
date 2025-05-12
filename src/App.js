import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx'; // adjust path if needed
import HeroSection from './components/HeroSection';
import InfoAboutUs from './components/InfoAboutUs.jsx';
import WhatToExpect from './components/WhatToExpect.jsx';
import DoMore from './components/DoMore.jsx';
import Boxes from './components/Boxes.jsx';
import FeelOdds from './components/FeelOdds.jsx';
import SecuritySpotlight from './components/Security.jsx';
import Ratings from './components/Ratings.jsx';
import NotEveryone from './components/NotEveryone.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <InfoAboutUs />
      <WhatToExpect />
      <DoMore />
      <Boxes />
      <FeelOdds />
      <SecuritySpotlight />
      <Ratings />
      <NotEveryone />
      <Footer />
    </div>
      
  );
}

export default App;
