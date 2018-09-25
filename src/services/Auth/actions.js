import axios from "axios";

export const AUTH_LOGIN_PENDING = "AUTH_LOGIN_PENDING";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_REJECTED = "AUTH_LOGIN_REJECTED";

export const AUTH_LOGOUT_PENDING = "AUTH_LOGOUT_PENDING";
export const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS";
export const AUTH_LOGOUT_REJECTED = "AUTH_LOGOUT_REJECTED";

export const logInAction = loginform => async dispatch => {
  const res = await axios.post("http://localhost:3001/users/login", loginform);

  dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
};

export const logOutAction = email => async dispatch => {
  dispatch({
    type: AUTH_LOGOUT_PENDING
  });
  try {
    await axios.get("/api/logout");
    dispatch({
      type: AUTH_LOGIN_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: AUTH_LOGOUT_REJECTED,
      payload: error
    });
  }
};
