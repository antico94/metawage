import React from 'react';
// import ai from '../../assets/ai.png';
import './roadmap.css';

const Roadmap = () => (<div>
  <header>
    <h1 className="title-roadmap gradient__text" id="roadmap">Roadmap</h1>
    <div className="progress">
      <span className="progress__border"/>
      <span className="progress__bar"/>
    </div>

  </header>
  <div className="container">
    <section className="checklist">
      <h2 className="checklist__title">Phase 1</h2>
      <span className="checklist__title-border"/>
      <span className="checklist__percentage-border"/>
      <ul className="checklist-container">
        <li className="checklist-item">
          <input id="" type="checkbox" defaultChecked="checked"/><label
    className="checkbox"/><span
            className="checklist-item__title">Building the community</span>
        </li>
        <li className="checklist-item">
          <input id="" type="checkbox" defaultChecked="checked"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Twitter account</span>

        </li>
        <li className="checklist-item">
          <input id="" type="checkbox" defaultChecked="checked"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Deployment of the contract</span>
        </li>
        <li className="checklist-item">
          <input id="" type="checkbox" defaultChecked="checked"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Verification on BscScan</span>
        </li>
        <li className="checklist-item">
          <input id="" type="checkbox" defaultChecked="checked"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Launch the website</span>

        </li>
        <li className="checklist-item">
          <input id="" type="checkbox" defaultChecked="checked"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Liquidity lock for 3 years</span>
        </li>

      </ul>

    </section>
    <section className="checklist">
      <h2 className="checklist__title">Phase 2</h2>
      <span className="checklist__title-border"/>
      <span className="checklist__percentage-border"/>
      <ul className="checklist-container">
        <li className="checklist-item">
          <input id="" type="checkbox" defaultChecked="checked"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Marketing</span>


        </li>
        <li className="checklist-item">
          <input id="" type="checkbox" defaultChecked="checked"/><label htmlFor=""
    className="checkbox" /><span
            className="checklist-item__title">Launch on PancakeSwap</span>



        </li>
        <li className="checklist-item">
          <input id="" type="checkbox" defaultChecked="checked"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Launch on PooCoin</span>

        </li>
        <li className="checklist-item">
          <input id="" type="checkbox"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Listing on CoinMarketCap</span>
        </li>
        <li className="checklist-item">
          <input id="" type="checkbox"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Meta Wallet Launch</span>

        </li>
        <li className="checklist-item">
          <input id="" type="checkbox"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Metaverse Development and Partnerships</span>


        </li>

      </ul>
    </section>
    <section className="checklist">
      <h2 className="checklist__title">Phase 3</h2>
      <span className="checklist__title-border"/>
      <span className="checklist__percentage-border"/>
      <ul className="checklist-container">
        <li className="checklist-item">
          <input id="" type="checkbox"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">CEX Listing</span>
        </li>
        <li className="checklist-item">
          <input id="" type="checkbox"/><label htmlFor=""
    className="checkbox"/><span
            className="checklist-item__title">Partnership with Visa and Mastercard</span>

        </li>
        <li className="checklist-item">
          <input id="" type="checkbox"/><label htmlFor=""
                                               className="checkbox"></label><span
            className="checklist-item__title">Partnership with MetaVerse</span>
        </li>
        <li className="checklist-item">
          <input id="" type="checkbox"/><label htmlFor=""
                                               className="checkbox"></label><span
            className="checklist-item__title">Partnership with gaming platforms</span>
        </li>
        <li className="checklist-item">
          <input id="" type="checkbox"/><label htmlFor=""
                                               className="checkbox"/><span
            className="checklist-item__title">More to come...</span>
        </li>
      </ul>
    </section>
  </div>
</div>);

export default Roadmap;
