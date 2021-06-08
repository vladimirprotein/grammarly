import React from 'react';
import './App.css';
import Header from './Header';
import MainSection from './MainSection';
import PremiumFeature from './PremiumFeature';
import VideoSection from './VideoSection';
import Stats from './Stats';
import BottomSection from './BottomSection';
import Footer from './Footer';


const App = (props) => {
  return(
    <div className="parentDiv">
      <Header />
      <MainSection />
      <PremiumFeature />
      <VideoSection />
      <Stats />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default App;
