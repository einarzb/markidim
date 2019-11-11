import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import ButtonsGroup from '@components/ButtonsGroup';

import RegisterScreen from '@screens/RegisterScreen';
import LoginScreen from '@screens/LoginScreen';

import { toggleUserRegisterAction, toggleLoginAction } from '@state/actions/index.js';


class MainScreen extends React.Component{ 
  constructor(){
    super()
    this.state = {
      mainButtons : [
        {label: 'עדיין לא רשומים לאתר?', span:'הירשמו פה', onClick:this.toggleRegisterUser, bgColor:'#192F3A', icon:''},
        {label: 'כניסה למערכת', span:'למשתמשים רשומים', onClick:this.toggleLogin, bgColor:'rgb(83,71,103)', icon:''}
      ],
    }
  }
  toggleRegisterUser = () => {
    let { toggleRegisterRedux } = this.props; 
    let registerView = !this.props.registerView;
    toggleRegisterRedux(registerView);
  }

  toggleLogin = () => {
    let { loginRedux } = this.props; 
    let loginView = !this.props.loginView;
    loginRedux(loginView);
  }


  render(){
    let {registerView, loginView} = this.props;
    let {mainButtons} = this.state;
    return(
        <div>
        {
        registerView ? <RegisterScreen toggle={this.toggleRegisterUser}/> :     
        loginView ? <LoginScreen toggle={this.toggleLogin}/> :     

      <div>
        <MainPageWrapper>
        <ButtonsGroup btnsArr={mainButtons}></ButtonsGroup>

       <h2>ארגון המדריכים והיוצרים לריקודי עם</h2>
       <h4>ברוכים הבאים למערכת רישום הריקודים של ארגון המדריכים והיוצרים!</h4>
       <p>
אנו שמחים להצטרפותך למערכת, בה תוכל באופן ישיר לרשום ריקודים, לראות ולקבל את כל המידע הדרוש לך.
כדי להשתמש באתר זה עליך להיות חבר בארגון המרקידים והכוריאוגרפים לריקודי עם ולשלם דמי חבר כמרקיד, או יוצר שאינו מרקיד, ליו״ר ועדת הכספים - רפי כחלון בסך 300 ש״ח.
       </p>
       <p>
         התשלום צריך להיעשות מיידית בכל תחילנת שנה אזרחית בינואר.
         במידה ולא שילמתם, לא תוכלו להשתמש בשרותינו והריקודים המוזמנים על שמך - ישוחררו.
       </p>
       <h5>אז איך זה עובד?</h5>
       <p>
         כדי לדעת כמה ריקודים אתה יכול לרשום, עליך להיכנס ל״פרטים אישיים״ ושם מצויין כמה ריקודים אתם רשאים להזמין ולרשום על שמכם.
        את המדרג קבעו ועדת יוצרים בראשות ויקטור גבאי, במידה ואתם רוצים לערער, עליכם לפנות ליושב ראש ועדת יוצרים והעדה תדון ותחליט בהתאם.
       </p>
       <h5>יש 3 שלבים לשיר</h5>
       <p>
         <ul>
           <ol>מוזמנים - שהזמנתם אך עוד לא קיבלתם אישור</ol>
           <ol>מאושרים - השיר רשום על המזמין ומאושר לו אך עוד לא יצא בהשתלמות או מחנה</ol>
           <ol>ריקוד קיים - ריקוד שכבר עבר השתלמות או מחנה בחו״ל</ol>
         </ul>
       </p>
     </MainPageWrapper>
     </div>
        }
     </div>
         
    )
  }
}


const mapStateToProps = (state) => {
  let props = {
    registerView:state.screensReducer.registerView,
    loginView:state.screensReducer.loginView

    }
    
    console.log('----im props view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};


const mapDispatchToProps = (dispatch) => ({  
  toggleRegisterRedux: (registerView) => dispatch(toggleUserRegisterAction(registerView)),
  loginRedux: (loginView) => dispatch(toggleLoginAction(loginView))

});

export default connect (
  mapStateToProps,
mapDispatchToProps)
(MainScreen);



const MainPageWrapper = styled.div`
  text-align:right;
  direction:rtl;
  width: 80%;
  display:block;
  margin: 0px auto;
  @media (max-width: 768px) {
    margin-top:6rem;

  }
`;

