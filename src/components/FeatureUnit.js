import React from 'react';

export default (props) => {


  return(
    <div className="featureUnitDiv">
      <h4 className={props.active ? "active" : ""}>{props.header}</h4>
      <p>{props.subheader}</p>
      <div className="progressBar">
        <div style={{"width": `${props.progress}%`}}></div>
      </div>
    </div>
  );
};
