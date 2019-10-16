
import React from 'react';
import {Table} from 'grommet/components/Table';
import {TableHeader}from 'grommet/components/TableHeader';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';
import {TableBody}from 'grommet/components/TableBody';
import styled from 'styled-components';
import {APPROVE, EDIT} from '@assets/index.js';
import {ButtonsFlexer} from '@appearance/styled.js';

const MainSongsTable = ({}) => {
 
 
  return(
     <Table style={{width:'86%', fontSize:'14px', display:'block', margin:'0px auto'}}> 
        <TableHeader style={{backgroundColor:'rgb(247, 239, 239)', fontWeight:'bold'}}>
          {/**TODO: build it as an array with map that will produce as many as needed */}
          <TableRow>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center', alignItems: 'center'}}>
            </TableCell>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center',
    alignItems: 'center',  overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
              מס אקום
            </TableCell>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center',
    alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
              שנת יצירה
            </TableCell>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center',
    alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
            מחברים נוספים  
            </TableCell>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center',
    alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
              סוג ריקוד 
            </TableCell>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center',
    alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
              שם שיר מקורי 
            </TableCell>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center',
    alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'
  }}>
             שם משורר
            </TableCell>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center',
    alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
              שם מלחין
            </TableCell>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center',
    alignItems: 'center',  overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
             שם מבצע
            </TableCell>
            <TableCell scope="col" border="bottom" style={{ textAlign: 'center',
    alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
              שם ריקוד
            </TableCell>
            <TableCell scope="col" border="bottom" style={{textAlign:'center',  overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
              מוזמן ע״י 
            </TableCell>
            <TableCell scope="col" border="bottom" style={{textAlign:'center', overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>
              סטטוס
            </TableCell>
          </TableRow>
        </TableHeader>
      <TableBody>
        {/** item */}
        <TableRow border="all">
          <TableCell scope="row" border="bottom">
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center', lineHeight: '1'}}>
            90134
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center',  lineHeight: '1'}}>
            1964
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center', direction:'rtl', whiteSpace: 'nowrap'}}>
            עינר גל, עידן חיל
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
              זוגות
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center', direction:'rtl',  whiteSpace: 'nowrap'}}>
             פתאום עכשיו, פתאום היום.
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center',  whiteSpace: 'nowrap'}}>
              תרצה אתר
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center',  whiteSpace: 'nowrap'}}>
               יעקב הולנדר
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center',  whiteSpace: 'nowrap'}}>
               שלמה ארצי
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}}>
               אהבתיה
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center',  whiteSpace: 'nowrap'}}>
               תמיר שרצר
          </TableCell>
          <TableCell border="bottom" scope="row" style={{textAlign:'center', borderRadius:'5em', backgroundColor:'#4bf14b'}}>
                מאושר
          </TableCell>
        </TableRow>
        {/** item 2 */}
      
        <TableRow>
          <TableCell scope="row" border="bottom">
             <ButtonsFlexer style={{width:'38px', margin:'0'}}>
                <img src={APPROVE} width="15" height="15"/>
                <img src={EDIT} width="15" height="15"/>
             </ButtonsFlexer>
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
          <TableCell border="bottom" scope="row" style={{textAlign:'center'}} style={{textAlign:'center', borderRadius:'5em', backgroundColor:'rgb(241, 206, 82)', padding:'0.5rem', 
    width: '130px',
    lineHeight: '0.8'}}>
                ממתין לאישור
          </TableCell>
        </TableRow>
      </TableBody>
     </Table>
  )
}

export default MainSongsTable;

