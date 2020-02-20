const initState = {
  authErr: null
};

const authRed = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("User failed to log in");
      return {
        ...state,
        authErr: "Login Failed"
      };
    case "LOGIN_SUCCESS":
      console.log("User logged in");
      return {
        ...state,
        authErr: null
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        authErr: null
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        authErr: action.err.message
      };
    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUEDEOUDOEUDEU");
      return state;

    default:
      return state;
  }
};

export default authRed;
