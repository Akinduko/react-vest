import { dealsConstants } from "../constants";
import APIRequest from "../../services/api-services";
import APIServiceError from "../../services/error-services";

const apiBaseURL =
  process.env.REACT_APP_AUTH_API_BASE || "https://app.flinvests.com/api";
const apiRequest = new APIRequest(apiBaseURL);

export function getDeals() {
  function request() {
    return { type: dealsConstants.FETCH_DEALS_LIST_REQUEST };
  }

  function success(response) {
    return { type: dealsConstants.FETCH_DEALS_LIST_SUCCESS, response };
  }

  function failure(errors) {
    return { type: dealsConstants.FETCH_DEALS_LIST_FAILURE, errors };
  }

  return async dispatch => {
    try {
      dispatch(request());
      const response = await apiRequest.getDeals();
      dispatch(success(response));
    } catch (error) {
      if (error instanceof APIServiceError) {
        dispatch(failure(error));
        // throw new Error(error);
      }
    }
  };
}

export function singleDeal(id) {
  function request() {
    return { type: dealsConstants.FETCH_DEAL_REQUEST };
  }

  function success(response) {
    return { type: dealsConstants.FETCH_DEAL_SUCCESS, response };
  }

  function failure(errors) {
    return { type: dealsConstants.FETCH_DEAL_FAILURE, errors };
  }

  return async dispatch => {
    try {
      dispatch(request());
      const response = await apiRequest.singleDeal(id);
      dispatch(success(response));
    } catch (error) {
      if (error instanceof APIServiceError) {
        dispatch(failure(error));
        // throw new Error(error);
      }
    }
  };
}
