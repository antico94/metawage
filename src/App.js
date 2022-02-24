import React from 'react';
import './App.css';


import {
  About,
  FooterMegaWage,
  Guide,
  Header,
  Possibility,
  Roadmap,
  WordRotation,
} from './containers';
import {NavBarMeta} from './components';

const App = () => (
    <div className="App">

      <div className="gradient__bg">
        <NavBarMeta/>
        <Header/>

      </div>
      <WordRotation/>
      <About/>
      <Roadmap/>
      <Possibility/>
      <Guide/>
      <FooterMegaWage/>

    </div>
);

export default App;
