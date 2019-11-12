import React, { Component } from 'react';
import { connect } from 'react-redux';
import { APPROVE, EDIT } from '@assets/index.js';
import { Table, TableBody, TableCell, TableHeader, TableRow, Text } from 'grommet';
import { toggleDanceListAction } from '@state/actions/index.js';
import ExpandedRow from '@components/ExpandedRow';

// STYLING
import styled from 'styled-components';

class UserDanceListScreen extends React.Component{
  constructor(){
    super()
  const approveBtn =
  <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0", cursor:'pointer'}} onClick={this.toggleApprove}>  
    <img src={APPROVE} width="15" height="15"/>
  </button>;

  const editBtn = <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0",cursor:'pointer'}} onClick={this.toggleEdit}> <img src={EDIT} width="15" height="15"/></button>;

    this.state = {
      expandedRowVisible:false,      
      userDances:'משה שרון',
      usersData: [
        {
          id: 1, owner: 'משה שרון', status:<Approved>מאושר</Approved> , danceName:'אהבתיה',performer:'שלמה ארצי', composer:'יעקב הולנדר',writer:'תרצה אתר', originalSongName:'אני זוכר אותה', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', orderDate:'11/2019', dateOfRegistration:'06/2019', youtubeLink:'https://www.youtube.com/embed/19qoWmBJVRc', shironet:'https://shironet.mako.co.il/artist?type=lyrics&lang=1&prfid=975&wrkid=73',danceVideo:''
        },
        {
          id: 2, owner: 'משה שרון', status: <NotApproved>לא מאושר</NotApproved> , danceName:'לתת ולקחת',performer:'שלמה ארצי, דודו טסה',composer:'יעקב הולנדר', writer:'תרצה אתר', originalSongName:'לתת ולקחת', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', orderDate:'11/2019',dateOfRegistration:'11/2019', youtubeLink:'https://www.youtube.com/embed/C-bAr0i0YAg',
          shironet:'https://shironet.mako.co.il/artist?type=lyrics&lang=1&prfid=14541&wrkid=33438',danceVideo:''
        },
        {
          id: 3, owner: 'משה שרון', status:<Approved>מאושר</Approved> , danceName:'אהבתיה',performer:'שלמה ארצי', composer:'יעקב הולנדר', writer:'תרצה אתר', originalSongName:'בליבי עכשיו', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', orderDate:'11/2019', dateOfRegistration:'02/2019',
          shironet:'https://shironet.mako.co.il/artist?type=lyrics&lang=1&prfid=975&wrkid=73',danceVideo:''
        }
      ],
      expandedRows : [],
      columns: [

        {
          property: 'orderDate',
          label: 'תאריך הזמנה',
          align: 'center',
          hidden:false,

        },
        {
          property: 'acumNum',
          label: 'מס׳ אקו״ם',
          align: 'center',
          hidden:false,


        },
        {
          property: 'coChoreographers',
          label: 'מחברים נוספים',
          align: 'center',
          hidden:false,
          width: '98px'

        },
        {
          property: 'danceType',
          label: 'סוג ריקוד',
          align: 'center',
          hidden:false,
          width: '60px'

        },
        {
          property: 'originalSongName',
          label: 'שם שיר מקורי',
          align: 'center',
          hidden:false,
          width: '100px'
        },
        {
          property: 'writer',
          label: 'שם משורר',
          align: 'center',
          hidden:false,
          width: '54px'

        },
        {
          property: 'composer',
          label: 'שם מלחין',
          align: 'center',
          hidden:false,
          width: '101px'
        },
        {
          property: 'performer',
          label: 'שם מבצע',
          align: 'center',
          hidden:false,
          width: '128px'


        },
        {
          hidden:false,
          property: 'danceName',
          label: 'שם ריקוד',
          align: 'center',
          width: '74px'

        },
        {
          hidden:false,
          property: 'owner',
          label: 'מוזמן ע״י',
          align: 'center',
          width: '64px'
        },
        {
          hidden:false,
          property: 'status',
          label: 'סטטוס',
          dataScope: 'column',
          align: 'center',
          width: '100px'
        }
      ],
    };
  }
    toggleDanceList = () => {
      let { toggleDanceListRedux } = this.props; 
      let danceListView = !this.props.danceListView; 
      toggleDanceListRedux(danceListView);
    }
  
    handleRowClick(rowId) {
      const currentExpandedRows = this.state.expandedRows;
      const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
      
      const newExpandedRows = isRowCurrentlyExpanded ? currentExpandedRows.filter(id => id !== rowId) : currentExpandedRows.concat(rowId);
      
      this.setState({expandedRows : newExpandedRows});
  }
    
