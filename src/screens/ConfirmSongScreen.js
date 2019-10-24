import React, { Component } from 'react';
import { Box, RadioButton, TextArea } from 'grommet';

 

// STYLING
import styled from 'styled-components';

class ConfirmSongScreen extends React.Component{
         state = {
              textAreaText:""
          };
    
    toy = (e) => {
      this.setState({textAreaText:e})
    }      

   
    render(){
        let {selected, textAreaText, value} = this.state;
        console.log(selected)
        return (

        <WrapperDiv>
           <h2> אישור ריקוד</h2>
        
                  <Box align='start'  direction="row">
                    {['אשר','דחה'].map(label => (
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
                  selected ===  'דחה'
                  ?
                  <div>

                  <h4>סיבת הדחייה</h4>
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
              <Button onClick={this.toggleConfirm} > ביטול </Button>
              <Button> שמירה </Button>
          </ControlButtons>
        </WrapperDiv>
        );
    }
}

  export default ConfirmSongScreen;
  
  
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

