import React from 'react';

const DropdownLanguages = ({show}) => 
<div style={{visibility: show ? "visible" : "hidden", backgroundColor: "#FFFFFF", marginTop:"50px", right:"22.5%", borderBottom:"1px solid rgb(83, 71, 103)", borderRight:"1px solid rgb(83, 71, 103)", borderLeft:"1px solid rgb(83, 71, 103)", position: "absolute", height: "auto", width: "100px", zIndex:"1", outline:"none"}}>
  
  <div style={{textAlign:"right", padding:"0px 10px"}}>
    <a href="" style={{textDecoration:"none", color:'rgb(83, 71, 103)', fontSize:"14px"}}>עברית</a>
  </div>
  <div style={{textAlign:"right", padding:"0px 10px"}}>
  <a href="" style={{textDecoration:"none", color:'rgb(83, 71, 103)', fontSize:"14px"}}>English</a>
  </div>
</div>

export default DropdownLanguages;
