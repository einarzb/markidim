
import React from 'react';
import {Table} from 'grommet/components/Table';
import {TableHeader}from 'grommet/components/TableHeader';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';
import {TableBody}from 'grommet/components/TableBody';
import styled from 'styled-components';
import MORE from '../assets/more.svg';

const MainSongsTable = ({showMore}) => {
 
 
  return(
     <Table style={{width:'80%', fontSize:'14px', display:'block', margin:'0px auto'}}> 
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="all">
            </TableCell>
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
            <TableCell scope="col" border="all" style={{textAlign:'center'}}>
              מוזמן ע״י 
            </TableCell>
            <TableCell scope="col" border="all" style={{textAlign:'center'}}>
              סטטוס
            </TableCell>
          </TableRow>
        </TableHeader>
      <TableBody>
        {/** item */}
        <TableRow border="all" style={{backgroundColor:'#f1eaea'}}>
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
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
                ממתין לאישור
          </TableCell>
        </TableRow>
      </TableBody>
     </Table>
  )
}

export default MainSongsTable;

