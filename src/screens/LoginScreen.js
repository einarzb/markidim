import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLoginAction, toggleUserRegisterAction, toggleResetAction } from '@state/actions/index.js';
import styled from 'styled-components';
import { TextInput } from 'grommet';

import ResetPassword from '@screens/ResetPassword';
import RegisterScreen from '@screens/RegisterScreen';

class LoginScreen extends React.Component{ 
  state = {
    username:null,
    password:null
  };

  toggleLogin = () => {
    let { loginRedux } = this.props; 
    let loginView = !this.props.loginView;
    loginRedux(loginView);
  }

  toggleRegisterUser = () => {
    let { toggleRegisterRedux } = this.props; 
    let registerView = !this.props.registerView;
    toggleRegisterRedux(registerView);
  }

  toggleResetPassword = () => {
    let { toggleResetPasswordRedux } = this.props; 
    let resetPasswordView = !this.props.resetPasswordView;
    toggleResetPasswordRedux(resetPasswordView);
  }

  render(){
    let {registerView, resetPasswordView} = this.props;
    let {username, password} = this.state;
    return(
      <div>
        { 
           registerView ? <RegisterScreen toggle={this.toggleRegisterUser}/> : 
           resetPasswordView ? <ResetPassword toggle={this.resetPasswordView}/> :
      <WrapperDiv>
            <div>התחברות למערכת (למשתמשים קיימים)</div>
            <p>עדיין לא רשומים לאתר?
              <LinkBtn onClick={this.toggleRegisterUser}>הירשמו פה</LinkBtn>
            </p>
            <ButtonsFlexer>
              <label> שם משתמש
                  <TextInput
                    placeholder=""
                    value={username}
                    onChange={ event => this.setDanceNameValue(event.target.value) }
                  />
              </label>
            </ButtonsFlexer>

            <ButtonsFlexer>
                  <label>  ססמא
                      <TextInput
                        placeholder=""
                        value={password}
                        onChange={ event => this.setDanceNameValue(event.target.value) }
                      />
                  </label>
            </ButtonsFlexer>
            <SubBtn onClick={this.toggleLogin}>התחברות</SubBtn>
            <LinkBtn onClick={this.toggleResetPassword}>שכחתי ססמא</LinkBtn>
      </WrapperDiv>
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let props = {
    loginView:state.screensReducer.loginView,
    registerView:state.screensReducer.registerView,
    resetPasswordView:state.screensReducer.resetPasswordView
    }
    
    console.log('----im register view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  toggleRegisterRedux: (registerView) => dispatch(toggleUserRegisterAction(registerView)),
  loginRedux: (loginView) => dispatch(toggleLoginAction(loginView)),
  toggleResetPasswordRedux:(resetPasswordView) => dispatch (toggleResetAction(resetPasswordView))
});

export default connect( 
  mapStateToProps,
  mapDispatchToProps)(LoginScreen);

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

const LinkBtn = styled.button`
    background-color: transparent;
    text-decoration:underline;
    box-shadow:none;
    border:none;
    cursor:pointer;
`;