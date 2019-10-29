import React from 'react';
import { connect } from 'react-redux';

import { toggleEditAction, toggleApproveAction } from '@state/actions/index.js';

//STYLING
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableHeader, TableRow, Text } from 'grommet';
import { APPROVE, EDIT } from '@assets/index.js';

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
  
    const editBtn = <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0",cursor:'pointer'}} onClick={this.toggleEdit}> <img src={EDIT} width="15" height="15"/></button>;
    
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
          property: 'orderDate',
          label: 'תאריך הזמנה',
          align: 'center'
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
          dataScope: 'column',
          align: 'center'
        }
      ],
      usersData: [
        {
          id: 1, owner: 'עינר גל', status:<Approved>מאושר</Approved> , danceName:'אהבתיה',performer:'שלמה ארצי', composer:'יעקב הולנדר',writer:'תרצה אתר', originalSongName:'אהבתיה', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', orderDate:'11/2019'
        },
        {
          id: 2, owner: 'תמיר שרצר', status: <NotApproved>לא מאושר</NotApproved> , danceName:'אהבתיה',performer:'שלמה ארצי',composer:'יעקב הולנדר', writer:'תרצה אתר', originalSongName:'אהבתיה', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', orderDate:'11/2019', editSong: editBtn, approveSong:approveBtn
        },
        {
          id: 3, owner: 'עידן חיל', status:<Approved>מאושר</Approved> , danceName:'אהבתיה',performer:'שלמה ארצי', composer:'יעקב הולנדר', writer:'תרצה אתר', originalSongName:'אהבתיה', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', orderDate:'11/2019'
        }
      ],
      expandedRowVisible:false,      
    }
  }

  //TODO: make a generic function 
  toggleApprove = () => {
    let { toggleApproveRedux } = this.props; 
    let approveView = !this.props.approveView; 
    toggleApproveRedux(approveView);
  }
  
  toggleEdit = () => {
    let { toggleEditRedux } = this.props; 
    let editView = !this.props.editView; 
    toggleEditRedux(editView);
  }
  
  expandRow = (rowIndex) => {
    this.setState({
      expandedRowVisible: rowIndex
    })  
  }



  render() {
    let {columns, usersData, approveFlag, expandedRowVisible} = this.state
    let {editView, approveView} = this.props;
  return(
    <div>
        { 
          editView ? <EditSongScreen toggle={this.toggleEdit} /> :
          approveView ? <ConfirmSongScreen toggle={this.toggleApprove}/> : 

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
            <TableBody style={{ display: 'table-row-group',
  verticalAlign: 'middle',
  borderColor: 'inherit'}}>             
               {usersData.map((user,i) => (  
                [
                  <TableRow onClick={() => this.expandRow(i)} scope="column" style={{cursor:'pointer', backgroundColor:'#FFFFFF', fontSize:'12px'}} border='bottom' key={user.id}>
                    {columns.map(c => (
                        <TableCell key={c.property} scope={c.dataScope} align={c.align} border='bottom'>
                          <Text style={{fontSize:'14px'}}>
                            {user[c.property]}
                          </Text>
                        </TableCell> 
                        
                      ))}
                  </TableRow>
                ]
            ))}
            </TableBody>
          </Table>
        }

     </div>
  )
}
}

{/**
https://www.googleapis.com/youtube/v3/search?fields=items%2Fid,items%2Fsnippet%2Ftitle,items%2Fsnippet%2Fdescription,items%2Fsnippet%2Fthumbnails%2Fdefault,items%2Fsnippet%2FchannelTitle,nextPageToken,prevPageToken&key=AIzaSyBahF7YmvpZiMBziQXy21Uhe44URp2yPHE&maxResults=10&part=id,snippet&q=%D7%A9%D7%91%D7%98+%D7%90%D7%97%D7%99%D7%9D+%D7%95%D7%90%D7%97%D7%99%D7%95%D7%AA+%D7%90%D7%95%D7%9E%D7%A0%D7%99+%D7%99%D7%A9%D7%A8%D7%90%D7%9C&type=video&videoSyndicated=true
*/}
   {/** 
                  <ExpandedRow show={i === expandedRowVisible}> </ExpandedRow>
                  */}
                     {/** 
                  <ExpandedRow show={i === expandedRowVisible}> </ExpandedRow>
                  */}


const mapStateToProps = (state) => {
  let props = {
    editView:state.dancesReducer.editView,
    approveView:state.dancesReducer.approveView
    }
    
    console.log('----im props view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  toggleEditRedux: (editView) => dispatch(toggleEditAction(editView)),
  toggleApproveRedux: (approveView) => dispatch(toggleApproveAction(approveView))
});




export default connect (
  mapStateToProps,
mapDispatchToProps)
(MainSongsTable);


 const NotApproved = styled.div`
  border-radius: 5em;
  background-color: rgb(241, 206, 82);
  width: 93px;
  display:block;
`;

 const Approved = styled(NotApproved)`
  background-color: rgb(75, 241, 75);
`;


