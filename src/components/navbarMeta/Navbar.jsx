import React, {useEffect, useRef, useState} from 'react';
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri';
import LogoSVG from '../../assets/logosvg.svg';
import logo from '../../assets/logo-site.svg';
import './navbar.css';
import PropTypes from 'prop-types';
//

/**
 * Hook that alerts clicks outside of the passed ref
 */



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleMenu(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  /**
   * Component that alerts if you click outside of it
   */
  function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
  }

  OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired,
  };
//

  return (

      <div className="gpt3__navbar" id="homepage">

        <div id="wrapper-logo-site"><img id="logo-site" src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={LogoSVG}/>
          </div>
          <div className="gpt3__navbar-links_container">
            <p><a href="#homepage">Home</a></p>
            <p><a href="#about">What is MetaWage?</a></p>
            <p><a href="#roadmap">Roadmap</a></p>
            <p><a href="#guide">How to buy</a></p>
            <p><a href="#open-modal" id="custom-glow" type="button"><i
                className="bi bi-wallet2"/> MetaWallet</a>
            </p>


          </div>
        </div>
        <OutsideAlerter>
          <div className="gpt3__navbar-menu">
            {toggleMenu ? <RiCloseLine color="transparent" display="hidden"
                                       size={27}
                                       onClick={() => {
                                         setToggleMenu(false);
                                       }

                                       }/> :
                <RiMenu3Line color="#fff" size={27}
                             onClick={() => {
                               setToggleMenu(true);
                             }}/>}
            {toggleMenu &&
                (<div className="navigation-wrapper"><div className="gpt3__navbar-menu_container"
                      id="modal-menu-meta">
                  <div className="gpt3__navbar-menu_container-links justify-content-end" style={{ width: "100%" }}>
                    <p><a href="#about">What is MetaWage?</a></p>
                    <p><a href="#roadmap">Roadmap</a></p>
                    <p><a href="#guide">How to buy</a></p>
                    <p><a href="#open-modal">MetaWallet</a></p>
                  </div>
                </div></div>)}
          </div>
        </OutsideAlerter>
        <div id="open-modal" className="modal-window">
          <div>
            <a href="#" title="Close" className="modal-close">Close</a>
            <div className="coming-soon">
              Stay tuned. MetaWallet coming soon!
            </div>
          </div>
        </div>
      </div>

  );
};

export default Navbar;
