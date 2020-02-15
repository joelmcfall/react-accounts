const initState = {
  shopList: [
    { id: 1, name: "Eggs", quantity: 5 },
    { id: 2, name: "Sugar", quantity: 1 }
  ]
};

const listRed = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("Created Item:", action.item);
      return state;
    case "ADD_ITEM_ERR":
      console.log("Create Item Error: ", action.err);
      return state;
    default:
      return state;
  }
};

export default listRed;
