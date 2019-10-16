
import React from 'react';
import {Table} from 'grommet/components/Table';
import {TableHeader}from 'grommet/components/TableHeader';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';
import {TableBody}from 'grommet/components/TableBody';
import styled from 'styled-components';
import MORE from '../assets/more.svg';

const MainSongsTable = ({}) => {
 
 
  return(
     <Table style={{width:'80%', fontSize:'14px', display:'block', margin:'0px auto'}}> 
        <TableHeader style={{backgroundColor:'rgb(241, 234, 234)', fontWeight:'bold'}}>
          <TableRow>
            <TableCell scope="col" border="bottom">
            </TableCell>
            <TableCell scope="col" border="bottom">
              מס אקום
            </TableCell>
            <TableCell scope="col" border="bottom">
              שנת יצירה
            </TableCell>
            <TableCell scope="col" border="bottom">
            מחברים נוספים  
            </TableCell>
            <TableCell scope="col" border="bottom">
              סוג ריקוד 
            </TableCell>
            <TableCell scope="col" border="bottom">
              שם שיר מקורי 
            </TableCell>
            <TableCell scope="col" border="bottom">
             שם משורר
            </TableCell>
            <TableCell scope="col" border="bottom">
              שם מלחין
            </TableCell>
            <TableCell scope="col" border="bottom">
             שם מבצע
            </TableCell>
            <TableCell scope="col" border="bottom">
              שם ריקוד
            </TableCell>
            <TableCell scope="col" border="bottom" style={{textAlign:'center'}}>
              מוזמן ע״י 
            </TableCell>
            <TableCell scope="col" border="bottom" style={{textAlign:'center'}}>
              סטטוס
            </TableCell>
          </TableRow>
        </TableHeader>
      <TableBody>
        {/** item */}
        <TableRow border="all">
          <TableCell scope="row">
        
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
            90134
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
            1964
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
            עינר גל, עידן חיל
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
              זוגות
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
              אהבתיה
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
              תרצה אתר
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
               יעקב הולנדר
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
               שלמה ארצי
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
               אהבתיה
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
               תמיר שרצר
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center', borderRadius:'5em', backgroundColor:'#4bf14b'}}>
                מאושר
          </TableCell>
        </TableRow>
        {/** item 2 */}
      
        <TableRow>
          <TableCell scope="row">
            
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
            90134
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
            1964
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
            עינר גל, עידן חיל
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
              זוגות
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
              אהבתיה
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
              תרצה אתר
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
               יעקב הולנדר
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
               שלמה ארצי
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
               אהבתיה
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
               תמיר שרצר
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}} style={{textAlign:'center', borderRadius:'5em', backgroundColor:'rgb(241, 206, 82)', padding:'0 1rem'}}>
                ממתין לאישור
          </TableCell>
        </TableRow>
      </TableBody>
     </Table>
  )
}

export default MainSongsTable;

