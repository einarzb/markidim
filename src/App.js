import React, { Component } from 'react';

import {Grommet} from 'grommet/components/Grommet';
import { myTheme } from './styled';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <Grommet theme={myTheme} className="App">

      <h2>einar</h2>
      </Grommet>
    );
  }
}

export default App;
