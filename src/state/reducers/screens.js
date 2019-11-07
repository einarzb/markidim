import { TOGGLE_EDIT, TOGGLE_APPROVE, TOGGLE_REGISTER, TOGGLE_REGISTER_USER , TOGGLE_LOGIN_USER} from '@state/actions/index.js';

let editView = false;
let approveView = false;
let registerSongView = false;
let registerView = false;
let loginView = false;

const defaultState = {
  dance:null,
  initialize:false,
  editView:editView,
  approveView:approveView,
  registerSongView:registerSongView,
  registerView:registerView,
  loginView:loginView
}

const screensReducer = (state = defaultState,action) => {
  switch(action.type) {
    case TOGGLE_EDIT:
      return toggleEditView();
    case TOGGLE_APPROVE:
      return toggleApproveView();
    case TOGGLE_REGISTER:
      return toggleRegisterView();  
    case TOGGLE_REGISTER_USER:
      return toggleRegisterUser();
    case TOGGLE_LOGIN_USER:
      return toggleLoginUser();
  //  case FETCH_DATA:
    //  return fetchData(action.data); 
    default:
      return state
  }
}

function toggleLoginUser(){
  defaultState.loginView = !defaultState.loginView;
  return {...defaultState}
}


function toggleRegisterUser(){
  defaultState.registerView = !defaultState.registerView;
  return {...defaultState}
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

export default screensReducer