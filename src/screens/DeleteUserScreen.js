import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleDeleteAction } from '@state/actions/index.js';


import { Box, RadioButton, TextArea } from 'grommet';

 

// STYLING
import styled from 'styled-components';

class DeleteUserScreen extends React.Component{
    state = {
        textAreaText:""
    };
    
    toy = (e) => {
      this.setState({textAreaText:e}) 
    }  

    toggleDelete= () => {
      let { toggleDeleteRedux } = this.props; 
      let deleteView = !this.props.deleteView; 
      toggleDeleteRedux(deleteView);
    }

    save = () => {
    console.log('will save data to db')
    this.toggleDelete();
    console.log('and abort')
    }
   
    render(){
        let {selected, textAreaText, value} = this.state;
        return (

        <WrapperDiv>
           <h2>מחק משתמש</h2>
        
                  <Box align='start'  direction="row">
                    {['כן','לא'].map(label => (
                  <Box key={label} margin={{horizontal: 'small'}}>   
                    <RadioButton
                        name='prop'
                        checked={selected === label}
                        label={label}
                        onChange={() => this.setState({selected:label})}
                      />
                  </Box>
                  ))}
                </Box> 
                {
                  selected ===  'לא'
                  ?
                  <div>

                  <h4>סיבת המחיקה</h4>
                  <TextArea
                    style={{width:'400px', minHeight:'200px', direction:'rtl', textAlign:'right'}}
                    placeholder="הקלד כאן"
                    value={value}
                    onChange={e => this.toy(e.target.value)}
                  />
                  </div>

                  :
                  <span></span>
                }

           <ControlButtons>
              <Button onClick={this.toggleDelete} > ביטול </Button>
              <Button onClick={this.save}> שמירה </Button>
          </ControlButtons>
        </WrapperDiv>
        );
    }
}

const mapStateToProps = (state) => {
  let props = {
    deleteView:state.usersReducer.deleteView
    }
    
    console.log('----im approve view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  toggleDeleteRedux: (deleteView) => dispatch(toggleDeleteAction(deleteView))
});

  export default connect( 
    mapStateToProps,
    mapDispatchToProps)(DeleteUserScreen);
  
  
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

