import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

//components
import LanguagesButton from '@components/LanguagesButton';
import DropdownLanguages from '@components/DropdownLanguages';
import UserButton from '@components/UserButton';
import DropDownLogin from '@components/DropDownLogin';

//screens
import DancesScreen from '@screens/DancesScreen';
import AboutScreen from '@screens/AboutScreen';

//style
import { Tab } from '@appearance/styled';
import styled from 'styled-components';


class NavigationRouter extends React.Component {
  state = {
    dropdownVisible: false,
    dropdownVisibleUser: false,
    open:false
  };

    toggleDropdown() {
      this.setState({ open: !this.state.open });
    }

   toggleDropDownLang = () => 
    this.setState({
      dropdownVisible: !this.state.dropdownVisible,
    })

    toggleDropDownUser = () => 
    this.setState({
      dropdownVisibleUser: !this.state.dropdownVisibleUser,
    })

    render() {
      return (
        <Bar>
          <Router>
              <div>
                <nav style={{textAlign:'left'}}>
                  <ul style={{padding:'5px', fontSize:"15px", marginLeft:'1rem'}}>
                    <Tab>
                      <Link to="/">ראשי</Link>
                    </Tab>
                    <Tab>
                      <Link to="/about">אודות</Link>
                    </Tab>
                    <Tab>
                      <Link to="/dances">ריקודים</Link>
                    </Tab>
                    <RightPart>
                          <UserButton onClick={this.toggleDropDownUser}/>
                          <DropDownLogin show={this.state.dropdownVisibleUser}/> 

                          <LanguagesButton onClick={this.toggleDropDownLang}/>
                          <DropdownLanguages show={this.state.dropdownVisible}/> 
                    </RightPart>
                
                  </ul>
                </nav>
              </div>
              <Route path="/about" component={AboutScreen}></Route>
              <Route path="/dances" component={DancesScreen}></Route>
              <Route path="/"></Route>
              <Redirect from="/" to="dances" />
          </Router>
        </Bar>
      )
     }
}

export default NavigationRouter; 
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
  margin-right: 3rem;
  @media (max-width: 768px) {
    margin-right: 0rem;
    margin-top: -2.9rem;
    float: right;
  }
`;

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

  