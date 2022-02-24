import React from 'react';
import './guide.css';
import $ from 'jquery';

const Guide = () => (<div className="gpt3__footer section__padding" id="guide">
  <div className="gpt3__footer-heading">
    <h1 className="gradient__text">Do you want to step in to the future
      before others?</h1>
  </div>
  <div className="container px-4 py-5" id="icon-grid">
    <h2 className="pb-2 text-center" id="guide-subtitle">How to buy</h2>

    <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
        id="guide-steps">
      <div className="col align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em"
             height="1.75em">
          <use xlinkHref="#bootstrap"/>
        </svg>
        <div>
          <h4 className="fw-bold mb-0 border-bottom">Step 1</h4>
          <p>
            Connect your wallet to Metamask or Trust Wallet</p>
        </div>
      </div>
      <div className="col  align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em"
             height="1.75em">
          <use xlinkHref="#cpu-fill"/>
        </svg>
        <div>
          <h4 className="fw-bold mb-0 border-bottom">Step 2</h4>
          <p>Deposit BNB into your wallet</p>
        </div>
      </div>
      <div className="col  align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em"
             height="1.75em">
          <use xlinkHref="#calendar3"/>
        </svg>
        <div>
          <h4 className="fw-bold mb-0 border-bottom">Step 3</h4>
          <p>
            Trust Wallet only: swap BNB to Smart Chain</p>
        </div>
      </div>
      <div className="col  align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em"
             height="1.75em">
          <use xlinkHref="#home"/>
        </svg>
        <div>
          <h4 className="fw-bold mb-0 border-bottom">Step 4</h4>
          <p>
            Go to <a
              href="https://pancakeswap.finance/swap">PancakeSwap</a> or <a
              href="https://poocoin.app/swap">PooCoin</a> .
          </p>
        </div>
      </div>
      <div className="col  align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em"
             height="1.75em">
          <use xlinkHref="#speedometer2"/>
        </svg>
        <div>
          <h4 className="fw-bold mb-0 border-bottom">Step 5</h4>
          <p>
            Select a currency and enter the MetaWage <br/> contract address into
            the search field:
          </p>
          {/*<input placeholder="0x2545daee174eb7b9a0a25d17eaebbf1bd08afa16"/>*/}


          <div className="contact">
            <div className="btn-group">
              <a className="btn btn-primary"
                 id="token-address">0x2545daee174eb7b9a0a25d17eaebbf1bd08afa16</a>
              <button type="button"
                      className="btn btn-default btn-copy js-tooltip js-copy"
                      id="copy-button"
                      data-toggle="tooltip" data-placement="bottom"
                      data-copy="0x2545daee174eb7b9a0a25d17eaebbf1bd08afa16"
                      title="Copy to clipboard">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                     width="24" height="24" viewBox="0 0 24 24">
                  <path
                      d="M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"/>
                </svg>
                <p>Copy</p>
              </button>
            </div>
          </div>


        </div>
      </div>
      <div className="col align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em"
             height="1.75em">
          <use xlinkHref="#toggles2"/>
        </svg>
        <div>
          <h4 className="fw-bold mb-0 border-bottom">Step 6</h4>
          <p>
            Click the cogwheel and set the slippage to 11%.</p>
        </div>
      </div>
      <div className="col  align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em"
             height="1.75em">
          <use xlinkHref="#geo-fill"/>
        </svg>
        <div>
          <h4 className="fw-bold mb-0 border-bottom">Step 7</h4>
          <p>Set the amount you want to purchase and press the exchange swap
            button</p>
        </div>
      </div>
      <div className="col  align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em"
             height="1.75em">
          <use xlinkHref="#tools"/>
        </svg>
        <div>
          <h4 className="fw-bold mb-0 border-bottom">Step 8</h4>
          <p>Confirm the transaction from Metamask or Trust Wallet</p>
        </div>
      </div>
    </div>
  </div>


  <div className="gpt3__footer-copyright">
    <p>@2022 MetaWage. All rights reserved.</p>
  </div>
  <div className="footer-social-icons">
    <ul className="social-icons">
      <li><a href="https://twitter.com/meta_wage?t=VKMKnEpropcVhqJen2xmYA&s=07"
             className="social-icon"> <i
          className="fa fa-twitter"/></a></li>
      <li><a href="https://t.me/meta_wage1" className="social-icon"> <i
          className="bi bi-telegram"/></a></li>
    </ul>
  </div>
</div>);

// COPY TO CLIPBOARD
// Attempts to use .execCommand('copy') on a created text field
// Falls back to a selectable alert if not supported
// Attempts to display status in Bootstrap tooltip
// ------------------------------------------------------------------------------

function copyToClipboard(text, el) {
  var copyTest = document.queryCommandSupported('copy');
  var elOriginalText = el.attr('data-original-title');

  if (copyTest === true) {
    var copyTextArea = document.createElement('textarea');
    copyTextArea.value = text;
    document.body.appendChild(copyTextArea);
    copyTextArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copied!' : 'Whoops, not copied!';
      el.attr('data-original-title', msg).tooltip('show');
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(copyTextArea);
    el.attr('data-original-title', elOriginalText);
  } else {
    // Fallback if browser doesn't support .execCommand('copy')
    window.prompt('Copy to clipboard: Ctrl+C or Command+C, Enter', text);
  }
}

$(document).ready(function() {
  // Initialize
  // ---------------------------------------------------------------------

  // Tooltips
  // Requires Bootstrap 3 for functionality
  // $('.js-tooltip').tooltip();

  // Copy to clipboard
  // Grab any text in the attribute 'data-copy' and pass it to the
  // copy function
  $('.js-copy').click(function() {
    var text = $(this).attr('data-copy');
    var el = $(this);
    copyToClipboard(text, el);
  });
});

export default Guide;
