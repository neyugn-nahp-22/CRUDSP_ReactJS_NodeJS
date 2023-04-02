import { actionType } from "../../containers";

const { Items } = actionType;
const DEFAULT_STATE = {
  listData: [],
  isFetching: false,
  isError: false,
  message: "",
};
export default function HrReducer(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case Items.GET_ITEMS_REQUEST:
    case Items.ADD_ITEMS_REQUEST:
    case Items.DEL_ITEMS_REQUEST:
    case Items.PUT_ITEMS_REQUEST:
    case Items.SEARCH_ITEMS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };
    case Items.GET_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listData: payload.listData,
      };
    case Items.ADD_ITEMS_SUCCESS:
    case Items.DEL_ITEMS_SUCCESS:
    case Items.PUT_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case Items.SEARCH_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listData: payload.listData,
        nameSearch: payload.nameSearch,
      };
    case Items.GET_ITEMS_FAILURE:
    case Items.ADD_ITEMS_FAILURE:
    case Items.DEL_ITEMS_FAILURE:
    case Items.PUT_ITEMS_FAILURE:
    case Items.SEARCH_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };
    default:
      return state;
  }
}
