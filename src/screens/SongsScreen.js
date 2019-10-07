import React, { Component } from 'react';

import { SongsWrapper } from '@appearance/styled';
import ButtonsGroup from '@components/ButtonsGroup';

let songsCounter = 2; 

export default class SongsScreen extends React.Component{ 
  constructor(){
    super()
    this.state = {
      songsCounter: 3,
      mainButtons : [
        {label: 'רישום שיר חדש', span:'עוד ' + songsCounter + ' שירים', onClick:this.registerSong, bgColor:'#ffb639'},
        {label: 'תשלום דמי חבר', span:'לשנת 2019', onClick:this.payMembershipFee, bgColor:'#aa60b5'},
      ]
    }
  }

  registerSong = () => {
    alert('register song here')
    //this.updateSongsCounter(3);
  }

  updateSongsCounter = (num) => {
    this.setState({songsCounter:num})
  }

  payMembershipFee = () => {
    alert('pay membership fee here')
  }

  render(){
    let {mainButtons} = this.state;
    return(
      <SongsWrapper>
        <ButtonsGroup btnsArr={mainButtons}></ButtonsGroup>
      </SongsWrapper>
    )
  }
}

