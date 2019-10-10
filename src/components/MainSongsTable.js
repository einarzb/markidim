
import React from 'react';
import {Table} from 'grommet/components/Table';
import {TableHeader}from 'grommet/components/TableHeader';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';
import {TableBody}from 'grommet/components/TableBody';

const MainSongsTable = ({}) => {

  return(
     <Table style={{width:'85%', display:'block', margin:'0px auto'}}> 
        <TableHeader>
          <TableRow>
           
          
         
         
          
            <TableCell scope="col" border="all">
              מס אקום
            </TableCell>
            <TableCell scope="col" border="all">
              שנת יצירה
            </TableCell>
            <TableCell scope="col" border="all">
            מחברים נוספים  
            </TableCell>
            <TableCell scope="col" border="all">
              סוג ריקוד 
            </TableCell>
            <TableCell scope="col" border="all">
              שם שיר מקורי 
            </TableCell>
            <TableCell scope="col" border="all">
             שם משורר
            </TableCell>
            <TableCell scope="col" border="all">
              שם מלחין
            </TableCell>
            <TableCell scope="col" border="all">
             שם מבצע
            </TableCell>
            <TableCell scope="col" border="all">
              שם ריקוד
            </TableCell>
            <TableCell scope="col" border="all">
              מוזמן ע״י 
            </TableCell>
            <TableCell scope="col" border="all">
              סטטוס
            </TableCell>
          </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">
            <strong>Eric</strong>
          </TableCell>
          <TableCell>Coconut</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Chris</strong>
          </TableCell>
          <TableCell>Watermelon</TableCell>
        </TableRow>
      </TableBody>
     </Table>
  )
}

export default MainSongsTable;