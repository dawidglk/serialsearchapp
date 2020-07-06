import fetchData from "../api";

export const FETCH_REQUEST_SERIES = "FETCH_REQUEST_SERIES";
export const FETCH_SUCCESS_SERIES = "FETCH_SUCCESS_SERIES";
export const SET_DAY_OF_WEEK = "SET_DAY_OF_WEEK";

const requestSeries = () => ({ type: FETCH_REQUEST_SERIES });

const receivedSeries = (serials) => ({ type: FETCH_SUCCESS_SERIES, serials });

export const setDayofWeek = (day) => ({ type: SET_DAY_OF_WEEK, day });

export const fetchSerials = (name) => (dispatch) => {
  dispatch(requestSeries());
  return fetchData(name).then((response) => dispatch(receivedSeries(response)));
};
