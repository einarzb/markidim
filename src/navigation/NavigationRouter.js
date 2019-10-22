import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Select from 'react-select';

//components
import NavButton from '@components/NavButton';
import Dropdown from '@components/Dropdown';

//screens
import SongsScreen from '@screens/SongsScreen';
import AboutScreen from '@screens/AboutScreen';

//style
import { Tab } from '@appearance/styled';
import styled from 'styled-components';

//mock data
export const filterOptions = [
  { value: 'זוגות', label: 'זוגות', color: '#FFFFFF', isFixed: false },
  { value: 'לא מאושר', label: 'לא מאושר', color: '#FFFFFF' },
  { value: 'תמיר שרצר', label: 'תמיר שרצר', color: '#FFFFFF' }
];

export const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "rgba(255,255,255,0.9)",
    fontSize:"16px",
    height:"40px",
    fontColor:"white",
    borderColor:"transparent",
    width:"300px",
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


export default class NavigationRouter extends React.Component {
  state = {
    dropdownVisible: false,
  };

  toggleDropDown = () => 
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    })

    render() {
      return (
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
                <RightPart>
                  <NavButton onClick={this.toggleDropDown}/>
                  <Dropdown show={this.state.dropdownVisible}/> 

               
                    <Tab style={{width:'auto',marginTop:'4px', float:'right'}}>
                      <Select
                          placeholder='חיפוש חופשי'
                          styles={customStyles} 
                          closeMenuOnSelect={false}                          
                        // defaultValue={[filterOptions[0], filterOptions[1]]}
                          isMulti
                          options={filterOptions}
                        />
                    </Tab>
                </RightPart>
             
              </ul>
            </nav>
       </div>
       <Route path="/about" component={AboutScreen}></Route>
       <Route path="/songs" component={SongsScreen}></Route>
       <Route path="/"></Route>
    </Router>
    </Bar>
    )
  }
}

//export default NavigationRouter; 
//rgb(25, 47, 58); dark blue

export const Bar = styled.div`
  background-color:rgb(83, 71, 103);
  max-height:55px;
  width:100%;
  `;


  export const RightPart = styled.div`
    width: auto;
    display:inline-flex;
    flex-direction: row;
    float:right;
  `;


  