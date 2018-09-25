import axios from "axios";

export const ACCESS_USER_FETCH_PENDING = "ACCESS_USER_FETCH_PENDING";
export const ACCESS_USER_FETCH_SUCCESS = "ACCESS_USER_FETCH_SUCCESS";
export const ACCESS_USER_FETCH_REJECTED = "ACCESS_USER_FETCH_REJECTED";

export const accesuserJob = servername => async dispatch => {
  dispatch({
    type: ACCESS_USER_FETCH_PENDING
  });
  try {
    const res = await axios.post(
      "http://localhost:3001/jenkins/mysql-create-user",
      servername
    );
    dispatch({
      type: ACCESS_USER_FETCH_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ACCESS_USER_FETCH_REJECTED,
      payload: "there is a problem with jenkins"
    });
  }
};
