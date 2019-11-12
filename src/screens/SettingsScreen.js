import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import styled from 'styled-components';

import UsersLog from '@screens/UsersLog';
import EmailEditor from '@screens/EmailEditor';
import EmailSettings from '@screens/EmailSettings';

class SettingsScreen extends React.Component{ 
  render(){
    return(
      <div style={{width:'96%', marginTop:'1rem', backgroundColor: '#ebebeb'}}>
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
                      <Link to="/emaileditor">עורך הפצת אימיילים</Link>
                    </Tab>
                </NavUl>
            </nav>
          </div>
            <Route path="/userslog" component={UsersLog}></Route>
            <Route path="/emailsettings" component={EmailSettings}></Route>
            <Route path="/emaileditor" component={EmailEditor}></Route>
        </Router>
      </Bar>
    </div>

    )
  }
}

export default SettingsScreen;
export const Bar = styled.div`
background-color: #FFFFFF;
max-height: 55px;
width: 100%;
float: right;
  `;

const NavUl = styled.ul`
  padding:5px;
  font-size:15px; 
  margin-left:1rem;
  flex-direction:row-reverse;
  display:inline-flex;
  align-items:center;

    @media (max-width: 768px) {
      margin-left: 0;
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
    width:40px;
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