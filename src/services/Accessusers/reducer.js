import {
  ACCESS_USER_FETCH_PENDING,
  ACCESS_USER_FETCH_SUCCESS,
  ACCESS_USER_FETCH_REJECTED
} from "./actions";

const initialState = {
  loading: false,
  error: false,
  entities: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACCESS_USER_FETCH_PENDING:
      return {
        ...state,
        loading: true
      };
    case ACCESS_USER_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        entities: action.payload
      };
    case ACCESS_USER_FETCH_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
