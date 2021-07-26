import React from "react";
import WhereNeck from './images/where-neck.jpg';
import Upwork from './images/Upwork.png';
import Taskrabbit from './images/Taskrabbit.png';
import Backstage from './images/Backstage.png';
import './contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className='sub-wrapper-1'>
            <img className="where-neck" src={ WhereNeck } alt="" />
        </div>
        <div className='sub-wrapper-2'>
          <div className='text'>
            <p className='contact-info'>
              You can find me on most any platform under the handle @friskybunnies — a nonsense word that began as a gag email, became my high school nickname, got  attached to my first car (a baby blue 1988 Chevy Caprice), and sticks with me in various circles to this day.
            </p>
            <div className='contact-links'>
              <p className='contact-links-1'>
                (563) 505-5893 | friskybunnies@gmail.com | justinfarrismanager@gmail.com
              </p>
              <p className='contact-links-2 bold'>
                Additional platform links:
              </p>
              <p>
                <a href='https://www.upwork.com/fl/friskybunnies' target='_blank' rel='noreferrer' aria-label='Upwork'>
                  <img className='image' src={ Upwork } alt='' />
                </a>
                <a href='https://tr.co/friskybunnies' target='_blank' rel='noreferrer' aria-label='Taskrabbit'>
                  <img className='image' src={ Taskrabbit } alt='' />
                </a>
                <a href='' target='_blank' aria-label='Backstage'>
                  <img className='image' src={ Backstage } alt='' />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;