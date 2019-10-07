import styled from 'styled-components';

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