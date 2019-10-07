import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//styling
import {Grommet} from 'grommet/components/Grommet';
import { myTheme, Tab } from '@appearance/styled';
import './App.css';


//screens
import SongsScreen from '@screens/SongsScreen';
import AboutScreen from '@screens/AboutScreen';


class App extends Component {
  render(){
    return (
      <Grommet theme={myTheme} className="App">
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
      </Grommet>
    );
  }
}

export default App;
