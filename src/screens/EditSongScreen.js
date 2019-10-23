import React, { Component } from 'react';

// STYLING
import styled from 'styled-components';

class EditSongScreen extends React.Component{
         state = {
            toggleEditScreen: true
          };
    

    toggleEdit = () => {
      console.log('im toggle');
      
      this.setState({
        toggleEditScreen: !this.state.toggleEditScreen,
      })
      console.log(this.state.toggleEditScreen);
      
    }
       

   
    render(){
        return (
        <WrapperDiv>
           <h2>עריכת פרטי ריקוד</h2>
           <ButtonsFlexer>
             סטטוס: 
           </ButtonsFlexer>
           <MainRow>
              <FormCol>
                  <ButtonsFlexer>
                    <div>שם ריקוד: </div>
                    <div>אהבתיה</div>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                     <div>מוזמן ע״י: </div>
                      <div>תמיר שרצר</div>
                  </ButtonsFlexer>

                  <ButtonsFlexer>
                    <div>שם שיר מקורי: </div>
                    <div> אהבתיה </div>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                    <div> שם מלחין</div>
                    <div> יעקב הולנדר </div>
                  </ButtonsFlexer>

                  <ButtonsFlexer>
                    <div>מס יצירה אקו״ם</div>
                    <div> שם משורר</div>
                  </ButtonsFlexer>
                  <ButtonsFlexer>
                    <div>מחברים נוספים</div>
                    <div> שם מבצע</div>
                  </ButtonsFlexer>
              </FormCol>
              <FormCol>
              <ButtonsFlexer>
                <div> שנת יצירה</div>
                <div> שם יצירה מקורי</div>
              </ButtonsFlexer>
              <ButtonsFlexer>
                <div>  מס׳ יצירה מקורי אקו״ם </div>
              </ButtonsFlexer>
              <ButtonsFlexer>
                <div>לינק לסרטון שיר מקורי </div>
              </ButtonsFlexer>
              <ButtonsFlexer>
                <div>לינק לסרטון ריקוד </div>
              </ButtonsFlexer>
              <ButtonsFlexer>
                <div>לינק למילות שיר </div>
              </ButtonsFlexer>
              <ButtonsFlexer>
                    <div> תאריך הזמנה</div>
                    <div> 21/06/19</div>
                  </ButtonsFlexer>

                  <div>תאריך הפיכה לריקוד קיים</div>

            </FormCol>
           </MainRow>
           <ControlButtons>
              <Button onClick={this.toggleEdit}> ביטול </Button>
              <Button> שמירה </Button>
          </ControlButtons>
        </WrapperDiv>
      
        );
    }
}

  export default EditSongScreen;
  
  
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
    width: 50%;
    margin:0px auto;
    direction:rtl;
    & div {
      text-align:right;
      margin: 0.5rem;
    }
`;

const ControlButtons = styled.div`
    display:inline-flex;
    flex-direction:row;
    width: auto;
    margin: 1rem 0;
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
    width:50%;

`; 

const MainRow = styled.div`
display:inline-flex;
flex-direction:row-reverse;
width:70%;

`;