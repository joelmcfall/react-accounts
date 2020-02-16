export const signIn = details => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(details.email, details.pass)
      .then(u => {
        dispatch({ type: "LOGIN_SUCCESS" });
        console.log("Great success");
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
        console.log(err.toString());
      });
  };
};

export const register = details => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(details.email, details.password)
      .then(u => {
        dispatch({ type: "REGISTER_SUCCESS" });
        console.log("Great sign in");
      })
      .catch(err => {
        dispatch({ type: "REGISTER_ERROR", err });
        console.log(err.toString());
      });
  };
};
