import React from "react";
import './code.css';
import FriskyFigures from './images/FriskyFigures.png';
import FriskybunniesWebsite from './images/FriskybunniesWebsite.png';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch.js';
import Video1 from './images/Video1.mov';
import Video2 from './images/Video2.mov';
import Video3 from './images/Video3.mov';
import GMAFIABAT from './images/GMAFIABAT.png';
import EfficientFrontier from './images/EfficientFrontier.png';
import BugCatcherLogin from './images/BugCatcherLogin.png';
import BugCatcherDash from './images/BugCatcherDash.png';
import BugCatcherView from './images/BugCatcherView.png';
import PhosphorusBanner from './images/PhosphorusBanner.png';
import PhosphorusHome from './images/PhosphorusHome.png';
import PhosphorusDiag from './images/PhosphorusDiag.png';
import RecombineHome from './images/RecombineHome.png';
import OkCupid from './images/OkCupid.png';
import ConfusionMatrix from './images/ConfusionMatrix.png';
import Pierre from './images/Pierre.png';
import ASL from './images/ASL.png';
import ASL2 from './images/ASL2.png';
import Pneum from './images/Pneum.png';
import Pneum2 from './images/Pneum2.png';
import RatTunnel from './images/RatTunnel.png';
import Creative1 from './images/Creative1.png';
import Creative2 from './images/Creative2.png';
import Creative3 from './images/Creative3.png';

