import React from 'react';

//STYLING
import styled from 'styled-components';
import {Table} from 'grommet/components/Table';
import {TableHeader}from 'grommet/components/TableHeader';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';
import {TableBody}from 'grommet/components/TableBody';

//screen
import EditSongScreen from '@screens/EditSongScreen';

//components
import ExpandedRow from '@components/ExpandedRow';

//data2 & mockDataCells2 is temp and will be deleted
const MainSongsTable = ({cellsArr, data, btns, editToggle, expanderFlag, data2}) => {       
  
  let tableHeaderCells = cellsArr.map(function(cell, i) {
    return <TableCell key={i} scope="col" border="bottom">{cell.label}</TableCell>
  })

  let mockDataCells = data.map(function(song, i) {
    return <TableCell key={i} scope="row" border="bottom" onClick={song.onClick} style={{textAlign:'center', direction:'rtl', whiteSpace: song.whiteSpace, borderRadius:song.borderRadius, backgroundColor:song.backgroundColor, width:song.width}}>{song.label} 
    </TableCell>
  })
  let mockDataCells2 = data2.map(function(song, i) {
    return <TableCell key={i} scope="row" border="bottom" onClick={song.onClick} style={{width:'auto',textAlign:'center', direction:'rtl', whiteSpace: song.whiteSpace, borderRadius:song.borderRadius, width:song.width,backgroundColor:song.backgroundColor}}>{song.label} 
    </TableCell>
  })
  //delete
  let editOrapproveBtns = btns.map(function(btn, i){
    return  <TableCell key={i} scope="col" >              
    <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0"}} onClick={btn.onClick}>
        <img src={btn.icon} width="15" height="15"/>
    </button>
    </TableCell>
  })

   
  return(
    <div>
      { editToggle 
      ?
     <EditSongScreen /> 
      :
     <Table style={{ tableLayout: 'fixed', width:'81%', fontSize:'13px', margin:'0px auto', borderCollapse: 'collapse', borderSpacing: '0' }}> 
       
        <TableHeader style={{backgroundColor:'rgb(247, 239, 239)', fontWeight:'bold', fontSize:'14px', margin: '0 1rem', display:'inline-block'}}>
          <TableRow style={{ width:'100px'}}>{tableHeaderCells}</TableRow>
        </TableHeader>

        <TableBody>

          <RowWrapper>
            <TableRow style={{backgroundColor:'white',  whiteSpace:'nowrap'}} border="all"> 
                <TableCell scope="row" border="bottom" size="large">
                  {editOrapproveBtns} 
                </TableCell>
                {mockDataCells}
            </TableRow>
            <ExpandedRow show={expanderFlag}/> 
           
          </RowWrapper>
        
          <RowWrapper>
            <TableRow style={{backgroundColor:'white',  whiteSpace:'nowrap'}} border="all">
              <TableCell scope="row" border="bottom">
                {editOrapproveBtns} 
              </TableCell>
              {mockDataCells2}
            </TableRow>
            <ExpandedRow show={expanderFlag}/> 
          </RowWrapper>
          {/** 
          <TableRow>
            <TableCell scope="row" border="bottom">
              {editOrapproveBtns} 
            </TableCell>
            {mockDataCells2}
          </TableRow>
       */}
      
        </TableBody>
     </Table>
         }
     </div>
  )
}

export default MainSongsTable;

export const RowWrapper = styled.div`
  display:inline-flex;
  flex-direction:column;
  position:relative;
`;
