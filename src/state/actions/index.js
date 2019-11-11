export const TOGGLE_EDIT = 'TOGGLE_EDIT';
export const toggleEditAction = (data) => ({
  type: TOGGLE_EDIT,
  data: {
    data
   }
});


export const TOGGLE_APPROVE = 'TOGGLE_APPROVE';
export const toggleApproveAction = (data) => ({
  type: TOGGLE_APPROVE,
  data: {
    data
   }
});

export const TOGGLE_REGISTER = 'TOGGLE_REGISTER';
export const toggleRegisterAction = (data) => ({
  type: TOGGLE_REGISTER,
  data: {
    data
   }
});

export const FETCH_DATA = 'FETCH_DATA';
export const fetchDataAction = (res) => ({
  type: FETCH_DATA,
  data: {
    res
  }  
});

export const TOGGLE_DELETE = 'TOGGLE_DELETE';
export const toggleDeleteAction = (data) => ({
  type: TOGGLE_DELETE,
  data: {
    data
   }
});

export const TOGGLE_DANCELIST = 'TOGGLE_DANCELIST';
export const toggleDanceListAction = (data) => ({
  type: TOGGLE_DANCELIST,
  data: {
    data
   }
});

export const TOGGLE_REGISTER_USER = 'TOGGLE_REGISTER_USER';
export const toggleUserRegisterAction = (data) => ({
  type: TOGGLE_REGISTER_USER,
  data: {
    data
   }
});

export const TOGGLE_LOGIN_USER = 'TOGGLE_LOGIN_USER';
export const toggleLoginAction = (data) => ({
  type: TOGGLE_LOGIN_USER,
  data: {
    data
   }
});


export const TOGGLE_RESET= 'TOGGLE_RESET';
export const toggleResetAction = (data) => ({
  type: TOGGLE_RESET,
  data: {
    data
   }
});


