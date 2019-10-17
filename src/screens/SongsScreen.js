import React, { Component } from 'react';
import Select from 'react-select';

import styled from 'styled-components';
import {CREDIT_CARD, PLUS, APPROVE, EDIT, MORE} from '@assets/index.js';

import { SongsWrapper } from '@appearance/styled';
import ButtonsGroup from '@components/ButtonsGroup';
import MainSongsTable from '@components/MainSongsTable';

let songsCounter = 2; 
let moreIcon = <img src={MORE} width="20"/>

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
          direction:"rtl",
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
      songs:[
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
      songsCounter: 3,
      //add icon to the object property
      mainButtons : [
        {label: 'רישום שיר חדש', span:'עוד ' + songsCounter + ' שירים', onClick:this.registerSong, bgColor:'rgb(83,71,103)', icon:PLUS},
        {label: 'תשלום דמי חבר', span:'לשנת 2019', onClick:this.payMembershipFee, bgColor:'#192F3A', icon:CREDIT_CARD},
      ],
      headerCells: [
        {label: ''},
        {label: ''},
        {label: 'מס׳ אקו״ם'},
        {label: 'שנת יצירה'},
        {label: 'מחברים נוספים'},
        {label: 'סוג ריקוד'},
        {label: 'שם שיר מקורי'},
        {label: 'שם משורר'},
        {label: 'שם מלחין'},
        {label: 'שם מבצע'},
        {label: 'שם ריקוד'},
        {label: 'מוזמן ע״י'},
        {label: 'סטטוס'}        
      ],
      mockSongData: [
        {label: ''},
        {label: moreIcon, onClick:this.showMore},
        {label: '90134'},
        {label: '1964'},
        {label: 'עינר גל, עידן חיל'},
        {label: 'זוגות'},
        {label: 'אהבתיה'},
        {label: 'תרצה אתר'},
        {label: 'יעקב הולנדר'},
        {label: 'שלמה ארצי'},
        {label: 'פתאום עכשיו פתאום היום'},
        {label: 'תמיר שרצר'},
        {label: 'מאושר', borderRadius:'5em', backgroundColor:'#4bf14b'}
      ],
      mockSongData2: [
        {label: moreIcon, onClick:this.showMore},
        {label: '90134'},
        {label: '1964'},
        {label: 'עינר גל, עידן חיל'},
        {label: 'זוגות'},
        {label: 'אהבתיה'},
        {label: 'תרצה אתר'},
        {label: 'יעקב הולנדר'},
        {label: 'שלמה ארצי'},
        {label: 'פתאום עכשיו פתאום היום'},
        {label: 'תמיר שרצר'},
        {label: 'ממתין לאישור', borderRadius:'5em', backgroundColor:'rgb(241, 206, 82)', whiteSpace: 'nowrap', padding:'0 5px'}
      ],
      btns:[
        {icon:APPROVE, onClick:this.toggleApprove},
        {icon:EDIT, onClick:this.toggleEdit}
      ],
      editFlag:false
     //        
 
    }
  }
  
  toggleEdit = () => {
    console.log('toggle edit');       
    this.setState({editFlag:true});
  }

  showMore = () => {
    alert('more here')
  }

  toggleApprove = () => {
    alert('approve song here')
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

  danceStatusChange = (selectedDanceStatusOption) => {
    this.setState({ selectedDanceStatusOption });
  };

  songChange = (selectedSongOption) => {
    this.setState({ selectedSongOption });
  };
  performerChange = (selectedPerformerOption) => {
    this.setState({ selectedPerformerOption });
  };
  composersChange = (selectedComposerOption) => {
    this.setState({ selectedComposerOption });
  };
  choreographersChange = (selectedChoreographerOption) => {
    this.setState({ selectedChoreographerOption });
  };
  writersChange = (selectedWritersOption) => {
    this.setState({ selectedWritersOption });
  };

  render(){
    let {mainButtons, customStyles, selectedDanceStatusOption, danceStatuses, selectedSongOption, songs, selectedPerformerOption, performers, composers, selectedComposerOption, choreographers, selectedChoreographerOption, writers, selectedWritersOption, headerCells, mockSongData, btns, mockSongData2, editFlag } = this.state;
    return(
      <Wrapper> 
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
                      placeholder='שם שיר'
                      value={selectedSongOption}
                      onChange={this.songChange}
                      options={songs}
                      name="dance-status-select"
                    /> 
                </SelectBtn>
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
            </SelectRow>
            <SelectRow>
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
            </SelectRow>
          </SelectWrapper>
        </SongsWrapper>
  
        <MainSongsTable cellsArr={headerCells} data={mockSongData} btns={btns} data2={mockSongData2} editToggle={editFlag}></MainSongsTable>
      </Wrapper> 
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
`;

export const SelectRow = styled.div`
  display:inline-flex;
  flex-direction:row-reverse;
  margin: 0.5rem 0;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`;

export const SelectBtn = styled.div`
  width:112px;
  font-size: 13px;
  font-weight:300;
  margin:0px 4px;
  color:#000000;
  @media (max-width: 768px) {
    width: 100px;
  }
  & input {
    border:1px solid grey;
    padding: 10px;
`;

