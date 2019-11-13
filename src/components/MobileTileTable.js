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


class MobileTileTable extends React.Component{
  constructor(){
    super()
    

  
  
    this.state = {
 
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
      mobileColumns: [
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
          hidden:false,
          property: 'danceLink',
          label: 'לינק',
          dataScope: 'column',
          align: 'center',
          width: '100px'
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
 

      expandedRowVisible:false,     
      editButton:''
     
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
  
    let {editView, approveView} = this.props;
    let {editButton} = this.state;
     return(


      <MainTableWrapper>
          { 
            editView ? <EditSongScreen toggle={this.toggleEdit} /> :
            approveView ? <ConfirmSongScreen toggle={this.toggleApprove}/> : 
            <div>
            <TileTable>
              <TileHeader>
                  <Tile>
                    <span> סטטוס:</span>
                    ממתין לאישור</Tile>
                  <TileButton>לינק לריקוד</TileButton>
                  <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 15px",cursor:"pointer"}} onClick={this.toggleEdit}> <img src={EDIT} width="15" height="15"/></button>
                  <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 15px", cursor:'pointer'}} onClick={this.toggleApprove}>  
                    <img src={APPROVE} width="15" height="15"/>
                  </button>
              </TileHeader>
              <TileRow>
                  <Tile>
                    אהבתיה
                  </Tile>
                  <Tile>
                  <span>מוזמן ע״י: </span>
                  עידן חיל
                  </Tile>
                  <Tile>
                    <span>סוג: </span>
                    זוגות
                  </Tile>
              </TileRow>
              <TileDataBlock>
                  <TileData>
                    <Tile>
                      <span>שם שיר מקורי: </span>
                      פתאום עכשיו פתאום היום
                    </Tile>
                    <Tile>
                      <span> מס׳ יצירה אקו״ם: </span>
                      90927
                    </Tile>
                    <Tile>
                      <span> תאריך הזמנה: </span>
                      22.2.19 
                    </Tile>
                    <Tile>
                      <span> תאריך הפיכה לריקוד קיים: </span>
                      22.2.17 
                    </Tile>
                  </TileData>
                  <TileData>
                    <Tile>
                      <span> שם מבצע: </span>
                      שלמה ארצי
                    </Tile>
                    <Tile>
                      <span>שם מלחין: </span>
                      יעקב הולנדר
                    </Tile>
                    <Tile>
                      <span>שם משורר: </span>
                      תרצה אתר
                    </Tile>
                    <Tile>
                      <span> מחברים נוספים: </span>
                      עידן חיל, תמיר שרצר
                    </Tile>
                  </TileData>
                
              </TileDataBlock>
            </TileTable>

            <TileTable>
            <TileHeader>
                <Tile>
                  <span> סטטוס:</span>
                   מאושר</Tile>
                <TileButton>לינק לריקוד</TileButton>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 15px",cursor:"pointer"}} onClick={this.toggleEdit}> <img src={EDIT} width="15" height="15"/></button>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 15px", cursor:'pointer'}} onClick={this.toggleApprove}>  
                  <img src={APPROVE} width="15" height="15"/>
                </button>
            </TileHeader>
            <TileRow>
                <Tile>
                  אהבתיה
                </Tile>
                <Tile>
                <span>מוזמן ע״י: </span>
                עידן חיל
                </Tile>
                <Tile>
                  <span>סוג: </span>
                  זוגות
                </Tile>
            </TileRow>
            <TileDataBlock>
                <TileData>
                  <Tile>
                    <span>שם שיר מקורי: </span>
                    פתאום עכשיו פתאום היום
                  </Tile>
                  <Tile>
                    <span> מס׳ יצירה אקו״ם: </span>
                    90927
                  </Tile>
                  <Tile>
                    <span> תאריך הזמנה: </span>
                    22.2.19 
                  </Tile>
                  <Tile>
                    <span> תאריך הפיכה לריקוד קיים: </span>
                    22.2.17 
                  </Tile>
                </TileData>
                <TileData>
                  <Tile>
                    <span> שם מבצע: </span>
                    שלמה ארצי
                  </Tile>
                  <Tile>
                    <span>שם מלחין: </span>
                    יעקב הולנדר
                  </Tile>
                  <Tile>
                    <span>שם משורר: </span>
                    תרצה אתר
                  </Tile>
                  <Tile>
                    <span> מחברים נוספים: </span>
                    עידן חיל, תמיר שרצר
                  </Tile>
                </TileData>
              
            </TileDataBlock>
          </TileTable>


          <TileTable>
            <TileHeader>
                <Tile>
                  <span> סטטוס:</span>
                   מאושר</Tile>
                <TileButton>לינק לריקוד</TileButton>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 15px",cursor:"pointer"}} onClick={this.toggleEdit}> <img src={EDIT} width="15" height="15"/></button>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 15px", cursor:'pointer'}} onClick={this.toggleApprove}>  
                  <img src={APPROVE} width="15" height="15"/>
                </button>
            </TileHeader>
            <TileRow>
                <Tile>
                  אהבתיה
                </Tile>
                <Tile>
                <span>מוזמן ע״י: </span>
                עידן חיל
                </Tile>
                <Tile>
                  <span>סוג: </span>
                  זוגות
                </Tile>
            </TileRow>
            <TileDataBlock>
                <TileData>
                  <Tile>
                    <span>שם שיר מקורי: </span>
                    פתאום עכשיו פתאום היום
                  </Tile>
                  <Tile>
                    <span> מס׳ יצירה אקו״ם: </span>
                    90927
                  </Tile>
                  <Tile>
                    <span> תאריך הזמנה: </span>
                    22.2.19 
                  </Tile>
                  <Tile>
                    <span> תאריך הפיכה לריקוד קיים: </span>
                    22.2.17 
                  </Tile>
                </TileData>
                <TileData>
                  <Tile>
                    <span> שם מבצע: </span>
                    שלמה ארצי
                  </Tile>
                  <Tile>
                    <span>שם מלחין: </span>
                    יעקב הולנדר
                  </Tile>
                  <Tile>
                    <span>שם משורר: </span>
                    תרצה אתר
                  </Tile>
                  <Tile>
                    <span> מחברים נוספים: </span>
                    עידן חיל, תמיר שרצר
                  </Tile>
                </TileData>
              
            </TileDataBlock>
          </TileTable>
          </div>
          }
      </MainTableWrapper>
    )
  }
}


 

