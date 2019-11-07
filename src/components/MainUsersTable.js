import React from 'react';
import { connect } from 'react-redux';

import { toggleEditAction, toggleDeleteAction, fetchDataAction, toggleDanceListAction } from '@state/actions/index.js';

//STYLING
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableHeader, TableRow, Text } from 'grommet';
import { EDIT, DELETE, DANCELIST } from '@assets/index.js';

//screens
import EditUserScreen from '@screens/EditUserScreen';
import DeleteUserScreen from '@screens/DeleteUserScreen';
import UserDanceListScreen from '@screens/UserDanceListScreen';


class MainUsersTable extends React.Component{
  constructor(){
    super()
    
    const playlistBtn = 
    <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0", cursor:'pointer'}} onClick={this.toggleDanceList}>  
    <img src={DANCELIST} width="15" height="15"/>
  </button>;

    const deleteBtn =
    <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0", cursor:'pointer'}} onClick={this.toggleDelete}>  
      <img src={DELETE} width="15" height="15"/>
    </button>;
  
    const editBtn = <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0",cursor:'pointer'}} onClick={this.toggleEdit}> <img src={EDIT} width="15" height="15"/></button>;
    
    this.state = {
     expandedRows : [],
      columns: [
        {
          property: 'userDanceList',
          label: '',
          align: 'center',
          onClick:this.toggleDanceList,
          hidden:false,
          width:'0px',
          display:'none'
        },
        {
          property: 'deleteUser',
          label: '',
          align: 'center',
          onClick:this.toggleDelete,
          hidden:false,
          width:'0px',
          display:'none'
        },
        {
          property: 'editUser',
          label: '',
          align: 'center',
          onClick:this.toggleEditUser,
          hidden:false,
          width:'0px',
          display:'none'
        },
        {
          property: 'annualOrdersNum',
          label: 'מקס׳ הזמנות שנתי',
          align: 'center',
          hidden:false,
        },
        {
          property: 'maxNumOrders',
          label: 'מקס׳ הזמנות במקביל',
          align: 'center',
          hidden:false,
          width: '98px'

        },
        {
          property: 'address',
          label: 'כתובת',
          align: 'center',
          hidden:false,
          width: '60px'

        },
        {
          property: 'phoneNum',
          label: 'טלפון נוסף',
          align: 'center',
          hidden:false,
          width: '100px'
        },
        {
          property: 'cellular',
          label: 'מס׳ סלולרי',
          align: 'center',
          hidden:false,
          width: '54px'

        },
        {
          property: 'id',
          label: 'תעודת זהות',
          align: 'center',
          hidden:false,
          width: '101px'
        },
        {
          property: 'memberId',
          label: 'מס׳ חבר',
          align: 'center',
          hidden:false,
          width: '128px'


        },
        {
          hidden:false,
          property: 'email',
          label: 'אימייל',
          align: 'center',
          width: '74px'

        },
        {
          hidden:false,
          property: 'lastName',
          label: 'שם משפחה',
          align: 'center',
          width: 'auto'
        },
        {
          hidden:false,
          property: 'firstName',
          label: 'שם פרטי',
          dataScope: 'column',
          align: 'center',
          width: 'auto'
        }
      ],
 
      usersData: [
        {
          id: 1, firstName: 'משה', lastName:'שרון' , email:'sharon@gmail.com',memberId:'432423', id:'043764382',cellular:'054-7643437', phoneNum:'04-3786298', address:'מגדיאל 2, רמת גן', maxNumOrders:'3', annualOrdersNum:'10', editUser:editBtn, deleteUser:deleteBtn, userDanceList:playlistBtn
        },
        {
          id: 2, firstName: 'משה', lastName:'שרון' , email:'sharon@gmail.com',memberId:'432423', id:'043764382',cellular:'054-7643437', phoneNum:'04-3786298', address:'מגדיאל 2, רמת גן', maxNumOrders:'3', annualOrdersNum:'10', editUser:editBtn, deleteUser:deleteBtn, userDanceList:playlistBtn
        },
        {
          id: 3, firstName: 'משה', lastName:'שרון' , email:'sharon@gmail.com',memberId:'432423', id:'043764382',cellular:'054-7643437', phoneNum:'04-3786298', address:'מגדיאל 2, רמת גן', maxNumOrders:'3', annualOrdersNum:'10', editUser:editBtn, deleteUser:deleteBtn, userDanceList:playlistBtn
        },
      ]
    }
  }




