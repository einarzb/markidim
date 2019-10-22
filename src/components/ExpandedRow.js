import React from 'react';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';

const ExpandedRow = ({show}) => 
<TableRow style={{visibility: show ? "visible" : "hidden", backgroundColor: "#FFFFFF", position: "relative", height: "70px", width: "100%", display:"inline-flex;", flexDirection:"row-reverse"}}>
    <TableCell>
      <strong>מחברים נוספים:</strong> 
      עינר גל, עידן חיל
    </TableCell>
    <TableCell>
      <strong>מחברים נוספים:</strong> 
      עינר גל, עידן חיל
    </TableCell>
</TableRow>


export default ExpandedRow;
