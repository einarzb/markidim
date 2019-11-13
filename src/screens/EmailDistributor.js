
import React, { Component } from 'react';
import styled from 'styled-components';
import { TextInput, TextArea } from 'grommet';
import { SelectBtn, SearchSelectBtn } from '@appearance/styled';
import Select from 'react-select';


class EmailDistributor extends React.Component{ 
  state = {
    mailingList:[
      { value: 'כל המשתמשים', label: 'כל המשתמשים' },
      { value: 'משתמשים מושהים', label: 'משתמשים מושהים'},
      { value: 'משתמשים נעולים', label: 'משתמשים נעולים' },
       { value: 'אדמינים', label: 'אדמינים' },
       { value: 'משתמשים בתהליך אישור שיר', label: 'משתמשים בתהליך אישור שיר' }
    ],
    headerEmail:""
  };
  render(){
    let {mailingList, value, headerEmail} = this.state;

    return(
      <div style={{    height: '100vh'      }}>
                       <Header>הגדרות שליחת אימייל</Header>

        <MainRow>
        <MyLabel>
      רשימת נמענים
                    <SelectBtn>
                      <Select
                        //styles={customStyles} 
                        autoFocus
                        placeholder='כל המשתמשים'
                       // value={selectedOrderNumOption}
                        //onChange={this.composersChange}
                        options={mailingList}
                        isMulti
                        name="dance-status-select"
                      /> 
                  </SelectBtn>
                  </MyLabel>
                </MainRow>
                <MainRow style={{direction:'rtl', textAlign:"right"}}>

              <TextInput
                  placeholder="כותרת האימייל"
                  value={headerEmail}
                />
                                </MainRow>

                <MainRow>
                  <TextArea
              style={{ minHeight:'100px', direction:'rtl', textAlign:'right', margin: '2rem 0'}}
              placeholder="גוף ההודעה "
              value={value}
              onChange={e => this.toy(e.target.value)}
            />
         </MainRow>
         <ButtonsFlexer>
         <Button> עריכת תוכן </Button>
         <Button> ביטול </Button>
         <Button style={{backgroundColor:'rgb(152,135,152)', color:'#FFFFFF'}}> שליחה </Button>

          </ButtonsFlexer>
          

      </div>

    )
  }
}

export default EmailDistributor;

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
margin: 5px 0px 1rem;
font-size: 15px;
color: rgb(152,135,152);
@media (max-width: 768px) {
  width: 100%;
}
`;

const MyLabelTextArea = styled(MyLabel)`
  width: 90%;

`;



const Header = styled.h2`
    margin: 0;
    text-align: right;
    color: rgb(152,135,152);
    font-weight: 400;
`;


const ButtonsFlexer = styled.div`
    display: inline-flex;
    flex-direction:row;
    width: 55%;
    direction:rtl;
    align-items:center;
    font-size: 15px;
    @media (max-width: 768px) {
      width: 80%;
    }
    & label {
      text-align:right;
      margin: 5px 0px;
      color:rgb(152,135,152);
    }
  
      & input{
        font-weight:100;
      }
    
  
`;

const Button = styled.div`
    border:1px solid rgb(152,135,152);;
    border-radius: 5em;
    background-color:#FFFFFF;
    height: auto;
    color:rgb(152,135,152);
    padding: 0.5rem;
    border-radius: 5em;
    cursor:pointer;
    width: 120px;
    margin: auto;
    text-align: center;
    @media (max-width: 768px) {
       margin: 0 5px;
    }

`;