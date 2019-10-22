import React from 'react';
import {MORE} from '@assets/index.js';

const ExpandingButton = ({onClick}) => 
  <button style={{backgroundColor: 'transparent', position: "relative", width:"40px", height:"42px", fontSize:'15px', color:"#FFFFFF", alignItems:"center", border:"none", cursor:"pointer"}}type="button" data-toggle="collapse" data-target="#collapsingNavbar" onClick={onClick}>
     <img src={MORE} height="20" width="20" style={{cursor:"pointer"}}/> 

  </button>

export default ExpandingButton;
