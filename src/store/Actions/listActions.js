export const createItem = item => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to the db
    const firestore = getFirestore();
    firestore
      .collection("Items")
      .add({
        ...item,
        firstName: "Sarah",
        lastName: "Bell",
        itemID: "6969"
      })
      .then(() => {
        dispatch({ type: "ADD_ITEM", item });
      })
      .catch(err => {
        dispatch({ type: "ADD_ITEM_ERR", err });
      });
  };
};
