import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleDanceListAction } from '@state/actions/index.js';

// STYLING
import styled from 'styled-components';

class UserDanceListScreen extends React.Component{
    state = {
    };
    
    toggleDanceList = () => {
      let { toggleDanceListRedux } = this.props; 
      let danceListView = !this.props.danceListView; 
      toggleDanceListRedux(danceListView);
    }
  

   
    render(){
        let {} = this.state;
        return (

        <WrapperDiv>
           <h2>רשימת הריקודים של </h2>
        
               
           <ControlButtons>
              <Button onClick={this.toggleDanceList} > חזרה למסך ראשי </Button>
          </ControlButtons>
        </WrapperDiv>
        );
    }
}

const mapStateToProps = (state) => {
  let props = {
    danceListView:state.usersReducer.danceListView
    }
    
    console.log('----im approve view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  toggleDanceListRedux:(danceListView) => dispatch(toggleDanceListAction(danceListView))
});

  export default connect( 
    mapStateToProps,
    mapDispatchToProps)(UserDanceListScreen);
  
  
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

