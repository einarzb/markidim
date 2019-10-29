import { TOGGLE_EDIT, TOGGLE_APPROVE, TOGGLE_REGISTER } from '@state/actions/index.js';

let editView = false;
let approveView = false;
let registerSongView = false;

const defaultState = {
  dance:null,
  initialize:false,
  editView:editView,
  approveView:approveView,
  registerSongView:registerSongView
}

const dancesReducer = (state = defaultState,action) => {
  switch(action.type) {
    case TOGGLE_EDIT:
      return toggleEditView();
    case TOGGLE_APPROVE:
      return toggleApproveView();
    case TOGGLE_REGISTER:
      return toggleRegisterView();  
    default:
      return state
  }
}


function toggleEditView() {      
  defaultState.editView = !defaultState.editView;    
  return {...defaultState}
}

function toggleApproveView() {      
  defaultState.approveView = !defaultState.approveView;  
  return {...defaultState}
}

function toggleRegisterView() {      
  defaultState.registerSongView = !defaultState.registerSongView;  
  return {...defaultState}
}


export default dancesReducer