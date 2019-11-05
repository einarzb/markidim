import React from 'react';
import { connect } from 'react-redux';

import { toggleEditAction, toggleApproveAction, fetchDataAction } from '@state/actions/index.js';

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
      data : [
        {id : 1, date : "2014-04-18", total : 121.0, status : "Shipped", name : "A", points: 5, percent : 50},
        {id : 2, date : "2014-04-21", total : 121.0, status : "Not Shipped", name : "B", points: 10, percent: 60},
        {id : 3, date : "2014-08-09", total : 121.0, status : "Not Shipped", name : "C", points: 15, percent: 70},
        {id : 4, date : "2014-04-24", total : 121.0, status : "Shipped", name : "D", points: 20, percent : 80},
        {id : 5, date : "2014-04-26", total : 121.0, status : "Shipped", name : "E", points: 25, percent : 90},
    ],
     expandedRows : [],
      columns: [
        {
          property: 'approveSong',
          label: '',
          align: 'center',
          onClick:this.toggleApprove,
          hidden:false,
          width:'0px',
          display:'none'
        },
        {
          property: 'editSong',
          label: '',
          align: 'center',
          onClick:this.toggleEdit,
          hidden:false,
          width:'0px',
          display:'none'

        },
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
 
      usersData: [
        {
          id: 1, owner: 'עינר גל', status:<Approved>מאושר</Approved> , danceName:'אהבתיה',performer:'שלמה ארצי', composer:'יעקב הולנדר',writer:'תרצה אתר', originalSongName:'אני זוכר אותה', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', orderDate:'11/2019', dateOfRegistration:'06/2019', youtubeLink:'https://www.youtube.com/embed/19qoWmBJVRc', shironet:'https://shironet.mako.co.il/artist?type=lyrics&lang=1&prfid=975&wrkid=73',danceVideo:''
        },
        {
          id: 2, owner: 'תמיר שרצר', status: <NotApproved>לא מאושר</NotApproved> , danceName:'לתת ולקחת',performer:'שלמה ארצי, דודו טסה',composer:'יעקב הולנדר', writer:'תרצה אתר', originalSongName:'לתת ולקחת', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', orderDate:'11/2019', editSong: editBtn, approveSong:approveBtn, dateOfRegistration:'11/2019', youtubeLink:'https://www.youtube.com/embed/C-bAr0i0YAg',
          shironet:'https://shironet.mako.co.il/artist?type=lyrics&lang=1&prfid=14541&wrkid=33438',danceVideo:''
        },
        {
          id: 3, owner: 'עידן חיל', status:<Approved>מאושר</Approved> , danceName:'אהבתיה',performer:'שלמה ארצי', composer:'יעקב הולנדר', writer:'תרצה אתר', originalSongName:'בליבי עכשיו', danceType:'זוגות', coChoreographers:'עידן חיל, עינר גל', acumNum:'902568', orderDate:'11/2019', dateOfRegistration:'02/2019',
          shironet:'https://shironet.mako.co.il/artist?type=lyrics&lang=1&prfid=975&wrkid=73',danceVideo:''
        }
      ],
      expandedRowVisible:false,      
    }
  }

  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
    
    const newExpandedRows = isRowCurrentlyExpanded ? currentExpandedRows.filter(id => id !== rowId) : currentExpandedRows.concat(rowId);
    
    this.setState({expandedRows : newExpandedRows});
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
          <TableCell>{item.editSong}</TableCell>
          <TableCell>{item.approveSong}</TableCell>
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

  componentDidMount(){
    this.refreshData();
  }

  refreshData = () => {
      let { sendDataToRedux } = this.props;
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
    let allItemRows = [];
    
    this.state.usersData.forEach(item => {
      const perItemRows = this.renderItem(item);
      allItemRows = allItemRows.concat(perItemRows);
    });

    let {editView, approveView} = this.props;
    let {columns} = this.state;
     return(
      <MainTableWrapper>
          { 
            editView ? <EditSongScreen toggle={this.toggleEdit} /> :
            approveView ? <ConfirmSongScreen toggle={this.toggleApprove}/> : 
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
          }
      </MainTableWrapper>
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
                  {/**
                  <Table responsiveBreakpoint="small"
          style={{margin:'1rem auto'}}>
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
                  </TableRow>,
                   <ExpandedRow show={i === expandedRowVisible}> </ExpandedRow>

                ]
            ))}
            </TableBody>
          </Table> */}

 

const mapStateToProps = (state) => {
  let props = {
    editView:state.screensReducer.editView,
    approveView:state.screensReducer.approveView,
    danceData:state.dancesReducer
    }
    
    console.log('----im props view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  sendDataToRedux:(res) => dispatch(fetchDataAction(res)),
  toggleEditRedux: (editView) => dispatch(toggleEditAction(editView)),
  toggleApproveRedux: (approveView) => dispatch(toggleApproveAction(approveView))
});




export default connect (
  mapStateToProps,
mapDispatchToProps)
(MainSongsTable);


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

