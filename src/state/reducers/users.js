
import { TOGGLE_DELETE, TOGGLE_DANCELIST, TOGGLE_EDIT } from '@state/actions/index.js';

let deleteView = false;
let danceListView = false;
let editUserView = false;

const defaultState = {
  user:null,
  initialize:false,
  deleteView:deleteView,
  danceListView:danceListView,
  editUserView:editUserView

}

const usersReducer = (state = defaultState,action) => {
  switch(action.type) {
    case TOGGLE_DELETE:
      return toggleDeleteView();
    case TOGGLE_DANCELIST:
      return toggleDanceListView();
    case TOGGLE_EDIT:
      return toggleEditView();  
    default:
      return state
  }
}

function toggleEditView() {      
  defaultState.editUserView = !defaultState.editUserView;    
  return {...defaultState}
}


function toggleDeleteView() {      
  defaultState.deleteView = !defaultState.deleteView;    
  return {...defaultState}
}

function toggleDanceListView() {
  defaultState.danceListView = !defaultState.danceListView;    
  return {...defaultState}
}


export default usersReducer