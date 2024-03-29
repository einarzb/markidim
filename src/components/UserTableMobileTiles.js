import React from 'react';
import { connect } from 'react-redux';

import { toggleEditAction, toggleApproveAction, fetchDataAction } from '@state/actions/index.js';

//STYLING
import styled from 'styled-components';
import { EDIT, DELETE, DANCELIST } from '@assets/index.js';

//screens
import EditSongScreen from '@screens/EditSongScreen';
import ConfirmSongScreen from '@screens/ConfirmSongScreen';

//components
import ExpandedRow from '@components/ExpandedRow';


class UserTableMobileTiles extends React.Component{
  constructor(){
    super()
    

  
  
    this.state = {}
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



  render() {
  
    let {editView, approveView} = this.props;
     return(

      <MainTableWrapper>
          { 
            editView ? <EditSongScreen toggle={this.toggleEdit} /> :
            approveView ? <ConfirmSongScreen toggle={this.toggleApprove}/> : 
          <div>
     
           <TileTable>
            <TileHeader>
                <Tile>
                  <span> שם פרטי:</span>
                   משה</Tile>
              <Tile>
                <span>שם משפחה: </span>
                שרון
                </Tile>

                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 8px",cursor:"pointer"}} onClick={this.toggleEdit}> <img src={DANCELIST} width="15" height="15"/></button>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 8px",cursor:"pointer"}} onClick={this.toggleEdit}> <img src={EDIT} width="15" height="15"/></button>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 8px", cursor:'pointer'}} onClick={this.toggleApprove}>  
                  <img src={DELETE} width="15" height="15"/>
                </button>
            </TileHeader>
          
            <TileDataBlock>
                <TileData>
                  <Tile>
                    <span>  אימייל : </span>
                    msharon@gmail.com
                  </Tile>
                  <Tile>
                    <span> מס׳ חבר: </span>
                    432423
                  </Tile>
                  <Tile>
                    <span> תעודת זהות : </span>
                    036587053
                  </Tile>
                  <Tile>
                    <span> מס סלולרי : </span>
                    054-7643437 
                  </Tile>
                </TileData>
                <TileData>
                  <Tile>
                    <span> טלפון נוסף: </span>
                    04-3786298
                  </Tile>
                  <Tile>
                    <span>כתובת : </span>
                    מגדיאל 2, רמת גן
                   </Tile>
                  <Tile>
                    <span>מקס הזמנות במקביל: </span>
                     3
                  </Tile>
                  <Tile>
                    <span>  מקס הזמנות שנתי : </span>
                   10
                  </Tile>
                  <TileUserStatus>
                    מושהה
                  </TileUserStatus>
                </TileData>
              
            </TileDataBlock>
          </TileTable>

          <TileTable>
            <TileHeader>
                <Tile>
                  <span> שם פרטי:</span>
                   משה</Tile>
              <Tile>
                <span>שם משפחה: </span>
                שרון
                </Tile>

                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 8px",cursor:"pointer"}} onClick={this.toggleEdit}> <img src={DANCELIST} width="15" height="15"/></button>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 8px",cursor:"pointer"}} onClick={this.toggleEdit}> <img src={EDIT} width="15" height="15"/></button>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 8px", cursor:'pointer'}} onClick={this.toggleApprove}>  
                  <img src={DELETE} width="15" height="15"/>
                </button>
            </TileHeader>
          
            <TileDataBlock>
                <TileData>
                  <Tile>
                    <span>  אימייל : </span>
                    msharon@gmail.com
                  </Tile>
                  <Tile>
                    <span> מס׳ חבר: </span>
                    432423
                  </Tile>
                  <Tile>
                    <span> תעודת זהות : </span>
                    036587053
                  </Tile>
                  <Tile>
                    <span> מס סלולרי : </span>
                    054-7643437 
                  </Tile>
                </TileData>
                <TileData>
                  <Tile>
                    <span> טלפון נוסף: </span>
                    04-3786298
                  </Tile>
                  <Tile>
                    <span>כתובת : </span>
                    מגדיאל 2, רמת גן
                   </Tile>
                  <Tile>
                    <span>מקס הזמנות במקביל: </span>
                     3
                  </Tile>
                  <Tile>
                    <span>  מקס הזמנות שנתי : </span>
                   10
                  </Tile>
                  <TileUserStatus>
                    אדמין
                  </TileUserStatus>
                </TileData>
              
            </TileDataBlock>
          </TileTable>

          <TileTable>
            <TileHeader>
                <Tile>
                  <span> שם פרטי:</span>
                   משה</Tile>
              <Tile>
                <span>שם משפחה: </span>
                שרון
                </Tile>

                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 8px",cursor:"pointer"}} onClick={this.toggleEdit}> <img src={DANCELIST} width="15" height="15"/></button>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 8px",cursor:"pointer"}} onClick={this.toggleEdit}> <img src={EDIT} width="15" height="15"/></button>
                <button style={{backgroundColor:"transparent", border:"none", padding:"0", margin:"0 8px", cursor:'pointer'}} onClick={this.toggleApprove}>  
                  <img src={DELETE} width="15" height="15"/>
                </button>
            </TileHeader>
          
            <TileDataBlock>
                <TileData>
                  <Tile>
                    <span>  אימייל : </span>
                    msharon@gmail.com
                  </Tile>
                  <Tile>
                    <span> מס׳ חבר: </span>
                    432423
                  </Tile>
                  <Tile>
                    <span> תעודת זהות : </span>
                    036587053
                  </Tile>
                  <Tile>
                    <span> מס סלולרי : </span>
                    054-7643437 
                  </Tile>
                </TileData>
                <TileData>
                  <Tile>
                    <span> טלפון נוסף: </span>
                    04-3786298
                  </Tile>
                  <Tile>
                    <span>כתובת : </span>
                    מגדיאל 2, רמת גן
                   </Tile>
                  <Tile>
                    <span>מקס הזמנות במקביל: </span>
                     3
                  </Tile>
                  <Tile>
                    <span>  מקס הזמנות שנתי : </span>
                   10
                  </Tile>
                  <TileUserStatus>
                    נעול
                  </TileUserStatus>
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
(UserTableMobileTiles);



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
  width: 100%;
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
  & div {
    width: 33%;
    white-space: nowrap;
  }
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
  direction:rtl;
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

const TileUserStatus = styled.div`
  border:1px solid grey;
  padding: 0px 2px;
  width: 74px;
    margin: 10px;
`;