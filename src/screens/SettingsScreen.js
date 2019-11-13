import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import styled from 'styled-components';

import UsersLog from '@screens/UsersLog';
import EmailEditor from '@screens/EmailEditor';
import EmailSettings from '@screens/EmailSettings';
import EmailDistributor from '@screens/EmailDistributor';

class SettingsScreen extends React.Component{ 
  render(){
    return(
      <MyWrapper>

        <Bar>
        <Router>
            <div>
              <nav style={{textAlign:'right'}}>
                <NavUl>
                    <Tab>
                      <Link to="/userslog">לוג משתמשים</Link>
                    </Tab>
                    <Tab>
                      <Link to="/emailsettings">הגדרות</Link>
                    </Tab>
                    <Tab>
                      <Link to="/emaileditor">עריכת  אימיילים</Link>
                    </Tab>
                    <Tab>
                      <Link to="/emaildistributor">עורך הפצת  אימיילים</Link>
                    </Tab>
                </NavUl>
            </nav>
          </div>
            <Route path="/userslog" component={UsersLog}></Route>
            <Route path="/emailsettings" component={EmailSettings}></Route>
            <Route path="/emaileditor" component={EmailEditor}></Route>
            <Route path="/emaildistributor" component={EmailDistributor}></Route>
        </Router>
      </Bar>
    </MyWrapper>

    )
  }
}

export default SettingsScreen;
export const Bar = styled.div`

  `;

  const MyWrapper = styled.div`
  background-color: #ebebeb;
    padding: 0rem 0 2rem 0rem;
    height: 100vh;
    margin-top: -0.9rem;
  `;
const NavUl = styled.ul`
  padding:5px;
  font-size:15px; 
  margin-left:1rem;
  flex-direction:row-reverse;
  display:inline-flex;
  align-items:center;
  list-style-type:none;

    @media (max-width: 768px) {
      flex-wrap: nowrap;
      display: list-item;
      align-items: center;
      width: auto;

    }
`;


const Tab = styled.li`
  list-style-type:none;
  width:auto;
  margin: 10px;
  justify-content:space-between;
  border:1px solid rgba(83,71,103,0.4);

  color:rgb(83,71,103);
  text-align:center;
  @media (max-width: 768px) {
    width:auto;
  }
  & a {
    color:rgb(83,71,103);
    text-decoration:none;
    text-align:center;
    width: 100%;
    padding: 1rem;
  }
  & button {
    background-color:transparent;
    border:none;
    cursor:pointer;
    width: 30px;
    color:#FFFFFF;
    font-family:'Arial';
    display:inline-flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  } & 
   img {
    width: 15px;
    height: auto;
  } & span {
    margin: 0px 8px;
    font-size: 15px;
    border:1px solid #FFFFFF;
    padding: 5px;
    
  }
`;