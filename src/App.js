import React from 'react';
import { Router, Link } from 'react-static';
//
import Routes from 'react-static-routes';

import './app.css';

export default () => (
  <Router>
    <div>
      {/* <nav className="dt w-100 border-box pa3 ph5-ns bg-light-purple">
        <Link to="/" className="dtc v-mid white link w-25">
          square integer
        </Link>
        <div className="dtc v-mid w-75 tr">
          <Link
            to="/philosophy"
            className="link dim white f6 f5-ns dib mr3 mr4-ns"
          >
            Our Philosophy
          </Link>
          <Link
            to="/projects"
            className="link dim white f6 f5-ns dib mr3 mr4-ns"
          >
            Our Projects
          </Link>
          <Link
            to="/contact"
            className="link dim white f6 f5-ns dib mr3 mr4-ns"
          >
            Contact us
          </Link>
        </div>
      </nav> */}
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
);
