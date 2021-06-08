import React from 'react';


export default () => {
  return(
    <div className="premiumDiv">
      <div>
        <h2>Up-Level Your Communication</h2>
        <h4>Unlock Grammarly Premium’s advanced features and suggestions.</h4>
        <div id="premiumComparison">
          <div>
            <span>FOR CASUAL WRITING</span>
            <h5>Free</h5>
            <p>Basic writing suggestions</p>
            <button disabled class="" style={{"marginTop":"20px", "borderRadius":"6px"}}>Included in Premium</button>
            <ul>
              <li>Spelling</li>
              <li>Grammar</li>
              <li>Punctuation</li>
              <li>Conciseness</li>
            </ul>
          </div>
          <div>
          <span>FOR WORK OR SCHOOL</span>
          <h5>Premium</h5>
          <p>Style, tone, and clarity improvements for writing at work and school.</p>
          <button onClick={() => window.location.href="https://www.grammarly.com/upgrade"} class="upgradeButton" >Upgrade to Grammarly Premium</button>
          <ul>
            <li style={{"fontWeight":"600"}}>Everything is Free</li>
            <li>Clarity-focused sentence rewrites</li>
            <li>Tone adjustments</li>
            <li>Plagiarism detection</li>
            <li>Word choice</li>
            <li>Formality level</li>
            <li>Fluency</li>
            <li>Additional advanced suggestions</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
