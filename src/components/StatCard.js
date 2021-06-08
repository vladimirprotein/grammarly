import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default (props) => {
  return(
    <div class="statCardDiv">
      <div>
        <CircularProgressbar styles={buildStyles({
            textColor: "black",
            pathColor: "#11a683",
            trailColor: "#e6e6e8"
          })} value={props.per} text={props.per + "%"}
        />
      </div>
      <p>{`${props.per}% of Grammarly users ${props.text}`}</p>
    </div>

  );
};
