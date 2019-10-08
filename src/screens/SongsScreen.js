import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box'
import { SongsWrapper } from '@appearance/styled';
import ButtonsGroup from '@components/ButtonsGroup';
//TODO: import assets 

let songsCounter = 2; 

export default class SongsScreen extends React.Component{ 
  constructor(){
    super()
    this.state = {
      search: '',
      data: [
        {
          key: 'john',
          value: 'John Doe',
        },
        {
          key: 'jane',
          value: 'Jane Doe',
        },
        {
          key: 'mary',
          value: 'Mary Phillips',
        },
        {
          key: 'robert',
          value: 'Robert',
        },
        {
          key: 'karius',
          value: 'Karius',
        },
      ],
      songsCounter: 3,
      //add icon to the object property
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

  updateSearch = (search) => {
    console.log('yo');
    console.log(search);
    
    this.setState({ search });
  };

  render(){
    let {mainButtons, search, data} = this.state;
    return(
      <SongsWrapper>
        <ButtonsGroup btnsArr={mainButtons}></ButtonsGroup>
        <ReactSearchBox
            placeholder="חיפוש חופשי..."
            onChangeText={()=>this.updateSearch(search)}
            value={search}
            data={data}
        />

      </SongsWrapper>
    )
  }
}

