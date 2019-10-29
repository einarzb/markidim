import { TOGGLE_EDIT, TOGGLE_APPROVE } from '@state/actions/index.js';

let editView = false;
let approveView = false;

const defaultState = {
  dance:null,
  initialize:false,
  editView:editView,
  approveView:approveView
}

const dancesReducer = (state = defaultState,action) => {
  switch(action.type) {
    case TOGGLE_EDIT:
      return toggleEditView();
    case TOGGLE_APPROVE:
      return toggleApproveView();
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



export default dancesReducer