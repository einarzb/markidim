import React from 'react';
import styled from 'styled-components';

const DropdownLogin = ({show}) => 
<DropDown style={{visibility: show ? "visible" : "hidden"}}>

  
  <div style={{textAlign:"right", padding:"0px 10px"}}>
    <a href="" style={{textDecoration:"none", color:'rgb(83, 71, 103)', fontSize:"14px"}}>פרופיל</a>
  </div>
  <div style={{textAlign:"right", padding:"0px 10px"}}>
  <a href="" style={{textDecoration:"none", color:'rgb(83, 71, 103)', fontSize:"14px"}}>התנתק</a>
  </div>
</DropDown>

export default DropdownLogin;

const DropDown = styled.div`
background-color: #FFFFFF;
margin-top:50px;
right:7.5%; 
border-bottom:1px solid rgb(83, 71, 103);
border-right:1px solid rgb(83, 71, 103);
border-left:1px solid rgb(83, 71, 103);
position: absolute;
height: auto;
width: 110px;
z-index:1;
outline:none
@media (max-width: 768px) {
  right: 15%;
}

`;