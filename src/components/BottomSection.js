import React from 'react';
import BannerCTA from './BannerCTA';

export default () => {
  return(
    <div className="mainSectionDiv" style={{"background": "no-repeat left -200px bottom -90px url('/swoosh2.png')", "padding":"50px 20px 180px 20px"}}>
      <div>
        <BannerCTA
          header="Take Your Writing from Good to Great"
          subheader="Unlock Grammarly Premium’s advanced features to up-level your communication."
          buttonName="Upgrade to Grammarly Premium"
        />
      </div>
    </div>

  );
};
