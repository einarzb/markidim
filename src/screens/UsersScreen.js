import React, { Component } from 'react';

import ButtonsGroup from '@components/ButtonsGroup';
import styled from 'styled-components';
import { SongsWrapper, SelectBtn, SearchSelectBtn, Wrapper, SelectWrapper } from '@appearance/styled';
import Select from 'react-select';
import MainUsersTable from '@components/MainUsersTable';


class UsersScreen extends React.Component{ 
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
      mainButtons : [
        {label: 'ייצא רשימת משתמשים', onClick:this.downloadFile, bgColor:'rgb(83,71,103)'}
      ],
      selectedDanceStatusOption:null,
      selectedOrderNumOption:null,
      selectedComposerOption:null,
      selectedChoreographerOption:null,
      filterOptions:[
        { value: 'מרקיד', label: 'מרקיד', color: '#FFFFFF', isFixed: false },
        { value: 'לא מאושר', label: 'לא מאושר', color: '#FFFFFF' },
        { value: 'תמיר שרצר', label: 'תמיר שרצר', color: '#FFFFFF' }
      ],
      choreographerStatuses:[
        {value: 1, label:'מאושר'},
        {value: 2, label: 'לא מאושר'},
        {value: 3, label: 'בבדיקה'}  
      ], 
      choreographerType:[
        {value: 1, label:'מנהל'},
        {value: 2, label: 'מרקיד'},
        {value: 3, label: 'לא מרקיד'}  
      ], 
      ordersNum:[
        {value: 1, label:'1'},
        {value: 2, label: '2'},
        {value: 3, label: '3'}  
      ], 
      composerName:[
        {value: 1, label:'מלחין 1'},
        {value: 2, label: '2 מלחין'},
        {value: 3, label: '3 מלחין'}  
      ], 
    }
  }
  render () {
    let {mainButtons, customStyles, filterOptions, selectedDanceStatusOption, choreographerType, ordersNum, composerName, selectedOrderNumOption, selectedComposerOption, selectedChoreographerOption , choreographerStatuses} = this.state;
    return(
      <Wrapper> 
          
          <ButtonsGroup btnsArr={mainButtons}></ButtonsGroup>
          <SongsWrapper>
              <SelectWrapper>
                <h2>מערכת איתור משתמשים</h2>
                <SelectRow style={{ alignItems: 'flex-end'}}>
                  <label> &nbsp;
                  <SearchSelectBtn>
                      <Select
                        placeholder='סינון חופשי'
                        styles={customStyles} 
                        closeMenuOnSelect={true}                          
                      // defaultValue={[filterOptions[0], filterOptions[1]]}
                        isMulti
                        options={filterOptions}
                       // value = {selectedDanceStatusOption}
                      />
                  </SearchSelectBtn>
                  </label>
                  <ButtonsGroup btnsArr={mainButtons}></ButtonsGroup>

                  </SelectRow>
                  <SelectRow style={{marginTop:'1rem'}}>
                  <label>
                     סוג משתמש
                    <SelectBtn>
                        <Select
                          placeholder='סוג משתמש'
                        //  styles={customStyles} 
                          autoFocus
                         // value={selectedChoreographerOption}
                          //onChange={this.danceStatusChange}
                          options={choreographerType}
                          isMulti
                          name="dance-status-select"
                        /> 
                    </SelectBtn>
                  </label>
                  <label>  סטטוס משתמש
                  <SelectBtn>
                          <Select
                            //styles={customStyles} 
                            autoFocus
                            placeholder='סטטוס משתמש'
                           // value={selectedDanceStatusOption}
                          // onChange={this.danceChange}
                            options={choreographerStatuses}
                            isMulti
                            name="dance-status-select"
                          /> 
                      </SelectBtn>
                  </label>
                  <label>
                     שם מלחין 
                    <SelectBtn>
                        <Select
                          //styles={customStyles} 
                          autoFocus
                          placeholder='שם מלחין'
                         // value={selectedComposerOption}
                          //onChange={this.performerChange}
                          options={composerName}
                          isMulti
                          name="dance-status-select"
                        /> 
                    </SelectBtn>
                  </label>             
              
                  <label>
                   מס׳ הזמנות במקביל
                  <SelectBtn>
                      <Select
                        //styles={customStyles} 
                        autoFocus
                        placeholder='מס׳ הזמנות במקביל'
                       // value={selectedOrderNumOption}
                        //onChange={this.composersChange}
                        options={ordersNum}
                        isMulti
                        name="dance-status-select"
                      /> 
                  </SelectBtn>
                  </label>
                
                </SelectRow>
              </SelectWrapper>
            </SongsWrapper>
          <MainUsersTable></MainUsersTable>
        </Wrapper>
    )
  }
}

export default UsersScreen;


export const SelectRow = styled.div`
  display:inline-flex;
  flex-direction:row-reverse;
  margin: 0;
  justify-content:flex-start;
  width: 100%;
  & label {
    font-size: 12px;
    text-align:right;
    color:rgb(152,135,152);
  }
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;