import React, { Component } from 'react';
import styled from 'styled-components';
import { TextInput, TextArea } from 'grommet';


class EmailSettings extends React.Component{ 
  state = {

    textAreaText:"",
  };
  render(){
    let {value} = this.state;

    return(
      <Wrapper>
        <p>משך זמן שמירת שיר/ריקוד למשתמש (חודשים) 
          <span>12</span>
        </p>
        <MainRow>
             <MyLabelTextArea>
                תנאי שימוש
              <TextArea
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
                ברוכים הבאים לתוכנת רישום ריקודים
              <TextArea
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
                הסברים על אופן העבודה עם התוכנה
              <TextArea
                style={{ minHeight:'100px', direction:'rtl', textAlign:'right', margin: '2rem 0'}}
                placeholder="הקלד כאן"
                value={value}
                onChange={e => this.toy(e.target.value)}
              />
                           </MyLabelTextArea>
           </MainRow>
           <Button> עריכת תוכן </Button>


      </Wrapper>

    )
  }
}

export default EmailSettings;

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

const Wrapper = styled.div`
height: 100vh;
display: inline-table;
width: 100%;
background-color: #ebebeb;
@media (max-width: 768px) {
  display:block;
}
`;