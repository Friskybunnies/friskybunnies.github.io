import React from "react";
import './home.css';
import friskybunnies from './images/friskybunnies.gif';

function Home() {
  return (
    <div className="home">
      <div className="overall">
        <div className='sub-division'>
          <img className="friskybunnies-logo" src={ friskybunnies } alt="" />
        </div>
        <div className='sub-division'>
          <p id='tagline'>
            Hi hi
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;