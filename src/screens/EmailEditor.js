import React, { Component } from 'react';
import styled from 'styled-components';
import { TextInput, TextArea } from 'grommet';


class EmailEditor extends React.Component{ 
  state = {

    textAreaText:"",
  };
  render(){
    let {value} = this.state;

    return(
      <div>
      <MainRow>
           <MyLabelTextArea>
הודעה למשתמש על ריקוד מאושר על ידי ההנהלה            <TextArea
              style={{ minHeight:'100px', direction:'rtl', textAlign:'right', margin: '2rem 0'}}
              placeholder="הקלד כאן"
              value={value}
              onChange={e => this.toy(e.target.value)}
            />
                         </MyLabelTextArea>
         </MainRow>
         <Button> עריכת תוכן </Button>
         <MainRow>
           <MyLabelTextArea>
הודעה למשתמש על ריקוד שנדחה על ידי ההנהלה            <TextArea
              style={{ minHeight:'100px', direction:'rtl', textAlign:'right', margin: '2rem 0'}}
              placeholder="הקלד כאן"
              value={value}
              onChange={e => this.toy(e.target.value)}
            />
                         </MyLabelTextArea>
         </MainRow>
         <Button> עריכת תוכן </Button>
         <MainRow>
           <MyLabelTextArea>
הודעה למשתמש שהריקוד הרשום עליו בקרוב יפוג            <TextArea
              style={{ minHeight:'100px', direction:'rtl', textAlign:'right', margin: '2rem 0'}}
              placeholder="הקלד כאן"
              value={value}
              onChange={e => this.toy(e.target.value)}
            />
                         </MyLabelTextArea>
         </MainRow>
         <Button> עריכת תוכן </Button>


    </div>

    )
  }
}

export default EmailEditor;

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


const Button = styled.div`
    border:1px solid rgb(152,135,152);;
    border-radius: 5em;
    background-color:#FFFFFF;
    width: 120px;
    height: auto;
    color:rgb(152,135,152);
    padding: 0.5rem;
    margin: 0px 24rem;
    border-radius: 5em;
    cursor:pointer;
    @media (max-width: 768px) {
      margin: 0px 16rem 10px;
      font-size: 1rem;
      padding: 5px;
    }

`;