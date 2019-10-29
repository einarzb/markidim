import { TOGGLE_EDIT } from '@state/actions/index.js';

let editView = false;


const defaultState = {
  dance:null,
  initialize:false,
  editView:editView
}

const dancesReducer = (state = defaultState,action) => {
  switch(action.type) {
    case TOGGLE_EDIT:
      return toggleEditView();
    default:
      return state
  }
}


function toggleEditView() {      
  defaultState.editView = !defaultState.editView;    
  return {...defaultState}
}


export default dancesReducer