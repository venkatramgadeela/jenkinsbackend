import {
  MEB_FETCH_PENDING,
  MEB_FETCH_SUCCESS,
  MEB_FETCH_REJECTED,
  PAGE_RESET_PAGE
} from "./actions";

const initialState = {
  loading: false,
  error: false,
  entities: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PAGE_RESET_PAGE:
      return {
        ...state,
        loading: false,
        error: false,
        entities: {}
      };
    case MEB_FETCH_PENDING:
      return {
        ...state,
        loading: true
      };
    case MEB_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        entities: action.payload
      };
    case MEB_FETCH_REJECTED:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
