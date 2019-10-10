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
  justify-content:space-between;
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
  padding: 0.5rem 7rem;
  margin: 2rem 0;
  align-items: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;

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