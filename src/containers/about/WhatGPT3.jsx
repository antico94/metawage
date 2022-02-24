import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import logo from '../../assets/logo-site.svg';

const WhatGPT3 = () => (
    <div className="gpt3__whatgpt3 section__margin" id="about">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is MetaWage"
                 text="MetaWage is a utility token launched on the Binance Smart Chain with automatic liquidity pool growth and holder rewards. Our anti-mass dump system will help you forecast dumps. This brings the community together on the mission to Metaverse!"/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your
          imagination</h1>
        {/*<p>Explore the Library</p>*/}
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Re-distribution to holders"
                 text="8% MWAGE is redistributed to all existing MetaWage holders as a passive income. In order to receive rewards, they must have at least 500,000,000 MWAGE tokens in their wallet."/>
        <Feature title="Auto allocation to Liquidity Pool"
                 text="3% of each transaction will be allocated into the Liquidity pool on the PancakeSwap. Hence it will be helping to maintain the price flow on the transactions."/>
        <Feature title="Massive Marketing"
                 text="1% of each transaction will be assigned to the Marketing/Buyback wallet. It will be used for the future development of the project."/>
      </div>
    </div>
);

export default WhatGPT3;
