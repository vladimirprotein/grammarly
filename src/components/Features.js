import React from 'react';
import Grid from "@material-ui/core/Grid";
import FeatureUnit from './FeatureUnit';
import FeatureImage from './FeatureImage';

class Features extends React.Component {

  state = {
    "1": {"progress":0, "active":true},
    "2": {"progress":0, "active":false},
    "3": {"progress":0, "active":false},
    "4": {"progress":0, "active":false},
  };


  componentDidMount() {
    var barNum = 1;
    var prog = 0;

    window.setInterval(()=>{
      prog += 0.357;
      if(prog > 100){
        prog = 0;
        if(barNum == 4){
          barNum = 1;
        }
        else{
          barNum += 1;
        }
      }

      this.setState({
        "1": {"progress": 1 === barNum ? prog : 0, "active": 1 === barNum ? true : false},
        "2": {"progress": 2 === barNum ? prog : 0, "active": 2 === barNum ? true : false},
        "3": {"progress": 3 === barNum ? prog : 0, "active": 3 === barNum ? true : false},
        "4": {"progress": 4 === barNum ? prog : 0, "active": 4 === barNum ? true : false},
      });
    }, 25);
  }

  render(){
    return(
      <div className="featuresDiv">
        <Grid container justify="space-between" spacing={1}>
          <Grid xs={12} md={7}>
            <FeatureImage show={this.state["1"].active} type={1}/>
            <FeatureImage show={this.state["2"].active} type={2}/>
            <FeatureImage show={this.state["3"].active} type={3}/>
            <FeatureImage show={this.state["4"].active} type={4}/>
          </Grid>
          <Grid xs={12} md={4}>
            <FeatureUnit header="Clear, confident communication" subheader="Take the guesswork out of great writing." progress={this.state["1"].progress} active={this.state["1"].active}/>
            <FeatureUnit header="Comprehensive real-time feedback" subheader="Effective writing takes more than good grammar." progress={this.state["2"].progress} active={this.state["2"].active}/>
            <FeatureUnit header="Support you can rely on" subheader="Write with a second pair of eyes that never gets tired." progress={this.state["3"].progress} active={this.state["3"].active}/>
            <FeatureUnit header="Strike the right tone" subheader="Make the best impression, every time." progress={this.state["4"].progress} active={this.state["4"].active}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Features;