function Code() {
  return (
    <div className="code">
      <div className="codeContainer">
        <div className="title">
          <div className="titleText">&lt;code&gt;</div>
          <P5Wrapper sketch={sketch}></P5Wrapper>
        </div>
      </div>
      <div className="intro">Hello, and welcome to my coding and data science projects page!</div>
      <div className="slide">
        <div className="slide-title">Project #1: Friskybunnies.com</div>
        <div className="description">
          Whoa, how meta! I made this site with React, WebGL, p5.js, and responsive CSS, with deployment through Netlify.
        </div>
        <div className="frisky-website">
          <img className="frisky-website-image" src={FriskybunniesWebsite} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #2: G-MAFIA BAT mean-variance portfolio optimization using Sharpe ratio and Markowitz efficient frontier</div>
        <div className="description">
          For this project, I used CVXOPT package interfaces in Python to explore modern portfolio theory by boiling down linear algebra, convex optimization, and quadratic and cone programming into a set of functions for mean-variance optimization on a portfolio consisting of G-MAFIA BAT companies. To access financial data, I used stand-ins for the discontinued Yahoo Finance API, including pandas_datareader and yfinance. I made my visualizations with Matplotlib and Seaborn and determined an optimal portfolio using the Sharpe ratio and the Markowitz efficient frontier. I captured all of this in a Jupyter notebook, with LaTeX and Markdown for formatting. Check out the code on my Github page, <a href="https://github.com/Friskybunnies/G-MAFIA_BAT-mean-variance-optimization" target="_blank" rel="noreferrer">here</a>.
        </div>
        <div className="g-mafia-bat">
          <img className="g-mafia-bat-image" src={GMAFIABAT} alt="" />
        </div>
        <div className="efficient-frontier">
          <img className="efficient-frontier-image" src={EfficientFrontier} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #3: Phosphorus and Recombine</div>
        <div className="description">
          In early 2014, I was hired to Recombine's Engineering team on contract, and though my next steps took me into marketing at both Recombine and Phosphorus (related companies), I designed for both websites throughout my time there, eventually coming to manage the Phosphorus website with an ensemble of contracted developers and designers. My work can be seen especially in the branding, iconography, and layout. Recombine was built using vanilla front-end technologies and deployed on Heroku, while Phosphorus was a custom theme built on top of a Wordpress CMS with a PHP backend. After a series of acquisitions and pivots, Recombine.com is now defunct (currently operating as <a href="https://www.coopergenomics.com/" target="_blank" rel="norefferer">CooperGenomics</a>) and <a href="https://phosphorus.com/" target="_blank" rel="noreferrer">Phosphorus</a> has been rebranded, but you can find archived images of both during my time there on <a href="https://web.archive.org/web/20180329152302/http://phosphorus.com/" target="_blank" rel="noreferrer">Wayback Machine</a>.
        </div>
        <div className="pho-rec-website">
          <img className="pho-home-image" src={PhosphorusHome} alt="" />
        </div>
        <div className="pho-rec-website">
          <img className="pho-diag-image" src={PhosphorusDiag} alt="" />
        </div>
        <div className="pho-rec-website">
          <img className="rec-home-image" src={RecombineHome} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #4: RatTunnel.com</div>
        <div className="description">
          I created a fully-responsive MERN-stack e-commerce SPA for Midwest artist collective Rat Tunnel. I built the frontend with React and Redux, the backend with Node and Express, and the database from MongoDB using Mongoose, with PayPal API interaction for purchasing.
        </div>
        <div className="rat-website">
          <img className="rat-website-image" src={RatTunnel} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #5: Predicting Pneumonia from Chest Radiographs with Deep Learning</div>
        <div className="description">
          I created a deep learning model using chest X-rays to predict whether a patient has pneumonia, with an accuracy of ~98%. I was inspired to complete this project after reading The Digital Doctor by Dr. Robert Wachter, a leading academic physician. His book provides an overview of how technology is revolutionizing healthcare, both for better and worse. One of his examples is in the field of radiology, where artifical intelligence is outperforming specialists, who are typically extremely expensive and in short supply (at least in the U.S.). Deep learning models can be trained to identify disease, in order to fill existing gaps in healthcare. I created this project in Google Colab, using a Kaggle dataset.
        </div>
        <div className="pneum">
          <img className="pneum-image-1" src={Pneum} alt="" />
        </div>
        <div className="pneum">
          <img className="pneum-image-2" src={Pneum2} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #6: ASL Letter Prediction with ResNet9 and PyTorch</div>
        <div className="description">
          I performed single label classification on a Kaggle dataset of ASL letters using PyTorch and ResNet9 deep learning architecture. The model can be used as the basis of computer vision ASL interpretation using the OpenCV library. The model achieved an accuracy of ~99%.
        </div>
        <div className="asl">
          <img className="asl-image-1" src={ASL} alt="" />
        </div>
        <div className="asl">
          <img className="asl-image-2" src={ASL2} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #7: BUG CATCHER, the non-stressful bug tracker</div>
        <div className="description">
          In this project, I built a React-Redux frontend for tracking bugs, constructed the server with express.Router, and connected it to MongoDB through the Mongoose ORM. I focused on creating a pleasing interface with particular attention to color psychology and fun illustrations in order to take away the stress of dealing with broken code. I am currently rebuilding parts of the app, but you can play around with it through this <a href="https://61038a7ac32597e9470b9ce4--trusting-edison-e7bd49.netlify.app/" target="_blank" rel="noreferrer">link</a>.
        </div>
        <div className="bug-catcher-website">
          <img className="bug-catcher-login" src={BugCatcherLogin} alt="" />
        </div>
        <div className="bug-catcher-website">
          <img className="bug-catcher-view" src={BugCatcherView} alt="" />
        </div>
        <div className="bug-catcher-website">
          <img className="bug-catcher-dash" src={BugCatcherDash} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #8: Predicting user religion from OkCupid profile data using machine learning methods</div>
        <div className="description">
          In this project, I used machine learning to predict OkCupid user religion based on anonymized demographic information. The data comes from a publicly-available dataset published in the Journal of Statistics Education. I tested multiple scikit-learn models, including logistic regression, the CART model, and the k-neighbors classifier, with cross-validation. With this analysis, a company like OkCupid could impute religion data when users don't enter it manually, in order to help potential partners find each other based on shared spiritual beliefs. You can view my code <a href="https://github.com/Friskybunnies/predicting-okcupid-religion-with-ML" target="_blank" rel="noreferrer">here</a>.
        </div>
        <div className="okcupid">
          <img className="okcupid-image-1" src={OkCupid} alt="" />
        </div>
        <div className="okcupid">
          <img className="okcupid-image-2" src={ConfusionMatrix} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #9: Creative coding with p5.js</div>
        <div className="description">
          I like to generate and fork creative repos across platforms to make digital art with code (such as the header at the top of this page). The samples below are "Rutabaga Zombie," "Dawnfruit/Duskfruit," and "Chromosome Pirouette" respectively, which I created with p5.js on OpenProcessing, an open-source community devoted to the artistic aspects of code. You can check out my profile <a href="https://openprocessing.org/user/280981?view=activity" target="_blank" rel="norefferer">here</a>.
        </div>
        <div className="creative-coding">
          <video loop muted autoPlay playsInline>
            <source src={Video1} type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
          </video>
          <video loop muted autoPlay playsInline>
            <source src={Video2} type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
          </video>
          <video loop muted autoPlay playsInline>
            <source src={Video3} type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <div className="creative-image">
          <div className="creative">
            <img className="creative-image" src={Creative1} alt="" />
          </div>
          <div className="okcupid">
            <img className="creative-image-2" src={Creative2} alt="" />
          </div>
          <div className="okcupid">
            <img className="creative-image-3" src={Creative3} alt="" />
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #10: Pierre's Polynomial Mustache</div>
        <div className="description">
          Pierre's Polynomial Mustache is a simple, educational visualizer for the concepts of both polynomial regression and the ML tuning parameter known as "learning rate." It's built with TensorFlow and p5.js, drawing inspiration from the work of Daniel Shiffman, an Associate Professor at NYU. The user plots data points (in the world of the story, chickenpox blisters), which Pierre then tries to cover with his polynomial mustache, just like a data scientist would try to fit a regression line. When the degree of the polynomial gets too high, Pierre's mustache becomes impractical and silly, just like an overfitted model. You can play with Pierre <a href="https://heuristic-brahmagupta-2d5355.netlify.app/" target="_blank" rel="noreferrer">here</a>.
        </div>
        <div className="pierre">
          <img className="pierre-image" src={Pierre} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Project #10: Frisky Figures</div>
        <div className="description">
          P-value, t-test, F-test, F<sub>1</sub>-score, Z-test, Q-statistic, k-fold validation, R, R<sup>2</sup>...the list goes on. Without convenient mnemonics, how can statistics beginners keep it all straight? In this project, I'm building the field guide I wish I'd had from the start, with tips that are sophisticated, but written in plain English. I'm drawing inspiration from all of my favorite non-curricular, supplemental resources that helped me get started, like <a href="https://blog.minitab.com" target="_blank" rel="noreferrer">blog.minitab.com</a> and <a href="https://statquest.org" target="_blank" rel="noreferrer">statquest.org</a>. I'm also making the end product colorful and interactive, like <a href="https://seeing-theory.brown.edu" target="_blank" rel="noreferrer">seeing-theory.brown.edu</a>, <a href="https://careerkarma.com/blog/coding-bootcamp-final-project-ideas/" target="_blank" rel="noreferrer">3Blue1Brown</a>, and <a href="https://thecrashcourse.com" target="_blank" rel="noreferrer">thecrashcourse.com</a>. And I'm making it free! This project is a work in progress, but in the meantime, check out my dedicated Github page, <a href="https://github.com/Friskybunnies/frisky-figures" target="_blank" rel="noreferrer">here</a>.
        </div>
        <div className="frisky-figures">
          <img className="frisky-figures-image" src={FriskyFigures} alt="" />
        </div>
      </div>
      <div className="slide">
        <div className="slide-title">Projects #N - #N+1</div>
        <div className="description">
          Check back often! I'm frequently updating my work with new projects. Right now, I'm focused on building a dates reminder app for both iOS and Android, but I've been up to some other things as well: building an algorithmic trading bot with Python, running stock sentiment analyses, producing depth maps through webcam, creating Spark AR filters, enabling face recognition for computers, designing an interactive explorer map using the Unity engine, and analyzing national homeschooling data with the NHES surveys program of 2019.
        </div>
      </div>
    </div>
  );
}

export default Code;