  componentDidMount(){
    this.refreshData();
  }

  refreshData = () => {

  }

  //TODO: make a generic function 
  toggleDelete = () => {
    let { toggleDeleteRedux } = this.props; 
    let deleteView = !this.props.deleteView; 
    toggleDeleteRedux(deleteView);
  }
  
  toggleEdit = () => {
    let { toggleEditRedux } = this.props; 
    let editUserView = !this.props.editUserView; 
    toggleEditRedux(editUserView);
  }
  
  toggleDanceList = () => {
    let { toggleDanceListRedux } = this.props; 
    let danceListView = !this.props.danceListView; 
    toggleDanceListRedux(danceListView);
  }



  render() {

    let {editUserView, deleteView, danceListView} = this.props;
    let {columns, usersData} = this.state;
     return(
       <div>
         { 
        editUserView ? <EditUserScreen toggle={this.toggleEdit} /> :
        deleteView ? <DeleteUserScreen toggle={this.toggleDelete}/> : 
        danceListView ? <UserDanceListScreen toggle={this.toggleDanceList}/> :

      <MainTableWrapper>
         
           
           <Table responsiveBreakpoint="small" style={{margin:'3rem auto', width:'100%'}}>
              <TableHeader>
                <TableRow style={{backgroundColor:'rgb(152,135,152)'}} align="end" >
                  {columns.map(c => (
                    <TableCell key={c.property} scope='col' border='bottom' align={c.align} style={{ fontSize:'10px'}}>
                      <Text style={{fontSize:'14px', fontWeight:'bold', color:'#FFFFFF'}}>{c.label}</Text>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody style={{ display: 'table-row-group', verticalAlign: 'middle', borderColor: 'inherit'}}>             
                 {usersData.map((user,i) => (  
                  [
                    <TableRow scope="column" style={{backgroundColor:'#FFFFFF', fontSize:'12px'}} border='bottom' key={user.id}>
                      {columns.map(c => (
                          <TableCell key={c.property} scope={c.dataScope} align={c.align} border='bottom'>
                            <Text style={{fontSize:'14px'}}>
                              {user[c.property]}
                            </Text>
                          </TableCell> 
                          
                        ))}
                    </TableRow>,
  
                  ]
              ))}
              </TableBody>
            </Table>
   
      </MainTableWrapper>
                }
                </div>

    )
    
  }
}


const mapStateToProps = (state) => {
  let props = {
    editUserView:state.usersReducer.editUserView,
    approveView:state.screensReducer.approveView,
    deleteView: state.usersReducer.deleteView,
    danceListView:state.usersReducer.danceListView,
    danceData:state.dancesReducer
    }
    
    console.log('----im props view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  sendDataToRedux:(res) => dispatch(fetchDataAction(res)),
  toggleEditRedux: (usersReducer) => dispatch(toggleEditAction(usersReducer)),
  toggleDeleteRedux: (deleteView) => dispatch(toggleDeleteAction(deleteView)),
  toggleDanceListRedux:(danceListView) => dispatch(toggleDanceListAction(danceListView))
  

});




export default connect (
  mapStateToProps,
mapDispatchToProps)
(MainUsersTable);


const MainTableWrapper = styled.div`
  overflow-x: auto;
  width: 90%;
  display: block;
  margin: 0px auto;
`;

