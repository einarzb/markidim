import React, { Component } from 'react';

//styling
import {Grommet} from 'grommet/components/Grommet';
import { myTheme, Header, EnglishHeader } from '@appearance/styled';
import './App.css';
import {LOGO} from '@assets/index.js';

import NavigationRouter from '@navigation/NavigationRouter';

class App extends Component {
  render(){
    return (
      <Grommet theme={myTheme} className="App">
        <Header>
          <h2>ארגון המרקידים והכוריאוגרפים לריקודי עם בישראל ובתפוצות</h2>
          <img src={LOGO}/>
        </Header>
        <EnglishHeader>Association of Folk Dance instructors & choreographers in Israel and abroad</EnglishHeader>
        <NavigationRouter/>
      </Grommet>
    );
  }
}

export default App;
