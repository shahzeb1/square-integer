import React from 'react';
import { getSiteProps } from 'react-static';
import { App } from '../components/Apps';

export default getSiteProps(() => (
  <div className="container">
    <div className="bg-yellow intro-box pa4 pt5">
      <h1 className="near-black lh-title normal">
        <span className="black b">square integer</span> is a digital design
        agency based out of{' '}
        <span className="black b">monterey, california</span>.
      </h1>
      <h3 className="black fw4 lh-copy pt3">
        We help clients develop beautiful data driven applications for mobile
        platforms and the web. The entire process from prototyping to scaling
        your product for millions of users is managed by our team.
      </h3>
    </div>
    <div className="contact-box bg-lightest-blue pa4 pt5">
      <h1 className="tc">&#128236;</h1>
      <h2 className="near-black lh-title normal pt4 pb4">
        Would you like to inquire about{' '}
        <a
          target="_blank"
          href="mailto:hi@squareinteger.com?subject=An iPhone application"
          className="b no-underline black"
        >
          an iPhone app
        </a>? Maybe{' '}
        <a
          target="_blank"
          href="mailto:hi@squareinteger.com?subject=A web application"
          className="b no-underline black"
        >
          a web application
        </a>? Or would you like to talk to us about{' '}
        <a
          target="_blank"
          href="mailto:hi@squareinteger.com?subject=Machine Learning"
          className="b no-underline black"
        >
          Machine Learning
        </a>?
      </h2>
      <a
        target="_blank"
        href="mailto:hi@squareinteger.com"
        className="email-button no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2 m"
      >
        Send us an email
      </a>
    </div>
    <div className="showcase-box">
      <div className="app bg-washed-red pa4">
        <h2>apps</h2>
        <App />
      </div>
      <div className="web bg-light-green">web app</div>
      <div className="ml bg-light-pink">machine learning</div>
    </div>
  </div>
));
