import React from 'react';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';
import styled from 'styled-components';

const ExpandedRow = ({show}) => 
<TableRow style={{visibility: show ? "visible" : "hidden", backgroundColor: "#FFFFFF", position: "relative", height: "auto", width: "100%", display:show ? "inline-flex" : "none", flexDirection:"row-reverse"}}>
  <PartCol>
      <TableCell>
        <strong>מחברים נוספים: </strong> 
        עינר גל, עידן חיל
      </TableCell>
      <TableCell>
        <strong> שם יצירה מקורי: </strong> 
        פתאום עכשיו פתאום היום
      </TableCell>
      <TableCell>
        <strong> מספר יצירה מקורי אקו״ם: </strong>
        9038938
      </TableCell>
    </PartCol>

    <PartCol>
    <TableCell>
        <strong>תאריך הזמנה: </strong>
          15/11/2019
    </TableCell>
    <TableCell>
        <strong>תאריך הפיכה לריקוד קיים: </strong>
          21/06/2019
    </TableCell>
 
      <TableCell>
        <strong> 
            <a href="https://shironet.mako.co.il/artist?type=lyrics&lang=1&prfid=975&wrkid=73" target="_blank">מילות השיר</a>    
      </strong> 
      <span> |  </span>
      <strong> 
            <a href="https://shironet.mako.co.il/artist?type=lyrics&lang=1&prfid=975&wrkid=73" target="_blank">סרטון ריקוד</a>    
      </strong> 
      </TableCell>
    </PartCol>
    <PartCol>
      <TableCell>
          <iframe src='https://www.youtube.com/embed/19qoWmBJVRc'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
          />
      </TableCell>
    </PartCol>
   
</TableRow>

export default ExpandedRow;

export const PartCol = styled.div`
  display:inline-flex;
  flex-direction:column;
  align-items: flex-end;
  & div {
    direction:rtl;
    height:80px;

  }
`;