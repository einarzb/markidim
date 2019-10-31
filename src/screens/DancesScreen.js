import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleRegisterAction } from '@state/actions/index.js';


import Select from 'react-select';

import {CREDIT_CARD, PLUS } from '@assets/index.js';
import ExpandingButton from '@components/ExpandingButton';
import ButtonsGroup from '@components/ButtonsGroup';
import MainSongsTable from '@components/MainSongsTable';

import styled from 'styled-components';
import { SongsWrapper, SelectBtn } from '@appearance/styled';
import RegisterSongScreen from './RegisterSongScreen';

let dancesCounter = 2; 

class DancesScreen extends React.Component{ 
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
      selectedDanceStatusOption:null,
     
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
        {label: 'רישום שיר חדש', span:'עוד ' + dancesCounter + ' שירים', onClick:this.toggleRegister, bgColor:'rgb(83,71,103)', icon:PLUS},
        {label: 'תשלום דמי חבר', span:'לשנת 2019', onClick:this.payMembershipFee, bgColor:'#192F3A', icon:CREDIT_CARD},
      ],
 
 
   
      //mock data
      filterOptions:[
        { value: 'זוגות', label: 'זוגות', color: '#FFFFFF', isFixed: false },
        { value: 'לא מאושר', label: 'לא מאושר', color: '#FFFFFF' },
        { value: 'תמיר שרצר', label: 'תמיר שרצר', color: '#FFFFFF' }
      ],
      danceStatuses:[
        {value: 1, label:'מאושר'},
        {value: 2, label: 'לא מאושר'},
        {value: 3, label: 'בבדיקה'}  
      ],  


      
 
    }
  }
  


  toggleRegister= () => {
    let { toggleRegisterRedux } = this.props; 
    let registerSongView = !this.props.registerSongView; 
    toggleRegisterRedux(registerSongView);
  }


  updateDancesCounter = (num) => {
    this.setState({dancesCounter:num})
  }

  payMembershipFee = () => {
    alert('pay membership fee here')
  }

  //TODO : make a generic function that get params

  danceStatusChange = (selectedDanceStatusOption) => {
    this.setState({ selectedDanceStatusOption});
  };

  danceChange = (selectedSongOption) => {
    this.setState({ selectedSongOption});
  };
  performerChange = (selectedPerformerOption) => {
    this.setState({ selectedPerformerOption,});
  };
  composersChange = (selectedComposerOption) => {
    this.setState({ selectedComposerOption});
  };
  choreographersChange = (selectedChoreographerOption) => {
    this.setState({ selectedChoreographerOption});
  };
  writersChange = (selectedWritersOption) => {
    this.setState({ selectedWritersOption});
  };

  render(){
    let {mainButtons, customStyles, selectedDanceStatusOption, danceStatuses, selectedSongOption, dances, selectedPerformerOption, performers, composers, selectedComposerOption, choreographers, selectedChoreographerOption, writers, selectedWritersOption, filterOptions } = this.state;   
    let {registerSongView} = this.props;

    return(
      <div>
        {      
        registerSongView ? <RegisterSongScreen toggle={this.toggleRegister}/> :
          <Wrapper> 

            <SongsWrapper>
              <SelectWrapper>
                <SelectRow style={{ alignItems: 'flex-end'}}>
                  <label> &nbsp;
                  <SelectBtn style={{width:'540px'}}>
                      <Select
                        placeholder='סינון חופשי'
                        styles={customStyles} 
                        closeMenuOnSelect={true}                          
                      // defaultValue={[filterOptions[0], filterOptions[1]]}
                        isMulti
                        options={filterOptions}
                      />
                  </SelectBtn>
                  </label>
                  <ButtonsGroup btnsArr={mainButtons}></ButtonsGroup>

                  </SelectRow>
                  <SelectRow style={{marginTop:'1rem'}}>
                  <label>
                    סטטוס ריקוד
                    <SelectBtn>
                        <Select
                          placeholder='סטטוס ריקוד'
                        //  styles={customStyles} 
                          autoFocus
                          //value={selectedDanceStatusOption}
                          //onChange={this.danceStatusChange}
                          options={danceStatuses}
                          isMulti
                          name="dance-status-select"
                        /> 
                    </SelectBtn>
                  </label>
                  <label> שם שיר
                  <SelectBtn>
                          <Select
                            //styles={customStyles} 
                            autoFocus
                            placeholder='שם שיר'
                          // value={selectedSongOption}
                          // onChange={this.danceChange}
                            options={dances}
                            isMulti
                            name="dance-status-select"
                          /> 
                      </SelectBtn>
                  </label>
                  <label>
                    שם מבצע 
                    <SelectBtn>
                        <Select
                          //styles={customStyles} 
                          autoFocus
                          placeholder='שם מבצע'
                          //value={selectedPerformerOption}
                          //onChange={this.performerChange}
                          options={performers}
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
                        //value={selectedComposerOption}
                        //onChange={this.composersChange}
                        options={composers}
                        isMulti
                        name="dance-status-select"
                      /> 
                  </SelectBtn>
                  </label>
                  <label>
                    שם משורר
                    <SelectBtn>
                        <Select
                          //styles={customStyles} 
                          autoFocus
                          isMulti
                          placeholder='שם משורר'
                          //value={selectedWritersOption}
                          //onChange={this.writersChange}
                          options={writers}
                          name="dance-status-select"
                        /> 
                  </SelectBtn>
                  </label>
                  <label>
                      שם מזמין  
                  <SelectBtn>
                        <Select
                          //styles={customStyles} 
                          autoFocus 
                          isMulti
                          placeholder='שם מזמין'
                        // value={selectedChoreographerOption}
                          //onChange={this.choreographersChange}
                          options={choreographers}
                          name="dance-status-select"
                        /> 
                  </SelectBtn>
                  </label> 
                </SelectRow>

              

              </SelectWrapper>
          
            </SongsWrapper>
    
            <MainSongsTable></MainSongsTable>
          </Wrapper> 
      }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  let props = {
    registerSongView:state.dancesReducer.registerSongView
    }
    
    console.log('----im register view:----');
    console.log(props);
    console.log('--------------');
    
  return props;
};

const mapDispatchToProps = (dispatch) => ({  
  toggleRegisterRedux: (registerSongView) => dispatch(toggleRegisterAction(registerSongView))
});

export default connect(mapStateToProps,
  mapDispatchToProps)
(DancesScreen)

export const Wrapper = styled.div`
  background-color:#ebebeb;
  padding: 0rem 0 2rem 0rem;
`;

export const SelectWrapper = styled.div`
  display:inline-flex;
  margin-top:2rem;
  flex-direction:column; 
`;

export const SelectRow = styled.div`
  display:inline-flex;
  flex-direction:row-reverse;
  margin: 0;
  justify-content:space-between;
  & label {
    font-size: 12px;
    text-align:right;
    color:rgb(152,135,152);
  }
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;
