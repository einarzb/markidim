
import React from 'react';
import {ButtonsFlexer, MainButton} from '@appearance/styled';

const ButtonsGroup = ({btnsArr, songsCounter}) => {
    
  let buttonComponents = btnsArr.map(function(button, i) {
    return <MainButton key={i} onClick={button.onClick} style={{backgroundColor:button.bgColor}}>
        <div style={{display:"inline-flex", flexDirection:"row-reverse"}}> 
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
    <ButtonsFlexer> 
      {buttonComponents}
    </ButtonsFlexer>
  )
}

export default ButtonsGroup;