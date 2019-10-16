import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

//screens
import SongsScreen from '@screens/SongsScreen';
import AboutScreen from '@screens/AboutScreen';

//style
import { Tab } from '@appearance/styled';
import styled from 'styled-components';

//mock data
export const filterOptions = [
  { value: 'זוגות', label: 'זוגות', color: '#FFFFFF', isFixed: true },
  { value: 'לא מאושר', label: 'לא מאושר', color: '#FFFFFF' },
  { value: 'תמיר שרצר', label: 'תמיר שרצר', color: '#FFFFFF' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "rgba(255,255,255,0.2)",
    fontSize:"16px",
    height:"40px",
    fontColor:"#FFFFFF",
    borderColor:"transparent",
    width:"auto",
    direction:"rtl",
    lineHeight:1,
    height:"auto",
   // borderColor: state.isFocused ? "grey" : "grey",
   // boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: "#fd7c20"
    }
  })
};

const animatedComponents = makeAnimated();

const NavigationRouter = () => (
    <Bar>
      <Router>
          <div>
            <nav style={{textAlign:'left'}}>
              <ul style={{padding:'5px'}}>
                <Tab>
                  <Link to="/">ראשי</Link>
                </Tab>
                <Tab>
                  <Link to="/about">אודות</Link>
                </Tab>
                <Tab>
                  <Link to="/songs">שירים</Link>
                </Tab>
                <Tab style={{width:'auto',marginTop:'4px', float:'right'}}>
                  <Select
                      placeholder='חיפוש חופשי'
                      styles={customStyles} 
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      defaultValue={[filterOptions[0], filterOptions[1]]}
                      isMulti
                      options={filterOptions}
                    />
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
  max-height:55px;
  width:100%;
  `;