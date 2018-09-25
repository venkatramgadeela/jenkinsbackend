import axios from "axios";

export const MEB_FETCH_PENDING = "MEB_FETCH_PENDING";
export const MEB_FETCH_SUCCESS = "MEB_FETCH_SUCCESS";
export const MEB_FETCH_REJECTED = "MEB_FETCH_REJECTED";
export const PAGE_RESET_PAGE = "PAGE_RESET_PAGE";

export const triggerJenJob = servername => async dispatch => {
  //   console.log(servername);
  dispatch({
    type: MEB_FETCH_PENDING
  });
  try {
    const res = await axios.post(
      "http://localhost:3001/jenkins/sendmail",
      servername
    );
    dispatch({
      type: MEB_FETCH_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: MEB_FETCH_REJECTED,
      payload: "there is a problem with jenkins"
    });
  }
};

export const resetPage = () => ({
  type: PAGE_RESET_PAGE
});
