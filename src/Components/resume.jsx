import React from "react";
import './resume.css';
import JFResumeHeader from './images/JFResumeHeader.png';
import JFResume2026 from './images/JFResume2026.jpg';
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
        <h1 id='h1'>Hello! I’m a senior engineer with thirteen years of work experience in the NYC metro area. In my current Solutions capacity, I’ve launched hundreds of my company’s most strategic and high-value Western Hemisphere merchants, whose cumulative contract value exceeds $8M. I instituted my team’s first-ever code review process, launched an improved Subject Matter Expert program, and managed peer escalations, all while building out technical resources for external and internal partners across four company product lines. In non-engineering roles, I’ve led marketing and digital at genomics start-up Phosphorus, drafted CEO book content for NASDAQ-traded healthcare company Quanterix, and written for Ivy League professors and Silicon Valley technologists through Stern Strategy Group.</h1>
      </div>
      <div className='sub-division-2'>
        <img className="jf-resume-arrow" src={ JFResumeArrow } alt="" />
      </div>
      <div className='sub-division-3'>
        <img className="jf-resume-2026" src={ JFResume2026 } alt="" />
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