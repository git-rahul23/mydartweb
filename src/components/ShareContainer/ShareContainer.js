import React, { Fragment } from 'react';

import {connect} from 'react-redux';
import ShareInfo from '../ShareInfo/ShareInfo';
import ShareDetails from '../ShareDetails/ShareDetails';
import ShareMarketValue from '../ShareMaketValue/ShareMarketValue';
import ShareUnrealizedPL from '../ShareUnrealizedPL/ShareUnrealizedPL';
import BuySell from '../BuySell/BuySell';
import './ShareContainer.css';

function ShareContainer (props) {

    return <Fragment>
 
          { props.data ? (props.data.map( (d) => <div className="container">
          <ShareInfo name ={d.sname} price={d.price}></ShareInfo>
          <ShareDetails quan={d.quantity} avgCost = {d.avgcost} invAmt = {d.investedAmount}></ShareDetails>
          <ShareMarketValue mv={d.marketValue} pv={d.pecentOfPortfolio}></ShareMarketValue>
          <ShareUnrealizedPL upl={d.unrealPL} pr={d.percentReturn} lastCheck={d.lastCheckReturn}></ShareUnrealizedPL>
          <BuySell></BuySell>
         </div>
         )) : 
         <div>
           Loading
         </div>
         }

         </Fragment>
};



const mapStateToProps = state => {
    return {
     data : state.data,
    }
  }
  
  const mapDispatchToProps = dispatch => {
  
    return {
 
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(ShareContainer);