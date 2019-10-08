import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box'
import Select from 'react-select';

import styled from 'styled-components';

import { SongsWrapper } from '@appearance/styled';
import ButtonsGroup from '@components/ButtonsGroup';

//TODO: import assets 

let songsCounter = 2; 

export default class SongsScreen extends React.Component{ 
  constructor(){
    super()
    this.state = {
      customStyles: {
        control: (base, state) => ({
          ...base,
          background: "#FFFFFF",
          fontSize:"13px",
          fontColor:"grey",
          lineHeight:1,
          borderColor: state.isFocused ? "grey" : "grey",
          boxShadow: state.isFocused ? null : null,
          "&:hover": {
            borderColor: "#fd7c20"
          }
        })},
      selectedDanceStatusOption:null,
      danceStatuses:[
        {value: 1, label:'מאושר'},
        {value: 2, label: 'לא מאושר'},
        {value: 3, label: 'בבדיקה'}  
      ],      
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

  danceStatusChange = (selectedDanceStatusOption) => {
    this.setState({ selectedDanceStatusOption });
  };

  render(){
    let {mainButtons, search, data, customStyles, selectedDanceStatusOption, danceStatuses} = this.state;
    return(
      <SongsWrapper>
        <ButtonsGroup btnsArr={mainButtons}></ButtonsGroup>
       
        <SelectWrapper>
          <SelectRow>
              <SelectBtn>
                  <Select
                    styles={customStyles} 
                    autoFocus
                    placeholder='סטטוס ריקוד'
                    value={selectedDanceStatusOption}
                    onChange={this.danceStatusChange}
                    options={danceStatuses}
                    name="dance-status-select"
                  /> 
              </SelectBtn>
              <SelectBtn>
                  <Select
                    styles={customStyles} 
                    autoFocus
                    placeholder='סטטוס ריקוד'
                    value={selectedDanceStatusOption}
                    onChange={this.danceStatusChange}
                    options={danceStatuses}
                    name="dance-status-select"
                  /> 
              </SelectBtn>
              <SelectBtn>
                  <Select
                    styles={customStyles} 
                    autoFocus
                    placeholder='סטטוס ריקוד'
                    value={selectedDanceStatusOption}
                    onChange={this.danceStatusChange}
                    options={danceStatuses}
                    name="dance-status-select"
                  /> 
              </SelectBtn>
          </SelectRow>
          <SelectRow>
              <SelectBtn>
                  <Select
                    styles={customStyles} 
                    autoFocus
                    placeholder='סטטוס ריקוד'
                    value={selectedDanceStatusOption}
                    onChange={this.danceStatusChange}
                    options={danceStatuses}
                    name="dance-status-select"
                  /> 
              </SelectBtn>
              <SelectBtn>
                  <Select
                    styles={customStyles} 
                    autoFocus
                    placeholder='סטטוס ריקוד'
                    value={selectedDanceStatusOption}
                    onChange={this.danceStatusChange}
                    options={danceStatuses}
                    name="dance-status-select"
                  /> 
              </SelectBtn>
              <SelectBtn>
                  <Select
                    styles={customStyles} 
                    autoFocus
                    placeholder='סטטוס ריקוד'
                    value={selectedDanceStatusOption}
                    onChange={this.danceStatusChange}
                    options={danceStatuses}
                    name="dance-status-select"
                  /> 
              </SelectBtn>
          </SelectRow>
        </SelectWrapper>
        <ReactSearchBox
        styles={customStyles}
            placeholder="חיפוש חופשי..."
            onChangeText={()=>this.updateSearch(search)}
            value={search}
            data={data}
        />
      </SongsWrapper>
    )
  }
}

export const SelectWrapper = styled.div`
  display:inline-flex;
  flex-direction:column;
`;


export const SelectRow = styled.div`
  display:inline-flex;
  flex-direction:row;
  margin: 0.5rem 0;
`;

export const SelectBtn = styled.div`
  width:140px;
  font-size: 13px;
  font-weight:300;
  margin:0px 4px;
  color:#000000;
  & input {
    border:1px solid grey;
    padding: 10px;
`;