  expandRow = (rowIndex) => {
    this.setState({
      expandedRowVisible: rowIndex
    })  
  }
  

renderItem(item) {
  const clickCallback = () => this.handleRowClick(item.id);
  const itemRows = [
    
      <TableRow onClick={clickCallback} border='bottom' key={"row-data-" + item.id} style={{borderBottom:'1px solid grey',cursor:"pointer",display: 'inline-flex', alignItems:'center',
        flexDirection:'row', direction:'rtl', height:'auto',
        width: '100%', backgroundColor:'#FFFFFF', fontSize: '1rem',
      }}>
          <TableCell>{item.status}</TableCell>			
          <TableCell style={{textAlign:'center', width:'100px'}}>{item.owner}</TableCell>
          <TableCell style={{overflow: 'hidden',
          whiteSpace: 'normal', width:'111px', display:'inline-table'}}>{item.danceName}</TableCell>
          <TableCell style={{overflow: 'hidden',
          whiteSpace: 'normal', width:'111px', display:'inline-table'}}>{item.performer}</TableCell>
          <TableCell>{item.composer}</TableCell>
          <TableCell>{item.writer}</TableCell>
          <TableCell  style={{overflow: 'hidden',
          whiteSpace: 'normal', width:'111px', display:'inline-table'}}>{item.originalSongName}</TableCell>
          <TableCell>{item.danceType}</TableCell>
          <TableCell style={{overflow: 'hidden',
          whiteSpace: 'normal', width:'112px', display:'inline-table'}}>{item.coChoreographers}</TableCell>
          <TableCell>{item.acumNum}</TableCell>
          <TableCell>{item.orderDate}</TableCell>
      </TableRow>
        ];
        
        if(this.state.expandedRows.includes(item.id)) {
            itemRows.push(
                <ExpandedRow expandedData={[item.dateOfRegistration, item.originalSongName, item.acumNum, item.orderDate, item.youtubeLink, item.shironet, item.danceVideo]} show={true} key={"row-expanded-" + item.id}>
                </ExpandedRow>
            );
        }
        
        return itemRows;    
      }
   
    render(){
        let {columns, userDances} = this.state;
        let allItemRows = [];
    
        this.state.usersData.forEach(item => {
          const perItemRows = this.renderItem(item);
          allItemRows = allItemRows.concat(perItemRows);
        });
        return (

        <WrapperDiv>
           <h2>רשימת הריקודים של {userDances} </h2>
           <MainTableWrapper>
         
            <Table style={{display: 'inline-flex',flexDirection: 'column',margin:'2rem auto', alignItems:'center', width:'auto'}}>
              <TableHeader style={{width:'auto', display:'inline-flex', flexDirection:'row', justifyContent:'space-around'}}>
                  <TableRow style={{backgroundColor:'rgb(152,135,152)', width: '100%',
    display: 'inline-table' }} align="end">
                    {columns.map(c => (
                      <TableCell key={c.property} scope='col' border='bottom' align={c.align} style={{display:c.hidden ? "none" : "inline-table", margin:'0 5px', width:c.width, whiteSpace:'normal'}}>
                             <Text style={{fontSize:'14px', fontWeight:'bold', color:'#FFFFFF'}}>{c.label}</Text>
                      </TableCell>                      
                    ))}
                  </TableRow>
              </TableHeader>
              <TableBody style={{ width: 'auto', 
    backgroundColor: '#FFFFFF'}}>
                  {allItemRows}
              </TableBody> 
            </Table>
      </MainTableWrapper>
           <ControlButtons>
              <Button onClick={this.toggleDanceList} > חזרה </Button>              
          </ControlButtons>
        </WrapperDiv>
        );
    }
}

const mapStateToProps = (state) => {
  let props = {
    danceListView:state.usersReducer.danceListView
    }
    
    console.log('----im approve view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  toggleDanceListRedux:(danceListView) => dispatch(toggleDanceListAction(danceListView))
});

  export default connect( 
    mapStateToProps,
    mapDispatchToProps)(UserDanceListScreen);
  
  
const WrapperDiv = styled.div`
    display: inline-flex;
    flex-direction:column;
    align-items: center;
    padding-top:0px auto;
    margin: 0px auto;
    background-color:#FFFFFF;
    width: 100%;
    text-align:center;
    top: 20%;
    position: absolute;
    left: 0%;
    height: 100vh;
    & h2 {
      text-align: right;
    }
`;


const ControlButtons = styled.div`
    display:inline-flex;
    flex-direction:row;
    width: auto;
    margin: 1rem 0;
    justify-content:center;
`;

const Button = styled.div`
    border:1px solid grey;
    border-radius: 5em;
    background-color:rgb(25, 47, 58);
    width: 120px;
    height: auto;
    color: #FFFFFF;
    padding: 0.5rem;
    margin: 0px 20px 10px;
    border-radius: 5em;
    cursor:pointer;
`;


const NotApproved = styled.div`
text-align: center;
 border-radius: 5em;
 background-color: rgb(241, 206, 82);
 width: 100px;
 display:block;
`;

const Approved = styled(NotApproved)`
 background-color: rgb(75, 241, 75);
`;

const MainTableWrapper = styled.div`
 overflow-x: auto;
 width: 90%;
 display: block;
 margin: 0px auto;
`;

