import React from 'react';
import {USER} from '@assets/index.js';

import styled from 'styled-components';


const UserButton = ({onClick}) => 
  <UserBtn type="button" data-toggle="collapse" data-target="#collapsingNavbar" onClick={onClick}>
     <img src={USER} height="20" width="20" style={{cursor:"pointer"}}/> 
     <WelcomeText> שלום, עידן</WelcomeText>
  </UserBtn>

export default UserButton;

const UserBtn = styled.button`
background-color: transparent;
position: relative;
width:auto;
display:inline-flex;
direction:rtl;
font-size:15px;
lineHeight:1;
height:50px;
color:#FFFFFF;
align-items:center;
border:none;
cursor:pointer
  @media (max-width: 768px) {
    position:absolute;
    right: 14%;
  }
`;

const WelcomeText = styled.div`
margin:0px 8px;
background-color: transparent;
font-size:15px;
color:#FFFFFF;
display:block;
@media (max-width: 768px) {
  display:none;
}
`;
