import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//screens
import SongsScreen from '@screens/SongsScreen';
import AboutScreen from '@screens/AboutScreen';

//style
import { Tab } from '@appearance/styled';
import styled from 'styled-components';

const NavigationRouter = () => (
    <Bar>
      <Router>
          <div>
            <nav style={{textAlign:'left'}}>
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
       </div>
       <Route path="/about" component={AboutScreen}></Route>
       <Route path="/songs" component={SongsScreen}></Route>
       <Route path="/"></Route>
    </Router>
    </Bar>
)

export default NavigationRouter; 
//rgb(25, 47, 58); dark blue

export const Bar = styled.div`
  background-color:rgb(83, 71, 103);
  max-height:50px;
  width:100%;
  `;