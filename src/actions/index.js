import fetchData from "../api";

export const FETCH_REQUEST_SERIES = "FETCH_REQUEST_SERIES";
export const FETCH_SUCCESS_SERIES = "FETCH_SUCCESS_SERIES";

const requestSeries = () => ({
  type: FETCH_REQUEST_SERIES,
});

const receivedSeries = (serials) => ({
  type: FETCH_SUCCESS_SERIES,
  serials,
});

export const fetchSerials = (name) => (dispatch) => {
  dispatch(requestSeries());
  return fetchData(name).then((response) => dispatch(receivedSeries(response)));
};
