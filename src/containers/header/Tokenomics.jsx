import React from 'react';
// import ai from '../../assets/ai.png';
import './tokenomics.css';
import logo from '../../assets/logo-site.svg';

const Tokenomics = () => (<div>


      <div className="header" id="tokenomics">
        <h1 id="main-home-title">Meet MetaWage</h1>
      </div>


      <h3
          id="subtext-title"
          className="d-flex justify-content-center"
      >The token of the future</h3>


      <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28" preserveAspectRatio="none"
             shapeRendering="auto">
          <defs>
            <path id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0"
                 fill="rgba(255,255,255,0.7"/>
            <use xlinkHref="#gentle-wave" x="48" y="3"
                 fill="rgba(255,255,255,0.5)"/>
            <use xlinkHref="#gentle-wave" x="48" y="5"
                 fill="rgba(255,255,255,0.3)"/>
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
          </g>
        </svg>
      </div>


    </div>

);

export default Tokenomics;
