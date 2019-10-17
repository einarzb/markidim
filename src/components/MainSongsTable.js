
import React from 'react';
import {Table} from 'grommet/components/Table';
import {TableHeader}from 'grommet/components/TableHeader';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';
import {TableBody}from 'grommet/components/TableBody';
import styled from 'styled-components';
import {APPROVE, EDIT} from '@assets/index.js';
import {ButtonsFlexer, SongsTable} from '@appearance/styled.js';

const MainSongsTable = ({cellsArr, data}) => {
     
  let tableHeaderCells = cellsArr.map(function(cell, i) {
    return <TableCell key={i} scope="col" border="bottom" style={{textAlign: 'center', alignItems: 'center',  overflow: 'hidden', whiteSpace: 'nowrap', lineHeight: '1.5em', height: '2em'}}>{cell.label}</TableCell>
  })

  let mockDataCells = data.map(function(song, i) {
    return <TableCell key={i} scope="row" border="bottom" style={{textAlign:'center', direction:'rtl', whiteSpace: 'nowrap', borderRadius:song.borderRadius, backgroundColor:song.backgroundColor}}>{song.label}</TableCell>
  })
 
  return(
    <SongsTable>

     <Table style={{ width:'86%', fontSize:'14px', margin:'0px auto'}}> 
        <TableHeader style={{backgroundColor:'rgb(247, 239, 239)', fontWeight:'bold'}}>
          <TableRow>
             {tableHeaderCells}
          </TableRow>
        </TableHeader>

      <TableBody>
         <TableRow border="all"> 
            {mockDataCells}
        </TableRow>
       
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
   </SongsTable>

  )
}

export default MainSongsTable;

