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
