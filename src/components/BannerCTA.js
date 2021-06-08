import React from 'react';

export default (props) => {

  const renderSubHeader = () => {
    if(!props.subheader) return;
    return(
      <h5>{props.subheader}</h5>
    );
  };

  return(
    <div className="heading">
      <h1>{props.header}</h1>
      {renderSubHeader()}
      <button onClick={() => window.location.href="https://www.grammarly.com/upgrade"} class="upgradeButton" >{props.buttonName}</button>
    </div>
  );
};
