
import React from 'react';
import {ButtonsFlexer, MainButton} from '@appearance/styled';

const ButtonsGroup = ({btnsArr}) => {
    
  let buttonComponents = btnsArr.map(function(button, i) {
    return <MainButton key={i} onClick={button.onClick} style={{backgroundColor:button.bgColor}}>
           {button.label}
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