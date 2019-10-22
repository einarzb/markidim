import React from 'react';
import {USER} from '@assets/index.js';

const UserButton = ({onClick}) => 
  <button style={{backgroundColor: 'transparent', position: "relative", width:"auto", display:"inline-flex",direction:"rtl", fontSize:"14px", height:"40px", color:"#FFFFFF", alignItems:"center", border:"none", cursor:"pointer"}}type="button" data-toggle="collapse" data-target="#collapsingNavbar" onClick={onClick}>
     <img src={USER} height="20" width="20" style={{cursor:"pointer"}}/> 
     <span style={{margin:"0px 8px"}}> שלום, עידן</span>
  </button>

export default UserButton;
