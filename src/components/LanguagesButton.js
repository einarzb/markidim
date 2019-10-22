import React from 'react';
import {GLOBE} from '@assets/index.js';

const LanguagesButton = ({onClick}) => 
  <button style={{backgroundColor: 'transparent', position: "relative", width:"40px", height:"42px", fontSize:'15px', color:"#FFFFFF", alignItems:"center", border:"none", cursor:"pointer"}}type="button" data-toggle="collapse" data-target="#collapsingNavbar" onClick={onClick}>
     <img src={GLOBE} height="20" width="20" style={{cursor:"pointer"}}/> 

  </button>

export default LanguagesButton;
