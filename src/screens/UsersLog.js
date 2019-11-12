import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { SelectBtn, SearchSelectBtn } from '@appearance/styled';
import { Table, TableBody, TableCell, TableHeader, TableRow, Text } from 'grommet';

class UsersLog extends React.Component{ 
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
      dateRange: null,
      filterOptions:[
        { value: 'מרקיד', label: 'מרקיד', color: '#FFFFFF', isFixed: false },
        { value: 'לא מאושר', label: 'לא מאושר', color: '#FFFFFF' },
        { value: 'תמיר שרצר', label: 'תמיר שרצר', color: '#FFFFFF' }
      ],
      userType:[
        { value: 'מרקיד', label: 'מרקיד', color: '#FFFFFF', isFixed: false },
        { value: 'לא מאושר', label: 'לא מאושר', color: '#FFFFFF' },
        { value: 'תמיר שרצר', label: 'תמיר שרצר', color: '#FFFFFF' }
      ],
      username:[
        { value: 'מרקיד', label: 'מרקיד', color: '#FFFFFF', isFixed: false },
        { value: 'לא מאושר', label: 'לא מאושר', color: '#FFFFFF' },
        { value: 'תמיר שרצר', label: 'תמיר שרצר', color: '#FFFFFF' }
      ],
      actionType:[
        { value: 'מרקיד', label: 'מרקיד', color: '#FFFFFF', isFixed: false },
        { value: 'לא מאושר', label: 'לא מאושר', color: '#FFFFFF' },
        { value: 'תמיר שרצר', label: 'תמיר שרצר', color: '#FFFFFF' }
      ],
      usersData: [
        {
          id: 1,  actionType:'בקשה לרישום שיר',date:'24.07.19', username:'עידן חיל',userType:'אדמין', songName:'אהבתיה'
        },
        {
          id: 2,  actionType:'בקשה לרישום שיר',date:'24.07.19', username:'עידן חיל',userType:'אדמין', songName:'אהבתיה'
        },
        {
          id: 3, actionType:'בקשה לרישום שיר',date:'24.07.19', username:'עידן חיל',userType:'אדמין', songName:'אהבתיה'
        },
      ],
      columns: [
        {
          property: 'songName',
          label: 'שם שיר',
          align: 'center',
          hidden:false,
          width: '101px'
        },
        {
          property: 'userType',
          label: 'סוג משתמש',
          align: 'center',
          hidden:false,
          width: '128px'


        },
        {
          hidden:false,
          property: 'username',
          label: 'שם משתמש',
          align: 'center',
          width: '74px'

        },
        {
          hidden:false,
          property: 'date',
          label: 'תאריך',
          align: 'center',
          width: 'auto'
        },
        {
          hidden:false,
          property: 'actionType',
          label: 'סוג פעולה',
          dataScope: 'column',
          align: 'center',
          width: 'auto'
        }
      ],
    }
  }
  render(){
    let {actionType, username, userType, dateRange ,filterOptions,customStyles, columns, usersData } = this.state;
    return(
      <div>
                <Header> לוג משתמשים</Header>
                  <SelectRow style={{marginTop:'1rem'}}>
                    <label> &nbsp;
                  <SearchSelectBtn style={{width:'300px'}}> 
                      <Select
                        placeholder='חיפוש חופשי'
                        styles={customStyles} 
                        closeMenuOnSelect={true}                          
                      // defaultValue={[filterOptions[0], filterOptions[1]]}
                        isMulti
                        options={filterOptions}
                       // value = {selectedDanceStatusOption}
                      />
                  </SearchSelectBtn>
                  </label>
                  <label>
                     סוג פעולה
                    <SelectBtn>
                        <Select
                          placeholder='סוג פעולה'
                        //  styles={customStyles} 
                          autoFocus
                         // value={selectedChoreographerOption}
                          //onChange={this.danceStatusChange}
                          options={actionType}
                          isMulti
                          name="dance-status-select"
                        /> 
                    </SelectBtn>
                  </label>
                  <label>  שם משתמש
                  <SelectBtn>
                          <Select
                            //styles={customStyles} 
                            autoFocus
                            placeholder='שם משתמש'
                           // value={selectedDanceStatusOption}
                          // onChange={this.danceChange}
                            options={username}
                            isMulti
                            name="dance-status-select"
                          /> 
                      </SelectBtn>
                  </label>
                  <label>
                     סוג משתמש  
                    <SelectBtn>
                        <Select
                          //styles={customStyles} 
                          autoFocus
                          placeholder='סוג משתמש'
                         // value={selectedComposerOption}
                          //onChange={this.performerChange}
                          options={userType}
                          isMulti
                          name="dance-status-select"
                        /> 
                    </SelectBtn>
                  </label>             
              
                  <label>
                  טווח תאריכים
                  <SelectBtn>
                      <Select
                        //styles={customStyles} 
                        autoFocus
                        placeholder='   טווח תאריכים'
                       // value={selectedOrderNumOption}
                        //onChange={this.composersChange}
                        options={dateRange}
                        isMulti
                        name="dance-status-select"
                      /> 
                  </SelectBtn>
                  </label>
                
                </SelectRow>
                <MainTableWrapper>
         
           
         <Table responsiveBreakpoint="small" style={{margin:'3rem 0', float:'right', width:'70%'}}>
            <TableHeader>
              <TableRow style={{backgroundColor:'rgb(152,135,152)'}} align="end" >
                {columns.map(c => (
                  <TableCell key={c.property} scope='col' border='bottom' align={c.align} style={{ fontSize:'10px'}}>
                    <Text style={{fontSize:'14px', fontWeight:'bold', color:'#FFFFFF'}}>{c.label}</Text>
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody style={{ display: 'table-row-group', verticalAlign: 'middle', borderColor: 'inherit'}}>             
               {usersData.map((user,i) => (  
                [
                  <TableRow scope="column" style={{backgroundColor:'#FFFFFF', fontSize:'12px'}} border='bottom' key={user.id}>
                    {columns.map(c => (
                        <TableCell key={c.property} scope={c.dataScope} align={c.align} border='bottom'>
                          <Text style={{fontSize:'14px'}}>
                            {user[c.property]}
                          </Text>
                        </TableCell> 
                        
                      ))}
                  </TableRow>,

                ]
            ))}
            </TableBody>
          </Table>
 
    </MainTableWrapper>
    </div>
    )
  }
}

export default UsersLog;

const Header = styled.h2`
    margin: 0;
    text-align: right;
    color: rgb(152,135,152);
    font-weight: 400;
`;

 const SelectRow = styled.div`
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


const MainTableWrapper = styled.div`
  overflow-x: auto;
  width: 90%;
  display: block;
  margin: 0px auto;
`;