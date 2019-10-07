import React, { Component } from 'react';

//styling
import {Grommet} from 'grommet/components/Grommet';
import { myTheme } from '@appearance/styled';
import './App.css';

import NavigationRouter from '@navigation/NavigationRouter';

class App extends Component {
  render(){
    return (
      <Grommet theme={myTheme} className="App">
        <NavigationRouter/>
      </Grommet>
    );
  }
}

export default App;
