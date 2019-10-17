import React, { Component } from 'react';

// STYLING
import styled from 'styled-components';

export class EditSongScreen extends React.Component{
    constructor(props){
        super(props)
    }

   
    render(){
       // let { poweroffInProgress, rebootStartTime } = this.state;             
        return (
        <WrapperDiv>
           <p>עריכת פרטי ריקוד</p>
           <ButtonsFlexer>
             סטטוס: 
           </ButtonsFlexer>
           <ButtonsFlexer>
             <div>שם ריקוד</div>
             <div>מוזמן ע״י</div>
           </ButtonsFlexer>
           <ButtonsFlexer>
             <div>שם שיר מקורי</div>
             <div> שם מלחין</div>
           </ButtonsFlexer>
           <ButtonsFlexer>
             <div>מס יצירה אקו״ם</div>
             <div> שם משורר</div>
           </ButtonsFlexer>
           <ButtonsFlexer>
             <div>מחברים נוספים</div>
             <div> שם מבצע</div>
           </ButtonsFlexer>
           <ButtonsFlexer>
             <div> תאריך הזמנה</div>
             <div>תאריך הפיכה לריקוד קיים</div>
           </ButtonsFlexer>
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
        </WrapperDiv>
        );
    }
}

  export default EditSongScreen;
  
  
const WrapperDiv = styled.div`
    display: block;
    align-items: center;
    padding-top:0px auto;
    margin: 0px auto;
    background-color:#FFFFFF;
    width: 600px;
    text-align:center;
`;

const ButtonsFlexer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content:space-evenly;
    direction:rtl;
    & div {
      width: 50%;
      border:1px solid red;
      text-align:right;
      margin: 0.5rem 0;
    }
`;