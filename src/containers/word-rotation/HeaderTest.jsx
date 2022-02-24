import React from 'react';
// import ai from '../../assets/ai.png';
import './headerTest.css';
// import logoEmy from '../../assets/logoEmy.png';

const HeaderTest = () => (
    <div id="vertical-carousel">
      <h2 id="static-text">
        MetaWage is
        <div className="mask">
          <span data-show>Safe</span>
          <span>Growing</span>
          <span>Rewarding</span>
          <span>Effortless</span>
        </div>
      </h2>
    </div>
);

setInterval(function() {
  const show = document.querySelector('span[data-show]');
  const next = show.nextElementSibling ||
      document.querySelector('span:first-child');
  const up = document.querySelector('span[data-up]');

  if (up) {
    up.removeAttribute('data-up');
  }

  show.removeAttribute('data-show');
  show.setAttribute('data-up', '');

  next.setAttribute('data-show', '');
}, 2000)
;

export default HeaderTest;
