import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img id="possibility-image" src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">The possibilities are <br/> beyond your
          imagination</h1>
        <p>2021 will go down in investing history as a good year for stocks. But
          it will be remembered as a fantastic year for cryptocurrencies. Even
          with a pullback at the end of the year, many cryptocurrencies soared
          over the last 12 months.

          Investors are now focused squarely on the future. There are no
          guarantees about how any assets will perform going forward, of course.
          However, we believe that MetaWage will skyrocket in 2022.</p>

          <div className="buy-buttons">
            <h4><a
                href="https://pancakeswap.finance/swap?outputCurrency=0x2545dAee174EB7B9A0a25D17eaebbF1BD08afA16"
                className="btn-grad">Buy on PancakeSwap</a></h4>
            <h4><a
                href="https://poocoin.app/swap?outputCurrency=0x2545dAee174EB7B9A0a25D17eaebbF1BD08afA16"
                className="btn-grad">Buy on PooCoin</a></h4>
          </div>
        </div>
    </div>
);

export default Possibility;
