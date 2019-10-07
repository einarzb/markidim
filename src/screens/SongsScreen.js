import React, { Component } from 'react';

import { SongsWrapper } from '@appearance/styled';
import ButtonsGroup from '@components/ButtonsGroup';

export default class SongsScreen extends React.Component{ 
  constructor(){
    super()
    this.state = {
      songsNum: null,
      mainButtons : [
        {label: 'רישום שיר חדש', span:'עוד ' + this.fetchSongsCounter(3) + ' שירים', onClick:this.registerSong, bgColor:'#ffb639'},
        {label: 'תשלום דמי חבר', span:'לשנת 2019', onClick:this.payMembershipFee, bgColor:'#aa60b5'},
      ]
    }
  }

  registerSong = () => {
    alert('register song here')
   // this.fetchSongsCounter(3);
  }

  fetchSongsCounter = (num) => {
    this.setState({songsNum:num})
    return num;
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

