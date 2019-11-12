import React from "react";
import { Auth } from "aws-amplify";
import produce from "immer";

const SIGNING = "SIGNING";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

const initialState = {
  error: null,
  isLoading: true,
  isSigning: false,
  isSignedIn: false,
};

const AuthContext = React.createContext(null);

function asyncDelay(duration = 0) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

const authReducer = produce((draft, action) => {
  draft.error = action.error || null;
  draft.isLoading = false;
  switch (action.type) {
    case SIGNING:
      draft.isSigning = true;
      return;
    case SIGN_IN:
      draft.isSigning = false;
      draft.isSignedIn = true;
      return;
    case SIGN_OUT:
      draft.isSigning = false;
      draft.isSignedIn = false;
      return;
    default:
      return;
  }
});

export function AuthProvider({ children, initialDelay = 0 }) {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  React.useEffect(() => {
    onLoad();
  }, []); // eslint-disable-line

  async function onLoad() {
    try {
      await asyncDelay(initialDelay);
      const res = await Auth.currentSession();
      if (res && res.idToken) {
        dispatch({ type: SIGN_IN });
      }
    } catch (e) {
      dispatch({ type: SIGN_OUT, error: e });
    }
  }

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const { state, dispatch } = React.useContext(AuthContext);

  async function signIn(email, password) {
    try {
      dispatch({ type: SIGNING });
      await Auth.signIn(email, password);
      dispatch({ type: SIGN_IN });
    } catch (e) {
      dispatch({ type: SIGN_OUT, error: e.message });
    }
  }

  async function signOut() {
    try {
      dispatch({ type: SIGNING });
      await Auth.signOut();
      dispatch({ type: SIGN_OUT });
    } catch (e) {
      dispatch({ type: SIGN_IN, error: e.message });
    }
  }

  return [state, { signIn, signOut }];
}

//   async function signUp(email, password) {
//     setIsSigningUp(true);
//     try {
//       // const user = await Auth.signUp({ username: email, password });
//       const user = "test";
//       setNewUser(user);
//     } catch (e) {
//       alert(e.message);
//     }
//     setIsSigningUp(false);
//   }
