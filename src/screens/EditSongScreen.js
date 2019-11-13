import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextInput } from 'grommet/components/TextInput';
import Select from 'react-select';
import { SelectBtn } from '@appearance/styled';

import { toggleEditAction } from '@state/actions/index.js';


// STYLING
import styled from 'styled-components';

class EditSongScreen extends React.Component{
         state = {
            selectedDanceNameValue:"",
            danceStatuses:[
              {value: 1, label:'מאושר'},
              {value: 2, label: 'לא מאושר'},
              {value: 3, label: 'בבדיקה'}  
            ],  
          };
    

    toggleEdit = () => {
      let { toggleEditRedux } = this.props; 
      let editView = !this.props.editView; 
      toggleEditRedux(editView);
  
    }

    save = () => {
      console.log('will save data to db')
      this.toggleEdit();
      console.log('and abort')
      }

    setDanceNameValue = (e) => {      
      this.setState({
        selectedDanceNameValue:e
      })
    }

    danceStatusChange = (selectedDanceStatusOption) => {
      this.setState({ selectedDanceStatusOption });
    };
   
    render(){
        let {selectedDanceNameValue, selectedDanceStatusOption, danceStatuses} = this.state;
        return (

        <WrapperDiv>
           <h2>עריכת פרטי ריקוד</h2>
        
           <MainRow>
              <FormCol>
                  <ButtonsFlexer>
                          <MyLabel>סטטוס
                            <SelectBtn style={{width:"192px", height:'40px', margin:'0'}}>
                            <Select
                                autoFocus
                                placeholder='סטטוס ריקוד'
                                value={selectedDanceStatusOption}
                                onChange={this.danceStatusChange}
                                options={danceStatuses}
                                name="dance-status-select"
                              /> 
                            </SelectBtn>
                              </MyLabel>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
                  <ButtonsFlexer>
                    <MyLabel>תאריך הזמנה
                      <TextInput
                          placeholder="11/1984"
                          value={selectedDanceNameValue}
                          onChange={ event => this.setDanceNameValue(event.target.value) }
                        />
                    </MyLabel>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
                  <ButtonsFlexer>
                    <MyLabel>תאריך הפיכה לריקוד קיים
                        <TextInput
                          placeholder="06/2019"
                          value={selectedDanceNameValue}
                          onChange={ event => this.setDanceNameValue(event.target.value) }
                        />
                    </MyLabel>
                  </ButtonsFlexer>
              </FormCol>
           </MainRow>

           <MainRow>
              <FormCol>
                  <ButtonsFlexer>
                    <MyLabel>שם ריקוד: 
                    <TextInput
                            placeholder="פתאום עכשיו פתאום היום"
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                    </MyLabel>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                     <MyLabel>מוזמן ע״י:
                     <TextInput
                            placeholder="תמיר שרצר"
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                     </MyLabel>
                  </ButtonsFlexer>

                  <ButtonsFlexer>
                    <MyLabel>שם שיר מקורי: 
                    <TextInput
                            placeholder="אהבתיה"
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                    </MyLabel>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                    <MyLabel> שם מלחין
                    <SelectBtn style={{width:"192px", height:'40px', margin:'0'}}>
                            <Select
                                autoFocus
                                placeholder='יעקב הולנדר'
                                value={selectedDanceStatusOption}
                                onChange={this.danceStatusChange}
                                options={danceStatuses}
                                name="dance-status-select"
                              /> 
                            </SelectBtn>
                    </MyLabel>
                  </ButtonsFlexer>

                 
              </FormCol>

              <FormCol>
              <ButtonsFlexer>
                      <MyLabel>מס יצירה אקו״ם
                          <TextInput
                                  placeholder="935785"
                                  value={selectedDanceNameValue}
                                  onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                      </MyLabel>
                    </ButtonsFlexer>
                    <ButtonsFlexer>
                       <MyLabel> שם משורר
                       <SelectBtn style={{width:"192px", height:'40px', margin:'0'}}>
                            <Select
                                autoFocus
                                placeholder='תרצה אתר'
                                value={selectedDanceStatusOption}
                                onChange={this.danceStatusChange}
                                options={danceStatuses}
                                name="dance-status-select"
                              /> 
                            </SelectBtn>
                       </MyLabel>
                    </ButtonsFlexer>

                  <ButtonsFlexer>
                     <MyLabel>  מחברים נוספים
                       <TextInput
                                  placeholder="עינר גל"
                                  value={selectedDanceNameValue}
                                  onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                       </MyLabel>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                     <MyLabel>  שם מבצע
                     <SelectBtn style={{width:"192px", height:'40px', margin:'0'}}>
                            <Select
                                autoFocus
                                placeholder='שלמה ארצי'
                                value={selectedDanceStatusOption}
                                onChange={this.danceStatusChange}
                                options={danceStatuses}
                                name="dance-status-select"
                              /> 
                            </SelectBtn>
                       </MyLabel>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
              <ButtonsFlexer>
                <MyLabel>  שם יצירה מקורי
                  <TextInput
                            placeholder="אהבתיה"
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                </MyLabel>
               </ButtonsFlexer>
           
              <ButtonsFlexer>
                  <MyLabel>
                      לינק לסרטון שיר מקורי 
                     <TextInput
                            placeholder="שלמה ארצי"
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                 </MyLabel>
              </ButtonsFlexer>

              <ButtonsFlexer>
                 <MyLabel>
                    לינק לסרטון ריקוד
                    <TextInput
                        placeholder="שלמה ארצי"
                        value={selectedDanceNameValue}
                        onChange={ event => this.setDanceNameValue(event.target.value) }
                      />
                 </MyLabel>
              </ButtonsFlexer>

              <ButtonsFlexer>
                <MyLabel>לינק למילות שיר 
                <TextInput
                        placeholder="שלמה ארצי"
                        value={selectedDanceNameValue}
                        onChange={ event => this.setDanceNameValue(event.target.value) }
                      />
                </MyLabel>
              </ButtonsFlexer>
              </FormCol>
       
           
           </MainRow>
           <ControlButtons>
              <Button onClick={this.toggleEdit} > ביטול </Button>
              <Button onClick={this.save}> שמירה </Button>
          </ControlButtons>
        </WrapperDiv>
      
        );
    }
}

const mapStateToProps = (state) => {
  let props = {
    editView:state.screensReducer.editView
    }
    
    console.log('----im edit view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

  const mapDispatchToProps = (dispatch) => ({  
    toggleEditRedux: (editView) => dispatch(toggleEditAction(editView))
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps)
  (EditSongScreen);
  
  
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
    @media (max-width: 768px) {
      top: 39%;
    }
`;

const ButtonsFlexer = styled.div`
    display: inline-flex;
    flex-direction:row;
    width: 100%;
    direction:rtl;
    align-items:center;
    font-size: 15px;
    & label {
      text-align:right;
      margin: 5px 0px;
      color:rgb(152,135,152);
    }
    & div {
      text-align:right;
      width: auto;
      & input{
        font-weight:100;
      }
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

const FormCol = styled.div`
    display:inline-flex;
    flex-direction:column;
    width:33%;
    @media (max-width: 768px) {
      width: auto;
    }

`; 

const MainRow = styled.div`
display:inline-flex;
flex-direction:row-reverse;
width:55%;
@media (max-width: 768px) {
  width:90%;
  flex-direction:column;

}
`;

const MyLabel = styled.label`
text-align: right;
width: auto;
margin: 5px 0px;
color: rgb(152,135,152);
@media (max-width: 768px) {
  width: 100%;
}
`;