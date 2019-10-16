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
  width:100px;
  margin: 10px;
  justify-content:space-between;
  color: #FFFFFF;
  text-align:center;
  & a {
    color: #FFFFFF;
    text-decoration:none;
    text-align:center;
  }
`;

export const Header = styled.div`
  display:inline-flex;
  flex-direction:row;
  width:auto;
  justify-content:space-between;
  text-align:right;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const SongsWrapper = styled.div`
  display:inline-flex;
  flex-direction:row;
  width:100%;
  justify-content:space-evenly;
  padding: 0.5rem 0rem;
  margin: -1rem 0 1rem;
  align-items: center;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  background-color:#ebebeb;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }

`;

export const ButtonsFlexer = styled.div`
  display: inline-flex; 
  flex-direction: row;
  width: auto;
  margin: 15px 0px;
  justify-content:space-between;
  padding:0px;
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