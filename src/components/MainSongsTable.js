import React from 'react';

//STYLING
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableHeader, TableRow, Text } from 'grommet';
import {CREDIT_CARD, PLUS, APPROVE, EDIT} from '@assets/index.js';

//screens
import EditSongScreen from '@screens/EditSongScreen';
import ConfirmSongScreen from '@screens/ConfirmSongScreen';

//components
import ExpandedRow from '@components/ExpandedRow';







class MainSongsTable extends React.Component{
  constructor(){
    super()
    const approveBtn =
    <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0", cursor:'pointer'}} onClick={this.toggleApprove}>  
      <img src={APPROVE} width="15" height="15"/>
    </button>;
  
  const editBtn = 
    <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0",cursor:'pointer'}} onClick={this.toggleEdit}>  
         <img src={EDIT} width="15" height="15"/>
    </button>;
    this.state = {
      columns: [
        {
          property: 'approveSong',
          label: '',
          align: 'center',
          onClick:this.toggleApprove
        },
        {
          property: 'editSong',
          label: '',
          align: 'center',
          onClick:this.toggleEdit

        },
        {
          property: 'acumNum',
          label: 'מס׳ אקו״ם',
          align: 'center'
        },
        {
          property: 'coChoreographers',
          label: 'מחברים נוספים',
          align: 'center'
        },
        {
          property: 'danceType',
          label: 'סוג ריקוד',
          align: 'center'
        },
        {
          property: 'originalSongName',
          label: 'שם שיר מקורי',
          align: 'center'
        },
        {
          property: 'writer',
          label: 'שם משורר',
          align: 'center'
        },
        {
          property: 'composer',
          label: 'שם מלחין',
          align: 'center'
        },
        {
          property: 'performer',
          label: 'שם מבצע',
          align: 'center'
        },
        {
          property: 'danceName',
          label: 'שם ריקוד',
          align: 'center'
        },
        {
          property: 'owner',
          label: 'מוזמן ע״י',
          align: 'center'
      
        },
        {
          property: 'status',
          label: 'סטטוס',
          dataScope: 'row',
          align: 'center'
        }
      ],
      usersData: [
        {
          id: 1, owner: 'עינר גל', status:<Approved>מאושר</Approved> , danceName:'אהבתיה',performer:'שלמה ארצי', composer:'יעקב הולנדר',writer:'תרצה אתר', originalSongName:'אהבתיה', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568'    
        },
        {
          id: 2, owner: 'תמיר שרצר', status: <NotApproved>לא מאושר</NotApproved> , danceName:'אהבתיה',performer:'שלמה ארצי',composer:'יעקב הולנדר', writer:'תרצה אתר', originalSongName:'אהבתיה', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', editSong: editBtn, approveSong:approveBtn
        },
        {
          id: 3, owner: 'עידן חיל', status:<Approved>מאושר</Approved> , danceName:'אהבתיה',performer:'שלמה ארצי', composer:'יעקב הולנדר', writer:'תרצה אתר', originalSongName:'אהבתיה', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568'
        }
      ],
      approveFlag: false,
      editFlag: false
      
    }
  }
  toggleApprove = () => {
    this.setState({approveFlag:true});
  }
  
  toggleEdit = () => {
    this.setState({editFlag:true});
  }
  

  render() {
    let {editFlag, columns, usersData, approveFlag} = this.state

  return(
    <div>
      { 
      editFlag ? <EditSongScreen toggle={this.toggleEdit} /> :
      approveFlag ? <ConfirmSongScreen toggle={this.toggleApprove}/> : 
      <Table style={{margin:'1rem auto'}}>
        <TableHeader>
          <TableRow style={{backgroundColor:'rgb(152,135,152)'}} align="end" >
            {columns.map(c => (
              <TableCell key={c.property} scope='col' border='bottom' align={c.align} style={{ fontSize:'10px'}}>
                <Text style={{fontSize:'14px', fontWeight:'bold', color:'#FFFFFF'}}>{c.label}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersData.map(datum => (
            <TableRow style={{backgroundColor:'#FFFFFF', fontSize:'12px'}} border='bottom' key={datum.id}>
              {columns.map(c => (
                <TableCell key={c.property} scope={c.dataScope} align={c.align} border='bottom'>
                  <Text style={{fontSize:'14px'}}>
                    {datum[c.property]}
                  </Text>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
    </Table>

         }
     </div>
  )
}

}

export default MainSongsTable;

export const RowWrapper = styled.div`
  display:inline-flex;
  flex-direction:column;
  position:relative;
`;

export const NotApproved = styled.div`
  border-radius: 5em;
  background-color: rgb(241, 206, 82);
  width: 93px;
  display:block;
`;

export const Approved = styled(NotApproved)`
  background-color: rgb(75, 241, 75);
`;

