import React from 'react';
import Features from './Features';
import BannerCTA from './BannerCTA';

export default () => {

  return(
    <div className="mainSectionDiv" style={{"background-image": "url('/swoosh.png')"}}>
      <div>
        <BannerCTA header="Aim High With Brilliant Writing." buttonName="Upgrade to Grammarly Premium" />
        <Features />
      </div>
    </div>

  );
};
