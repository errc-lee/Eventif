import * as types from '../constants/actionTypes';

// Reducer that handles user login, logout and authentication

const initialState = {
  username: null,
  useremail: null,
  user_id: null,
  authUser: false,
  loginForm: { email: '', password: '' },
  signupForm: { email: '', username: '', password: '' },
  watchlist: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_LOGIN:
      return {
        ...state,
        loginForm: { ...state.loginForm, [action.payload.field]: action.payload.value },
      };

    case types.SEND_SIGNUP:
      return state;

    case types.LOGIN_SUCCESSFUL:
      const { user_id, email, username } = action.payload;
      return {
        ...state,
        authUser: true,
        user_id,
        username,
        useremail: email,
      };

    case types.SEND_LOGOUT:
      return {
        username: null,
        useremail: null,
        user_id: null,
        authUser: false,
        loginForm: { email: '', password: '' },
        signupForm: { email: '', username: '', password: '' },
      };

    case types.UPDATE_SIGNUP:
      return {
        ...state,
        signupForm: { ...state.signupForm, [action.payload.field]: action.payload.value },
      };

    case types.GET_WATCHLIST:
      return {
        ...state,
        watchlist: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
