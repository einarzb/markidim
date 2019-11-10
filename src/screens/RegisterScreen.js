import React, { Component } from 'react';
import { connect } from 'react-redux';


import { TextInput, TextArea } from 'grommet';
import Select from 'react-select';
import { SelectBtn } from '@appearance/styled';

import { toggleUserRegisterAction } from '@state/actions/index.js';


// STYLING
import styled from 'styled-components';

 class RegisterScreen extends React.Component{ 
  state = {
    lastName:null,
    choreographerTypes:[
      {value: 1, label:'אינו מדריך'},
      {value: 2, label:'חבר ועד מנהל'},
      {value: 3, label: 'חבר מועצה'},
      {value: 4, label: 'יוצר ריקודי עם'},
      {value: 5, label: 'יקיר'},
      {value: 6, label: 'כוריאוגרף לבמה'},
      {value: 7, label: 'מדריך'},
      {value: 8, label: 'מדריך פעיל'},
      {value: 8, label: 'מדריכי חול'},
      {value: 9, label: 'מדריך ילדים'},
      {value: 10, label: 'מדריך אוכלוסיות מיוחדות'},

 
    ],  
    name:null,
    memberId:null,
    lastName:null,
    choreographerType:null,
    id:null,
    cellular:null,
    phoneNum:null,
    address:null
  };


  toggleRegisterUser = () => {
    let { toggleRegisterRedux } = this.props; 
    let registerView = !this.props.registerView;
    toggleRegisterRedux(registerView);
  }

  render(){
    let {name,lastName,email,memberId, choreographerType,choreographerTypes, id, phoneNum, cellular , address} = this.state;
    return(
      <WrapperDiv>
      <h2>הרשמה למערכת</h2>
      <MainRow>
         <FormCol>
          <ButtonsFlexer>
                  <MyLabel> שם פרטי
                      <TextInput
                        placeholder=""
                        value={name}
                        onChange={ event => this.setDanceNameValue(event.target.value) }
                      />
                  </MyLabel>
          </ButtonsFlexer>
          <ButtonsFlexer>
                  <MyLabel>  מס׳ חבר בארגון
                      <TextInput
                        placeholder=""
                        value={memberId}
                        onChange={ event => this.setDanceNameValue(event.target.value) }
                      />
                  </MyLabel>
          </ButtonsFlexer>
          <ButtonsFlexer>
                  <MyLabel>  סלולרי
                      <TextInput
                        placeholder=""
                        value={cellular}
                        onChange={ event => this.setDanceNameValue(event.target.value) }
                      />
                  </MyLabel>
          </ButtonsFlexer>
      </FormCol>
      <FormCol>
          <ButtonsFlexer>
            <MyLabel>  שם משפחה
              <TextInput
                  placeholder=""
                  value={lastName}
                />
            </MyLabel>
          </ButtonsFlexer>
          <ButtonsFlexer>
            <MyLabel>  סוג מדריך 
                 <SelectBtn style={{width:"192px", height:'40px', margin:'0'}}>
                            <Select
                                autoFocus
                                placeholder=' '
                                value={choreographerType}
                                onChange={this.danceStatusChange}
                                options={choreographerTypes}
                                name="dance-status-select"
                              /> 
                </SelectBtn>
            </MyLabel>
          </ButtonsFlexer>
          <ButtonsFlexer>
            <MyLabel>   טלפון נוסף
              <TextInput
                  placeholder=""
                  value={phoneNum}
                />
            </MyLabel>
          </ButtonsFlexer>
          
      </FormCol>
      <FormCol>
          <ButtonsFlexer>
            <MyLabel>אימייל
            <TextInput
                        placeholder=""
                        value={email}
                        onChange={ event => this.setDanceNameValue(event.target.value) }
                      />
            </MyLabel> 
          </ButtonsFlexer>
          <ButtonsFlexer>
            <MyLabel> תעודת זהות 
              <TextInput
                  placeholder=""
                  value={id}
                />
            </MyLabel>
          </ButtonsFlexer>
          <ButtonsFlexer>
            <MyLabel>  כתובת 
              <TextInput
                  placeholder=""
                  value={address}
                />
            </MyLabel>
          </ButtonsFlexer>
      </FormCol>
   </MainRow>
   <MainRow>
     <SubBtn onClick={this.toggleRegisterUser}>שלח בקשה</SubBtn>
   </MainRow>

   
   </WrapperDiv>
    )
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
  toggleRegisterRedux: (registerView) => dispatch(toggleUserRegisterAction(registerView))
});

export default connect( 
  mapStateToProps,
  mapDispatchToProps)(RegisterScreen);


const SubBtn = styled.button`
    padding: 12px;
    background-color: rgb(83,71,103);
    color: #FFFFFF;
    width: 200px;
    border-radius: 5em;
    height: auto;
    display: block;
    font-size: 15px;
    margin: 30px auto;
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
      width:100%;
      flex-direction:column;
    }

`;

const MyLabel = styled.label`
  width:auto;
  margin:5px 0px;
  color: rgb(152,135,152);
  text-align: right;

@media (max-width: 768px) {
   margin: 0px auto !important;
    width: 92%;
    }
`;