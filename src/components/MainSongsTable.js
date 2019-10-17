import React from 'react';

//STYLING
import {Table} from 'grommet/components/Table';
import {TableHeader}from 'grommet/components/TableHeader';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';
import {TableBody}from 'grommet/components/TableBody';

import EditSongScreen from '@screens/EditSongScreen';


//data2 & mockDataCells2 is temp and will be deleted
const MainSongsTable = ({cellsArr, data, btns, data2, editToggle}) => {       
  let tableHeaderCells = cellsArr.map(function(cell, i) {
    return <TableCell key={i} scope="col" border="bottom" style={{textAlign: 'center', alignItems: 'center', whiteSpace: 'nowrap'}}>{cell.label}</TableCell>
  })

  let mockDataCells = data.map(function(song, i) {
    return <TableCell key={i} scope="row" border="bottom" onClick={song.onClick} style={{textAlign:'center', direction:'rtl', whiteSpace: song.whiteSpace, borderRadius:song.borderRadius, backgroundColor:song.backgroundColor}}>{song.label} 
    </TableCell>
  })

  let mockDataCells2 = data2.map(function(song, i) {
    return <TableCell key={i} scope="row" border="bottom" onClick={song.onClick} style={{width:'auto',textAlign:'center', direction:'rtl', whiteSpace: song.whiteSpace, borderRadius:song.borderRadius, padding:song.padding,backgroundColor:song.backgroundColor}}>{song.label} 
    </TableCell>
  })

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
     <Table style={{ width:'86%', fontSize:'13px', margin:'0px auto'}}> 
        <TableHeader style={{backgroundColor:'rgb(247, 239, 239)', fontWeight:'bold'}}>
          <TableRow>{tableHeaderCells}</TableRow>
        </TableHeader>
        <TableBody>
          <TableRow style={{backgroundColor:'white',  whiteSpace:'nowrap'}} border="all"> {mockDataCells}</TableRow>
          <TableRow>
            <TableCell scope="row" border="bottom">
              {editOrapproveBtns} 
            </TableCell>
            {mockDataCells2}
          </TableRow>
          <TableRow style={{backgroundColor:'white'}} border="all"> {mockDataCells}</TableRow>
        </TableBody>
     </Table>
         }
     </div>
  )
}

export default MainSongsTable;

