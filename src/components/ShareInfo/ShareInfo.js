import React from 'react';

import './ShareInfo.css';
const men = require('../../assets/open-menu.png');

const ShareInfo = props => {

    return <div className="info-container">
                <div className="info-icon"><img className="icon-img" src={men} alt="menu icon"></img></div>
                <div className="info-text">
                    <span className="share-name">{props.name}</span>
                    <span className="share-price">${props.price}</span>
                </div>
                <div className="info-com">
                    <span className="com-green">iShares</span>
                    <span className="com-small">by BlackDoc</span>
                    <span className="com-bold"> S&P 500 Index</span>
                    <span className="com-end">US Equity</span>
                </div>
           </div>
};


export default ShareInfo;