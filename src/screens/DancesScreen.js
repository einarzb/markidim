import React, { Component } from 'react';
import Select from 'react-select';

import {CREDIT_CARD, PLUS } from '@assets/index.js';
import ExpandingButton from '@components/ExpandingButton';
import ButtonsGroup from '@components/ButtonsGroup';
import MainSongsTable from '@components/MainSongsTable';

import styled from 'styled-components';
import { SongsWrapper, SelectBtn } from '@appearance/styled';
import RegisterSongScreen from './RegisterSongScreen';

let dancesCounter = 2; 
//let moreIcon = <img src={MORE} width="20"/>

export default class DancesScreen extends React.Component{ 
  constructor(){
    super()
    this.state = {
      customStyles: {
        control: (base, state) => ({
          ...base,
          background: "#FFFFFF",
          fontSize:"13px",
          fontColor:"grey",
          direction:"rtl",
          lineHeight:1,
          borderColor: state.isFocused ? "grey" : "grey",
          boxShadow: state.isFocused ? null : null,
          "&:hover": {
            borderColor: "#fd7c20"
          }
        })},
      expandedRowVisible:false,
      selectedDanceStatusOption:null,
      danceStatuses:[
        {value: 1, label:'מאושר'},
        {value: 2, label: 'לא מאושר'},
        {value: 3, label: 'בבדיקה'}  
      ],    
      dances:[
        {value: 1, label:'שיר1'},
        {value: 2, label: 'שיר2'},
        {value: 3, label: 'שיר3'}  
      ],  
      performers: [
        {value: 1, label:'מבצע1'},
        {value: 2, label: 'מבצע2'},
        {value: 3, label: 'מבצע3'} 
      ],   
      composers: [
        {value: 1, label:'מלחין1'},
        {value: 2, label: 'מלחין2'},
        {value: 3, label: 'מלחין3'} 
      ],  
      writers: [
        {value: 1, label:'משורר1'},
        {value: 2, label: 'משורר2'},
        {value: 3, label: 'משורר3'} 
      ],  
      choreographers: [
        {value: 1, label:'כוראוגרף1'},
        {value: 2, label: 'כוראוגרף2'},
        {value: 3, label: 'כוראוגרף3'} 
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
      dancesCounter: 3,
      //add icon to the object property
      mainButtons : [
        {label: 'רישום שיר חדש', span:'עוד ' + dancesCounter + ' שירים', onClick:this.registerDance, bgColor:'rgb(83,71,103)', icon:PLUS},
        {label: 'תשלום דמי חבר', span:'לשנת 2019', onClick:this.payMembershipFee, bgColor:'#192F3A', icon:CREDIT_CARD},
      ],
 
 
   
      registerFlag:false,
      //mock data
      filterOptions:[
        { value: 'זוגות', label: 'זוגות', color: '#FFFFFF', isFixed: false },
        { value: 'לא מאושר', label: 'לא מאושר', color: '#FFFFFF' },
        { value: 'תמיר שרצר', label: 'תמיר שרצר', color: '#FFFFFF' }
      ],
      tagStatus:"",
      tagSongName:"",
      tagPerformer:"",
      tagComposer:"",
      tagWriter:"",
      tagChoreographer:"",
      allTags: []


      
 
    }
  }
  

  showMore = () => {
    this.setState({
      expandedRowVisible: !this.state.expandedRowVisible
    })    
  }


  registerDance = () => {
    console.log('register song');
    this.setState({registerFlag:true});
        //this.updateSongsCounter(3);
  }

  updateDancesCounter = (num) => {
    this.setState({dancesCounter:num})
  }

  payMembershipFee = () => {
    alert('pay membership fee here')
  }

  danceStatusChange = (selectedDanceStatusOption) => {
    this.setState({ selectedDanceStatusOption, tagStatus:<Tag>{selectedDanceStatusOption.label }</Tag>});
  };

  danceChange = (selectedSongOption) => {
    this.setState({ selectedSongOption, tagSongName:<Tag>{selectedSongOption.label }</Tag>});
  };
  performerChange = (selectedPerformerOption) => {
    this.setState({ selectedPerformerOption, tagPerformer:<Tag>{selectedPerformerOption.label}</Tag> });
  };
  composersChange = (selectedComposerOption) => {
    this.setState({ selectedComposerOption, tagComposer:<Tag>{selectedComposerOption.label }</Tag>});
  };
  choreographersChange = (selectedChoreographerOption) => {
    this.setState({ selectedChoreographerOption, tagChoreographer:<Tag>{selectedChoreographerOption.label }</Tag>});
  };
  writersChange = (selectedWritersOption) => {
    this.setState({ selectedWritersOption, tagWriter:<Tag>{selectedWritersOption.label }</Tag>});
  };

  render(){
    let {mainButtons, customStyles, selectedDanceStatusOption, danceStatuses, selectedSongOption, dances, selectedPerformerOption, performers, composers, selectedComposerOption, choreographers, selectedChoreographerOption, writers, selectedWritersOption, headerCells, mockSongData, btns, mockSongData2, expandedRowVisible, filterOptions, tagStatus, tagSongName, tagPerformer, tagComposer, tagWriter, tagChoreographer, registerFlag } = this.state;   
    
    return(
      <div>
        {      
        registerFlag ? <RegisterSongScreen toggle={this.toggleRegister}/> :
      <Wrapper> 
        <SongsWrapper>
          <ButtonsGroup btnsArr={mainButtons}></ButtonsGroup>
          <SelectWrapper>
            <SelectRow>
              <label> &nbsp;
              <SelectBtn style={{width:'200px'}}>
                  <Select
                    placeholder='סינון חופשי'
                    styles={customStyles} 
                    closeMenuOnSelect={false}                          
                  // defaultValue={[filterOptions[0], filterOptions[1]]}
                    isMulti
                    options={filterOptions}
                  />
              </SelectBtn>
              </label>
              <label>
                סטטוס ריקוד
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
              </label>
              <label> שם שיר
                <SelectBtn>
                      <Select
                        styles={customStyles} 
                        autoFocus
                        placeholder='שם שיר'
                        value={selectedSongOption}
                        onChange={this.danceChange}
                        options={dances}
                        name="dance-status-select"
                      /> 
                  </SelectBtn>
              </label>
              <label>
                 שם מבצע 
                 <SelectBtn>
                    <Select
                      styles={customStyles} 
                      autoFocus
                      placeholder='שם מבצע'
                      value={selectedPerformerOption}
                      onChange={this.performerChange}
                      options={performers}
                      name="dance-status-select"
                    /> 
                </SelectBtn>
              </label>             
            </SelectRow>
            <SelectRow>
              <label>
              שם מלחין
              <SelectBtn>
                  <Select
                    styles={customStyles} 
                    autoFocus
                    placeholder='שם מלחין'
                    value={selectedComposerOption}
                    onChange={this.composersChange}
                    options={composers}
                    name="dance-status-select"
                  /> 
              </SelectBtn>
              </label>
              <label>
                שם משורר
              <SelectBtn>
                    <Select
                      styles={customStyles} 
                      autoFocus
                      placeholder='שם משורר'
                      value={selectedWritersOption}
                      onChange={this.writersChange}
                      options={writers}
                      name="dance-status-select"
                    /> 
              </SelectBtn>
               </label>
               <label>
                  שם מזמין  
              <SelectBtn>
                    <Select
                      styles={customStyles} 
                      autoFocus 
                      placeholder='שם מזמין'
                      value={selectedChoreographerOption}
                      onChange={this.choreographersChange}
                      options={choreographers}
                      name="dance-status-select"
                    /> 
              </SelectBtn>
              </label> 
            </SelectRow>

          

          </SelectWrapper>
      
        </SongsWrapper>
        <Tags>
           {tagChoreographer}
            {tagWriter}
           {tagComposer}
            {tagPerformer}
           {tagSongName}
            {tagStatus}
      
        </Tags>
        <MainSongsTable expanderFlag={expandedRowVisible} ></MainSongsTable>
      </Wrapper> 
      }
      </div>
    )
  }
}

export const Wrapper = styled.div`
  background-color:#ebebeb;
  padding: 0rem 0 2rem 0rem;
`;

export const SelectWrapper = styled.div`
  display:inline-flex;
  flex-direction:row-reverse; 
`;

export const Tags = styled.div`
  display:inline-flex;
  flex-direction:row;
  justify-content:space-between;
  width:auto;
  align-items:flex-start;

`;

export const Tag = styled.div`
  width: 100px;
  font-size: 14px;
  color: grey;
  background-color: rgba(225,225,225, 0.6);
  padding: 0px 2px;
  margin: 0rem 0.5rem 2rem;
  border-radius: 5em;
  display: block;
  border: 1px solid grey;
`;

export const SelectRow = styled.div`
  display:inline-flex;
  flex-direction:row-reverse;
  margin: 0.5rem 0;
  & label {
    font-size: 12px;
    text-align:right;
    color:rgb(152,135,152);
  }
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;
