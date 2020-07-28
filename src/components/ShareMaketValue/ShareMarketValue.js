import React from 'react';

import './ShareMarketValue.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: '#CCCCCC',
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#07C407',
  },
}))(LinearProgress);



const ShareMarketValue = props => {


    return <div className="market-container">
                <div className="market-row">
                    <span className="m1-text">Market Value</span>
                    <span className="m1-val">${props.mv}</span>
                </div>
                <div className="market-row">
                    <span className="m2-text">% of portfolio value</span>
                    <span className="m2-val">{props.pv}%</span>
                </div>
                <div className="market-3">
                    <BorderLinearProgress variant="determinate" value={props.pv} />
                </div>
           </div>
};


export default ShareMarketValue;