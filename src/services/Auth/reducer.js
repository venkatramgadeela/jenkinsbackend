import {
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT_PENDING,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_REJECTED
} from "./actions";

const initialState = {
  loading: false,
  error: null,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_PENDING:
      return {
        ...state,
        loading: true
      };
    case AUTH_LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload
      };
    case AUTH_LOGOUT_PENDING:
      return {
        ...state,
        loading: true
      };
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null
      };
    case AUTH_LOGOUT_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
