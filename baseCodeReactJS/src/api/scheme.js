import { API_METHOD as METHOD, BASE_URL } from "../containers";
const API_SCHEME = {
  ITEM: {
    GET_ITEM: {
      url: `${BASE_URL}/item`,
      method: METHOD.GET,
    },
    POST_ITEM: {
      url: `${BASE_URL}/item`,
      method: METHOD.POST,
    },
    DELETE_ITEM: {
      url: `${BASE_URL}/item/:id`,
      method: METHOD.DELETE,
    },
    PUT_ITEM: {
      url: `${BASE_URL}/item/:id`,
      method: METHOD.PUT,
    },
    PAGINATION_ITEM: {
      url: `${BASE_URL}/item/pagination`,
      method: METHOD.GET,
    },
    SEARCH_ITEM: {
      url: `${BASE_URL}/item/search`,
      method: METHOD.GET,
    },
  },
};

export default API_SCHEME;
