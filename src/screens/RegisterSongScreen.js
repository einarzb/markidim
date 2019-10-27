import React, { Component } from 'react';
import { TextInput, TextArea } from 'grommet';
import Select from 'react-select';
import { SelectBtn } from '@appearance/styled';


// STYLING
import styled from 'styled-components';

class RegisterSongScreen extends React.Component{
         state = {
            selectedDanceNameValue:"",
            showFlag:true,
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
    toggleRegister = () => {      
      this.setState({
        showFlag: !this.state.showFlag,
      })
      
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
                          <label>שם הריקוד / השיר 
                              <TextInput
                                placeholder=""
                                value={selectedDanceNameValue}
                                onChange={ event => this.setDanceNameValue(event.target.value) }
                              />
                          </label>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
                  <ButtonsFlexer>
                    <label> מוזמן ע״י
                      <TextInput
                          placeholder=""
                          value={selectedDanceOwnerValue}
                        />
                    </label>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
                  <ButtonsFlexer>
                    <label>סטטוס
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
                    </label> 
                  </ButtonsFlexer>
              </FormCol>
           </MainRow>

           <MainRow>
              <FormCol>
                  <ButtonsFlexer>
                  <label> שם מלחין
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
                    </label>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                  
                  </ButtonsFlexer>

                  <ButtonsFlexer>
                    <label>שם שיר מקורי: 
                    <TextInput
                            placeholder="אהבתיה"
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                    </label>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                  <label>  סוג הריקוד
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
                    </label>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                    <label>  תאריך ושעת הזמנה 
                      <TextInput
                              placeholder=""
                              value={selectedDanceNameValue}
                              onChange={ event => this.setDanceNameValue(event.target.value) }
                            />
                     </label>
                  </ButtonsFlexer>
              </FormCol>

              <FormCol>
              <ButtonsFlexer>
              <label> שם משורר
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
                       </label>
           
                    </ButtonsFlexer>
                    <ButtonsFlexer>
                          <label>  מספר יצירה באקו״ם
                            
                        <TextInput
                                  placeholder="#"
                                  value={selectedDanceNameValue}
                                  onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                      </label>
                    </ButtonsFlexer>

                  <ButtonsFlexer>
                  <label>  שם יצירה מקורי
                  <TextInput
                            placeholder=""
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                </label>
             
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                    <label>  תאריך הפיכה לריקוד קיים
                      <TextInput
                              placeholder=""
                              value={selectedDanceNameValue}
                              onChange={ event => this.setDanceNameValue(event.target.value) }
                            />
                     </label>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
              <ButtonsFlexer>
              <label>  שם מבצע
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
                     </label>
               </ButtonsFlexer>
           
              <ButtonsFlexer>
                  <label>  מספר יצירה מקורי באקו״ם
                        <TextInput
                                  placeholder="#"
                                  value={selectedDanceNameValue}
                                  onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                  </label>
              </ButtonsFlexer>

              <ButtonsFlexer>
              <label>  מחברים נוספים
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
                       </label>
              </ButtonsFlexer>

              <ButtonsFlexer>
                <label>קישור לסרטון הריקוד 
                <TextInput
                        placeholder=""
                        value={selectedDanceNameValue}
                        onChange={ event => this.setDanceNameValue(event.target.value) }
                      />
                </label>
              </ButtonsFlexer>
              </FormCol>
       
           
           </MainRow>
           <MainRow>
              <ButtonsFlexer>
                  <label> לינק חופשי 
                    <TextInput
                            placeholder=""
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                    </label>
                </ButtonsFlexer>
           </MainRow>
           <MainRow>
              <TextArea
                style={{width:'711px', minHeight:'200px', direction:'rtl', textAlign:'right', margin: '2rem 0'}}
                placeholder="הערות"
                value={value}
                onChange={e => this.toy(e.target.value)}
              />
           </MainRow>
           <ControlButtons>
              <Button onClick={this.toggleRegister} > ביטול </Button>
              <Button> שמירה </Button>
          </ControlButtons>
        </WrapperDiv>
      
        );
    }
}

  export default RegisterSongScreen;
  
  
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

`; 

const MainRow = styled.div`
display:inline-flex;
flex-direction:row-reverse;
width:55%;

`;