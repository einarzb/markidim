import React, { Component } from 'react';

//styling
import {Grommet} from 'grommet/components/Grommet';
import { myTheme, Header } from '@appearance/styled';
import './App.css';

import NavigationRouter from '@navigation/NavigationRouter';

class App extends Component {
  render(){
    return (
      <Grommet theme={myTheme} className="App">
        <Header>
          <h2>ארגון המדריכים והיוצרים לריקודי עם</h2>
        </Header>
        <div>
           <NavigationRouter/>

        </div>
   

      </Grommet>
    );
  }
}

export default App;
