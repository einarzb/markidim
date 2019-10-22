import React from 'react';
import {GLOBE} from '@assets/index.js';

const NavButton = ({onClick}) => 
  <button style={{backgroundColor: 'transparent', position: "relative", width:"100px", height:"42px", fontSize:'15px', color:"#FFFFFF", alignItems:"center", border:"none", cursor:"pointer"}}type="button" data-toggle="collapse" data-target="#collapsingNavbar" onClick={onClick}>
     <img src={GLOBE} height="20" width="20" style={{cursor:"pointer"}}/> 
     <span style={{border:"1px solid #FFFFFF",padding:"5px 10px", margin:"0px 8px"}}>עב</span>
  </button>

export default NavButton;
