import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//screens
import SongsScreen from '@screens/SongsScreen';
import AboutScreen from '@screens/AboutScreen';

import { Tab } from '@appearance/styled';


const NavigationRouter = () => (
      <Router>
          <div>
            <nav>
              <ul>
                <Tab>
                  <Link to="/">ראשי</Link>
                </Tab>
                <Tab>
                  <Link to="/about">אודות</Link>
                </Tab>
                <Tab>
                  <Link to="/songs">שירים</Link>
                </Tab>
              </ul>
            </nav>
              <Route path="/about" component={AboutScreen}></Route>
              <Route path="/songs" component={SongsScreen}></Route>
              <Route path="/">
              </Route>
          </div>
    </Router>
)

export default NavigationRouter; 