import React, { Component } from 'react';
import { connect } from 'react-redux';


import { toggleRegisterAction } from '@state/actions/index.js';


import { TextInput, TextArea } from 'grommet';
import Select from 'react-select';
import { SelectBtn } from '@appearance/styled';


// STYLING
import styled from 'styled-components';

class RegisterSongScreen extends React.Component{
         state = {
            selectedDanceNameValue:"",
            danceStatuses:[
              {value: 1, label:'מוזמן'},
              {value: 2, label:'מאושר'},
              {value: 3, label: 'ריקוד קיים'},
              {value: 4, label: 'נמחק', hidden:'hidden'}  
            ],  
            selectedDanceOwnerValue:"תמיר שרצר",
            textAreaText:"",
          };
    
    toy = (e) => {
      this.setState({textAreaText:e})
    }   

    toggleRegister= () => {
      let { toggleRegisterRedux } = this.props; 
      let registerSongView = !this.props.registerSongView;
      toggleRegisterRedux(registerSongView);
    }
  

    save = () => {
      console.log('will save data to db')
      this.toggleRegister();
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
        let {selectedDanceNameValue, selectedDanceStatusOption, danceStatuses, selectedDanceOwnerValue, value} = this.state;
        return (

        <WrapperDiv>
           <h2> רישום ריקוד</h2>
        
           <MainRow>
              <FormCol>
                  <ButtonsFlexer>
                          <MyLabel>שם הריקוד / השיר 
                              <TextInput
                                placeholder=""
                                value={selectedDanceNameValue}
                                onChange={ event => this.setDanceNameValue(event.target.value) }
                              />
                          </MyLabel>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
                  <ButtonsFlexer>
                    <MyLabel> מוזמן ע״י
                      <TextInput
                          placeholder=""
                          value={selectedDanceOwnerValue}
                        />
                    </MyLabel>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
                  <ButtonsFlexer>
                    <MyLabel>סטטוס
                        <SelectBtn style={{width:"192px", height:'40px', margin:'0'}}>
                            <Select
                                autoFocus
                                placeholder=''
                                value={selectedDanceStatusOption}
                                onChange={this.danceStatusChange}
                                options={danceStatuses}
                                name="dance-status-select"
                              /> 
                        </SelectBtn>
                    </MyLabel> 
                  </ButtonsFlexer>
              </FormCol>
           </MainRow>

           <MainRow>
              <FormCol>
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
                  <ButtonsFlexer>
                  
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
                  <MyLabel>  סוג הריקוד
                    <SelectBtn style={{width:"192px", height:'40px', margin:'0'}}>
                            <Select
                                autoFocus
                                placeholder=' '
                                value={selectedDanceStatusOption}
                                onChange={this.danceStatusChange}
                                options={danceStatuses}
                                name="dance-status-select"
                              /> 
                            </SelectBtn>
                    </MyLabel>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                    <MyLabel>  תאריך ושעת הזמנה 
                      <TextInput
                              placeholder=""
                              value={selectedDanceNameValue}
                              onChange={ event => this.setDanceNameValue(event.target.value) }
                            />
                     </MyLabel>
                  </ButtonsFlexer>
              </FormCol>

              <FormCol>
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
                          <MyLabel>  מספר יצירה באקו״ם
                            
                        <TextInput
                                  placeholder="#"
                                  value={selectedDanceNameValue}
                                  onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                      </MyLabel>
                    </ButtonsFlexer>

                  <ButtonsFlexer>
                  <MyLabel>  שם יצירה מקורי
                  <TextInput
                            placeholder=""
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                </MyLabel>
             
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                    <MyLabel>  תאריך הפיכה לריקוד קיים
                      <TextInput
                              placeholder=""
                              value={selectedDanceNameValue}
                              onChange={ event => this.setDanceNameValue(event.target.value) }
                            />
                     </MyLabel>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
              <ButtonsFlexer>
              <MyLabel>  שם מבצע
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
                  <MyLabel>  מספר יצירה מקורי באקו״ם
                        <TextInput
                                  placeholder="#"
                                  value={selectedDanceNameValue}
                                  onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                  </MyLabel>
              </ButtonsFlexer>

              <ButtonsFlexer>
              <MyLabel>  מחברים נוספים
                        <SelectBtn style={{width:"192px", height:'40px', margin:'0'}}>
                            <Select
                                autoFocus
                                placeholder=' '
                                value={selectedDanceStatusOption}
                                onChange={this.danceStatusChange}
                                options={danceStatuses}
                                name="dance-status-select"
                              /> 
                            </SelectBtn>
                       </MyLabel>
              </ButtonsFlexer>

              <ButtonsFlexer>
                <MyLabel>קישור לסרטון הריקוד 
                <TextInput
                        placeholder=""
                        value={selectedDanceNameValue}
                        onChange={ event => this.setDanceNameValue(event.target.value) }
                      />
                </MyLabel>
              </ButtonsFlexer>
              </FormCol>
       
           
           </MainRow>
           <MainRow>
              <ButtonsFlexer>
                  <MyLabel> לינק חופשי 
                    <TextInput
                            placeholder=""
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                    </MyLabel>
                </ButtonsFlexer>
           </MainRow>
           <MainRow>
             <MyLabelTextArea>

              <TextArea
                style={{ minHeight:'200px', direction:'rtl', textAlign:'right', margin: '2rem 0'}}
                placeholder="הערות"
                value={value}
                onChange={e => this.toy(e.target.value)}
              />
                           </MyLabelTextArea>

           </MainRow>
           <ControlButtons>
              <Button onClick={this.toggleRegister} > ביטול </Button>
              <Button onClick={this.save}> שמירה </Button>
          </ControlButtons>
        </WrapperDiv>
      
        );
    }
}


const mapStateToProps = (state) => {
  let props = {
    registerSongView:state.screensReducer.registerSongView
    }
    
    console.log('----im register view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  toggleRegisterRedux: (registerSongView) => dispatch(toggleRegisterAction(registerSongView))
});


  export default connect( 
    mapStateToProps,
    mapDispatchToProps)(RegisterSongScreen);
  
  
const WrapperDiv = styled.div`
    display: inline-flex;
    flex-direction:column;
    align-items: center;
    padding-top:0px auto;
    margin: 0px auto;
    background-color:#FFFFFF;
    width: 100%;
    text-align:center;
    & h2 {
      text-align: right;
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

const MyLabelTextArea = styled(MyLabel)`
  width: 90%;

`;