import React from 'react';

import './ShareUnrealizedPL.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const posImg =  require('../../assets/positive.png');
const negImg = require('../../assets/negative.png');

const BorderLinearProgressP = withStyles((theme) => ({
  root: {
    height: 10,
  },
  colorPrimary: {
    backgroundColor: '#CCCCCC',
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#07C407',
  },
}))(LinearProgress);


const BorderLinearProgressN = withStyles((theme) => ({
    root: {
      height: 10,
    },
    colorPrimary: {
      backgroundColor: '#CCCCCC',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#FF0000',
    },
  }))(LinearProgress);


const ShareUnrealizedPL = props => {

    return <div className="pl-container">
                <div className="pl-row">
                    <span className="p1-text">Unrealized P/L</span>
                    <span className="p1-val">{props.upl}</span>
                </div>
                <div className="pl-row">
                    <span className="p2-text">% return</span>
                    <span className="p2-val"><span className="return-icon"><img className="retImg" src={props.lastCheck ? posImg:negImg}></img></span>{props.pr}%</span>
                </div>
                <div className="pl-3">
                  {props.lastCheck ? <div className="composite-bar">
                      <BorderLinearProgressN className="progress-negative" variant="determinate" value={0} />
                      <BorderLinearProgressP className="progress-positive" variant="determinate" value={props.pr} />
                  </div> 
                   : 
                <div className="composite-bar">
                  <BorderLinearProgressN className="progress-negative" variant="determinate" value={props.pr} />
                  <BorderLinearProgressP className="progress-positive" variant="determinate" value={0} />
                 </div>  }
                </div>
          </div>
};


export default ShareUnrealizedPL;