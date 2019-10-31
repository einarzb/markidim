import React from 'react';
import {TableRow}from 'grommet/components/TableRow';
import {TableCell}from 'grommet/components/TableCell';
import styled from 'styled-components';


const ExpandedRow = ({expandedData, show}) => 




<TableRow style={{visibility: show ? "visible" : "hidden", backgroundColor: "rgba(152, 135, 152, 0.2)", position: "relative", height: "auto", width: "90%", display:show ? "inline-flex" : "none", flexDirection:"row-reverse", borderBottom:'1px solid grey'}}>
    <PartCol>
      <TableCell>
        <strong> שם יצירה מקורי: </strong> 
        {expandedData[1]}
      </TableCell>
      <TableCell>
        <strong> מספר יצירה מקורי אקו״ם: </strong>
        {expandedData[2]}
      </TableCell>
      <TableCell>
        <strong>תאריך הזמנה: </strong>
         {expandedData[3]}
      </TableCell>
      <TableCell>
            <strong>
            תאריך הפיכה לריקוד קיים:
            </strong>
            {expandedData[0]}
      </TableCell>
    </PartCol>
    <PartCol>
      <TableCell>
          <strong> 
              <a href={expandedData[5]} target="_blank">מילות השיר</a>    
        </strong> 
      </TableCell>
      <TableCell>
      <strong> 
            <a href={expandedData[6]} target="_blank">סרטון ריקוד</a>    
      </strong> 
      </TableCell>
      <TableCell>
          <iframe src={expandedData[4]}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
          />
      </TableCell>
    </PartCol>
    <PartCol>
    <TableCell> כל מידע אחר</TableCell>
    </PartCol>
   
</TableRow>

export default ExpandedRow;

export const PartCol = styled.div`
  display:inline-flex;
  flex-direction:column;
  width: 30%;
  direction:rtl;
  text-align:right;
  font-size: 1rem;

  &:first-child {
    direction:rtl;
    height:80px;
    text-align:right;
  }
`;

       {/** 
                 <ExpandedRow show={i === expandedRowVisible}></ExpandedRow>
                 */}