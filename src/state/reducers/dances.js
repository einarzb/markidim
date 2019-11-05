import { FETCH_DATA } from '@state/actions/index.js';

let danceData = {
};

const defaultState = {
  danceStatus:"מאושר",
}

const dancesReducer = (state = defaultState,action) => {
  switch(action.type) {
    case FETCH_DATA:
      return fetchData(action.data); 
    default:
      return state
  }
}


function fetchData(data) {  
  console.log(data);
  
  danceData=data;  
  return {...danceData};
}


export default dancesReducer