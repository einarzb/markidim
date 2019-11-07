import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextInput } from 'grommet/components/TextInput';
import Select from 'react-select';
import { SelectBtn } from '@appearance/styled';
import { Box, RadioButton, TextArea } from 'grommet';

import { toggleEditAction } from '@state/actions/index.js';


// STYLING
import styled from 'styled-components';

class EditUserScreen extends React.Component{
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
      let editUserView = !this.props.editUserView; 
      toggleEditRedux(editUserView);
  
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
        let {selectedDanceNameValue, selectedDanceStatusOption, danceStatuses, selected} = this.state;
        return (

        <WrapperDiv>
           <h2>עריכת פרטי משתמש</h2>
        
           <MainRow>
                  <ButtonsFlexer>
                          <label>משתמש שילם דמי חבר השנה?
                          <Box align='start'  direction="row">
                                  {['לא','כן'].map(opt => (
                                <Box key={opt} margin={{horizontal: 'small'}}>   
                                  <RadioButton style={{width:'23px'}}
                                      name='prop'
                                      checked={selected === opt}
                                      label={opt}
                                      onChange={() => this.setState({selected:opt})}
                                    />
                                </Box>
                                ))}
                              </Box> 
                          </label>
                  </ButtonsFlexer>
              </MainRow>
              <MainRow>

              <FormCol>
                  <ButtonsFlexer>
                    <label> שם פרטי
                      <TextInput
                          placeholder=""
                          value={selectedDanceNameValue}
                          onChange={ event => this.setDanceNameValue(event.target.value) }
                        />
                    </label>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                    <label> שם משפחה
                        <TextInput
                          placeholder=""
                          value={selectedDanceNameValue}
                          onChange={ event => this.setDanceNameValue(event.target.value) }
                        />
                    </label>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                     <label>   מס׳ חבר
                       <TextInput
                                  placeholder=""
                                  value={selectedDanceNameValue}
                                  onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                       </label>
                  </ButtonsFlexer>
                  <ButtonsFlexer>

                      <label>  סוג מדריך
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
              </FormCol>

              <FormCol>
                  <ButtonsFlexer>
                    <label> אימייל
                    <TextInput
                            placeholder= " "
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                    </label>
                  </ButtonsFlexer>
                
                  <ButtonsFlexer>
                    <label>  טלפון נוסף
                          <TextInput
                                  placeholder=""
                                  value={selectedDanceNameValue}
                                  onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                    </label>
                  </ButtonsFlexer>   
                  <ButtonsFlexer>
                     <label> תעודת זהות
                     <TextInput
                            placeholder=""
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                     </label>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                <label>  מקס הזמנות שנתי
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


              <FormCol>
              <ButtonsFlexer>
                      <label> כתובת
                          <TextInput
                                  placeholder=""
                                  value={selectedDanceNameValue}
                                  onChange={ event => this.setDanceNameValue(event.target.value) }
                          />
                      </label>
                    </ButtonsFlexer>
                    <ButtonsFlexer>
                    <label> מס׳ סלולרי
                    <TextInput
                            placeholder=""
                            value={selectedDanceNameValue}
                            onChange={ event => this.setDanceNameValue(event.target.value) }
                    />
                    </label>
                  </ButtonsFlexer>
                 

               
                  <ButtonsFlexer>
                     <label>   מקס הזמנות במקביל
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
                   
              <ButtonsFlexer>
                  <label>
                      אדמין
                      <Box align='start'  direction="row">
                                  {['לא','כן'].map(opt => (
                                <Box key={opt} margin={{horizontal: 'small'}}>   
                                  <RadioButton style={{width:'23px'}}
                                      name='prop'
                                      checked={selected === opt}
                                      label={opt}
                                      onChange={() => this.setState({selected:opt})}
                                    />
                                </Box>
                                ))}
                              </Box> 
                 </label>
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
    editUserView:state.usersReducer.editUserView
    }
    
    console.log('----im edit view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

  const mapDispatchToProps = (dispatch) => ({  
    toggleEditRedux: (editUserView) => dispatch(toggleEditAction(editUserView))
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps)
  (EditUserScreen);
  
  
const WrapperDiv = styled.div`
    display: inline-flex;
    flex-direction:column;
    align-items: center;
    padding-top:0px auto;
    margin: 0px auto;
    background-color:#FFFFFF;
    width: 100%;
    text-align:center;
    top: 30%;
    position: absolute;
    left: 0%;
    height: 100vh;
}
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