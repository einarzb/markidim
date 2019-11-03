import styled from 'styled-components';
import {Button} from 'grommet/components/Button'

export const COLOR_PRIMARY = '#fd7c20'; 
  
export const myTheme = {
  global: {
    colors:{
      brand: COLOR_PRIMARY
    },
    select:{
      options:{
      container:{
       zIndex:9999
      }
    }
  }
  }
};

export const Tab = styled.li`
  list-style-type:none;
  display:inline-flex;
  flex-direction:row;
  width:50px;
  margin: 10px;
  justify-content:space-between;
  color: #FFFFFF;
  text-align:center;
  @media (max-width: 768px) {
    width:40px;
  }
  & a {
    color: #FFFFFF;
    text-decoration:none;
    text-align:center;
    width: 100%;
  }
  & button {
    background-color:transparent;
    border:none;
    cursor:pointer;
    width: 30px;
    color:#FFFFFF;
    font-family:'Arial';
    display:inline-flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  } & 
   img {
    width: 15px;
    height: auto;
  } & span {
    margin: 0px 8px;
    font-size: 15px;
    border:1px solid #FFFFFF;
    padding: 5px;
    
  }
`;

export const Header = styled.div`
  display:inline-flex;
  flex-direction:row;
  width:auto;
  justify-content:space-between;
  text-align:right;
  padding-top: 0.5rem;
  & h2 {
    color:#521d50;
    font-weight:400;
  }
  @media (max-width: 768px) {
    display: inline-flex;
    flex-direction: column-reverse;
    text-align: center;
    font-size: 1em;
    line-height: 1;
    & img {
      width: 60px;
      display: block;
      margin: 1rem auto 0;
    }
  }
`;

export const EnglishHeader = styled.div`
  display:block;
  margin:-1rem 0rem 0 -2rem;
  color:rgb(152, 135, 152);
  width:100%;
  text-align:center;
  @media (max-width: 768px) {
    margin: -0.5rem 0rem 1rem 0rem;
    font-size: 1rem;
  }
`;

export const SongsWrapper = styled.div`
  display:inline-flex;
  flex-direction:row;
  width:100%;
  justify-content:space-around;
  padding: 0.5rem 0rem 0px;
  margin: -1rem 0 0rem;
  align-items: center;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  background-color:#ebebeb;
  position:relative;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }

`;

export const ButtonsFlexer = styled.div`
  display: inline-flex; 
  flex-direction: row;
  width: auto;
  margin: -1rem 4rem;
  justify-content:space-between;
  padding:0px;
  position:absolute;
  left: 0%;
  @media (max-width: 768px) {
    margin: -4rem 0rem;
    font-size: 14px;
    top: 12%;
    left: 5%;
  }
`;

export const MainButton = styled(Button)` 
  background-color:#ffb639;
  color:#FFFFFF;
  border:1px solid transparent;
  border-radius: 1rem;
  display:inline-flex;
  flex-direction:column;
  color: #00000;
  width: auto;
  padding: 5px 10px;
  margin: 10px;
  align-items:center; 
  & span {
    font-size: 14px;
  }
`;

export const SelectBtn = styled.div`
  width:112px;
  font-size: 13px;
  font-weight:300;
  margin:0px 4px;
  color:#000000;
  min-width:165px;
  width:auto;

  @media (max-width: 768px) {
    width: auto;
  }
  & input {
    border:1px solid grey;
    padding: 10px;
`;

export const SearchSelectBtn = styled.div`
  width:540px;
  font-size: 13px;
  font-weight:300;
  margin:0px 4px;
  color:#000000;
  min-width:165px;

  @media (max-width: 768px) {
    width: 330px;
  }
 
`;


    