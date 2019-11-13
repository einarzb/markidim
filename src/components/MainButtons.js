
import React from 'react';
import { MainButton} from '@appearance/styled';
import styled from 'styled-components';

const MainButtons = ({btnsArr, songsCounter}) => {
    
  let buttonComponents = btnsArr.map(function(button, i) {
    return <MainButton key={i} onClick={button.onClick} style={{backgroundColor:button.bgColor}}>
        <div style={{display:"inline-flex", flexDirection:"row-reverse", direction:'rtl'}}> 
        {button.label} 
        {
          button.icon
          ?
          <img src={button.icon} style={{margin:'3px 5px',width:'20px', height:'20px'}}/>
          : 
          <img src={button.icon} style={{display:'none'}}/>
         }
        </div>

           {/** {songsCounter} */}
           <span> {button.span}</span>
    </MainButton>
  })

  return(
    <Wrap> 
      {buttonComponents}
    </Wrap>
  )
}

export default MainButtons;

const Wrap = styled.div`
  display:inline-flex;
  @media (max-width: 768px) {
    display:inline-grid;
  }
`;