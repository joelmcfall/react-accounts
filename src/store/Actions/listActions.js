export const createItem = item => {
  return (dispatch, getState) => {
    //make async call to the db
    dispatch({ type: "ADD_ITEM", item });
  };
};
