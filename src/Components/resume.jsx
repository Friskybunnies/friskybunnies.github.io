import React from "react";
import './resume.css';
import JFResumeHeader from './images/JFResumeHeader.png';
import JFResume2021 from './images/JFResume2021.jpg';
import JFResumeArrow from './images/JFResumeArrow.png';
import WebResume1 from './images/WebResume1.png';
import WebResume2 from './images/WebResume2.png';
import WebResume3 from './images/WebResume3.png';
import WebResume4 from './images/WebResume4.png';


function Resume() {
  return (
    <div className="resume">
      <div className='sub-division-1'>
        <img className="jf-resume-header" src={ JFResumeHeader } alt="" />
      </div>
      <div className='profile'>
        <h1 id='h1'>Hello! I’m a developer, writer, marketer, and designer with eight years of work experience in the NYC metro area. I’ve led marketing efforts and digital presence at genomics start-up Phosphorus, drafted book content for the CEO of NASDAQ-traded Boston healthcare company Quanterix, written for Ivy League professors and Silicon Valley technologists through Stern Strategy Group, and performed numerous consulting and freelancing services for companies and executives in design, UX, web dev, and more.</h1>
      </div>
      <div className='sub-division-2'>
        <img className="jf-resume-arrow" src={ JFResumeArrow } alt="" />
      </div>
      <div className='sub-division-3'>
        <img className="jf-resume-2021" src={ JFResume2021 } alt="" />
      </div>
      <div className='sub-division'>
        <img className="web-layout-1" src={ WebResume1 } alt=""/>
      </div>
      <div className='sub-division'>
        <img className="web-layout-2" src={ WebResume2 } alt=""/>
      </div>
      <div className='sub-division'>
        <img className="web-layout-3" src={ WebResume3 } alt=""/>
      </div>
      <div className='sub-division'>
        <img className="web-layout-4" src={ WebResume4 } alt=""/>
      </div>

    </div>
  );
}

export default Resume;