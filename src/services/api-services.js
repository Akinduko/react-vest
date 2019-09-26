import axios from "axios";
import { Logger } from "../utils";
import APIServiceError from "./error-services";

const APIBaseURL = process.env.REACT_APP_API_BASE || "https://app.flinvests.com/api";
export const clientId = process.env.REACT_APP_CLIENT_ID || 1;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET || "";

export default class APIRequest {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL: baseURL || APIBaseURL,
      timeout: 10000,
      headers: {
        Accept: "application/json"
      }
    });

    this.instance.interceptors.request.use(
      config => {
        Logger.info("Request: ", config.url);
        return config;
      },
      error => {
        Logger.error("Request Error: ", error);
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      response => {
        Logger.info(
          "Response: ",
          response.config.method,
          response.config.url,
          response.status
        );
        return response;
      },
      error => {
        if (!error.response) {
          Logger.error("Response: ", "Network Error");
          return Promise.reject(
            new APIServiceError({
              status: 500,
              data: {
                message: "Network Error, try again",
                error: "server_error",
                data: null
              }
            })
          );
        }
        Logger.warn("Response: ", error.response);
        return Promise.reject(new APIServiceError(error.response));
      }
    );
  }

  getDeals = async () => {
    const {
      data: { data }
    } = await this.instance.get("/deal");
    return data;
  };

  singleDeal = async id => {
    const { dealResponse } = await this.instance.get(`/deal/${id}`);
    return dealResponse.data;
  };
}