const mapStateToProps = (state) => {
  let props = {
    editView:state.screensReducer.editView,
    approveView:state.screensReducer.approveView,
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
(MobileTileTable);



const MainTableWrapper = styled.div`
  overflow-x: auto;
  width: 90%;
  display: block;
  margin: 0px auto;
  display:none;
  @media (max-width: 768px) {
    display:block;
    margin-top: 1rem;
  }
`;

const TileTable = styled.div`
  display:inline-flex;
  flex-direction:column;
  width: 97%;
  height: auto;
  margin: 10px 0;
`;

const TileHeader = styled.div`
  display:inline-flex;
  flex-direction:row-reverse;
  height: 70px;
  width:auto;
  border-bottom:1px solid grey;
  align-items:center;
  background-color:rgb(152,135,152);
  color: #FFFFFF;
`;

const TileRow = styled(TileHeader)`
  background-color:#FFFFFF;
  color: grey;
  border:1px solid grey;
  & div {
    width: 33%;
    white-space: nowrap;
  }
`;

const Tile = styled.div`
  display:inline-block;
  font-size: 1rem;
  margin: 0 5px;
  & span {
    font-weight: bold;
    margin: 0 2px;
  }
`;

const TileButton = styled(Tile)`
  border:1px solid #FFFFFF;
  border-radius: 0.5em;
  padding: 5px;
  height: 29px;
`;

const TileDataBlock = styled.div`
  display:inline-flex;
  background-color:#FFFFFF;

  border:none;
  flex-direction:row-reverse;
  border: 1px solid grey;
`;

const TileData = styled.div`
  display:inline-flex;
  border:none;
  flex-direction:column;
  width: 50%;
  text-align: right;
`;