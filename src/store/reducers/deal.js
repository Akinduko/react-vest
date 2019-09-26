import { dealsConstants } from "../constants";

// Set the initial state of the deals

export const INITIAL_STATE_DEALS = {
  isLoading: true,
  loaded: false,
  errors: {},
  data: [ {
    id: 1,
    status: "completed || ongoing",
    title: "Completed deal",
    avatar: "",
    interest: "15",
    duration: 2,
    category: "Real Estate Investment",
    description:
      "Aut sunt rem fuga consequatur modi temporibus autem impedit sapiente dolores ut incidunt ut unde fugit et quasi maxime et aut voluptatum officia aliquid ut et suscipit non sed sit aut est vel est nobis consectetur ex voluptas velit distinctio enim est aut illo vero aliquid exercitationem corporis quidem ipsum velit omnis minima nulla iure sed qui sequi quaerat voluptas recusandae tempora iure eligendi praesentium ",
      payments: 2,
    amount: "3,500",
    total_payments: "9,000"
  }]
};

export const INITIAL_STATE_DEAL = {
  isLoading: true,
  errors: {},
  loaded: false,
  data: {
    id: 1,
    status: "completed || ",
    title: "Completed deal",
    avatar: "",
    interest: "15",
    duration: 2,
    category: "Real Estate Investment",
    description:
      "This campaign is to allow aute irure dolor  in reprehenderit in voluptate velit....",
    count: 2,
    amount: "3,500",
    total: "9,000"
  }
};

export function deals(state = INITIAL_STATE_DEALS, action) {
  switch (action.type) {
    case dealsConstants.FETCH_DEALS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        loaded: true,
        errors: {}
      };
    case dealsConstants.FETCH_DEALS_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        errors: action.errors.response.data
      };
    case dealsConstants.FETCH_DEALS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: action.response
      };
    default:
      return state;
  }
}

export function deal(state = INITIAL_STATE_DEAL, action) {
  switch (action.type) {
    case dealsConstants.FETCH_DEALS_LIST_REQUEST:
      return {
        ...state,
        loaded: true,
        isLoading: true,
        errors: {}
      };
    case dealsConstants.FETCH_DEALS_LIST_FAILURE:
      return {
        ...state,
        loaded: true,
        isLoading: false,
        errors: action.errors.response.data
      };
    case dealsConstants.FETCH_DEALS_LIST_SUCCESS:
      return {
        ...state,
        loaded: true,
        isLoading: false,
        data: action.response
      };
    default:
      return state;
  }
}
