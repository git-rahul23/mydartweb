import React from 'react';

import './ShareDetails.css';
const quan = require('../../assets/quantity.png');
const amt = require('../../assets/money.png');

const ShareDetails = props => {

    return <div className ="det-container">
                <div className="det-wrapper">
                    <div className="det-row">
                        <div className="det-comb">
                            <span className="det-icon"><img className="det-icon-img" src={quan} alt="quan icon"></img></span>
                            <span className="det-name"> Quantity</span>
                        </div>
                        <div className="det-value">
                            {props.quan}
                        </div>
                    </div>

                    <div className="det-row">
                        <div className="det-comb">
                            <span className="det-icon-text">@</span>
                            <span className="det-name"> Avg. Cost</span>
                        </div>
                        <div className="det-value">
                            {props.avgCost}
                        </div>
                    </div>

                    <div className="det-row">
                        <div className="det-comb">
                            <span className="det-icon"><img className="det-icon-img2" src={amt} alt="amount"></img></span>
                            <span className="det-name"> Invested Amount</span>
                        </div>
                        <div className="det-value">
                            ${props.invAmt}
                        </div>
                    </div>
                    
                </div>
        
            </div>
};


export default ShareDetails;