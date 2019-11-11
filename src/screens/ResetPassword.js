import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleResetAction } from '@state/actions/index.js';

import styled from 'styled-components';
import { TextInput } from 'grommet';
import MainScreen from '@screens/MainScreen';

class ResetPasswordScreen extends React.Component{ 
  state = {
    passwordVerification:null,
    password:null
  };
  passwordReset = () => {
    let { toggleResetPasswordRedux } = this.props; 
    let resetPasswordView = !this.props.resetPasswordView;
    toggleResetPasswordRedux(resetPasswordView);
  }
  render(){
    let {resetPasswordView } = this.props;
    let { password, passwordVerification } = this.state; 
    return(
        

   
      <WrapperDiv>
      <div>איפוס ססמא</div>

      <ButtonsFlexer>
        <label>  ססמא חדשה
            <TextInput
              placeholder=""
              value={password}
              onChange={ event => this.setDanceNameValue(event.target.value) }
            />
        </label>
      </ButtonsFlexer>

      <ButtonsFlexer>
            <label>  אימות ססמא
                <TextInput
                  placeholder=""
                  value={passwordVerification}
                  onChange={ event => this.setDanceNameValue(event.target.value) }
                />
            </label>
      </ButtonsFlexer>
      <SubBtn onClick={this.passwordReset}>איפוס ססמא</SubBtn>
</WrapperDiv>

    )
  }
}


const mapStateToProps = (state) => {
  let props = {
    resetPasswordView:state.screensReducer.resetPasswordView
    }
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  toggleResetPasswordRedux:(resetPasswordView) => dispatch (toggleResetAction(resetPasswordView))
});

export default connect( 
  mapStateToProps,
  mapDispatchToProps)(ResetPasswordScreen);


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
width: 400px;
direction: rtl;
@media (max-width: 768px) {
  width: auto;
}

& a {
  font-size: 12px;
}

text-align:center;
& h2 {
  text-align: right;
}


`;

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
